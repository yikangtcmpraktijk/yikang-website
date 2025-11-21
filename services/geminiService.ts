
import { GoogleGenAI, Chat } from "@google/genai";

// Singleton instance pattern to reuse the client
let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing. Chat features will not work.");
    // Return a dummy object or handle gracefully in UI, but here we throw to fail fast in dev
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Je bent de virtuele assistent van YIKANG TCM PRAKTIJK. 
      
      Jouw doel is:
      1. Vragen beantwoorden over Traditionele Chinese Geneeskunde (TCM), acupunctuur, Tui-Na, Cupping en Gua-Sha.
      2. Informatie geven over de praktijk (YIKANG TCM PRAKTIJK, Open Ma-Za 9u-18u, woensdag/zondag gesloten, locatie: Den Haag).
      3. Prijzen geven uit het officiële prijsboek.
      
      Prijsinformatie (Prijzen in EUR):
      - Acupunctuur:
        * Intakegesprek: €30.00
        * Klassieke Acupunctuur: €65.00
        * Ooracupunctuur: €40.00
        * Acupunctuur met Cupping/Gua-Sha: €75.00
        * Verblijfsnaalden: €30.00
      - Tui-Na Therapie:
        * 30 min: €40.00
        * 55 min: €65.00
        * 90 min: €97.50
      - Chinese Voetreflex:
        * 55 min: €65.00
      - Cupping: €35.00 per behandeling
      - Gua-Sha: €35.00 per behandeling
      
      Richtlijnen:
      - Taal: Nederlands.
      - Toon: Kalm, empathisch, professioneel.
      - BELANGRIJK: Je mag GEEN medische diagnoses stellen. Adviseer bij ernstige klachten altijd om een huisarts te raadplegen.
      - Houd antwoorden beknopt (onder 100 woorden, tenzij om details wordt gevraagd).
      `,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
  const chat = getChatSession();
  
  try {
    const result = await chat.sendMessageStream({ message });
    
    // Create a generator to yield strings from the response chunks
    async function* textGenerator() {
      for await (const chunk of result) {
        if (chunk.text) {
          yield chunk.text;
        }
      }
    }
    
    return textGenerator();
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};
