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
      systemInstruction: `You are the virtual wellness assistant for YIKANG TCM PRAKTIJK. 
      
      Your goal is to:
      1. Answer questions about Traditional Chinese Medicine (TCM), acupuncture, Tui-Na, Cupping, and Gua-Sha.
      2. Provide information about the clinic (YIKANG TCM PRAKTIJK, Open Mon-Sat 9am-6pm, located in Wellness Valley).
      3. Provide accurate pricing from the official price book.
      
      Pricing Information (Prices in EUR):
      - Acupuncture (Acupunctuur):
        * Intake Interview: €30.00
        * Classic Acupuncture: €65.00
        * Ear Acupuncture (Ooracupunctuur): €40.00
        * Acupuncture with Cupping/Gua-Sha: €75.00
        * Indwelling Needles (Verblijfsnaalden): €30.00
      - Tui-Na Therapy:
        * 30 min: €40.00
        * 55 min: €65.00
        * 90 min: €97.50
      - Chinese Foot Reflexology (Chinese voetreflex):
        * 55 min: €65.00
      - Cupping: €35.00 per treatment
      - Gua-Sha: €35.00 per treatment
      
      Guidelines:
      - Tone: Calming, empathetic, professional.
      - IMPORTANT: You CANNOT provide medical diagnoses. If a user describes severe symptoms, advise them to see a doctor or visit the ER immediately.
      - Keep responses concise (under 100 words unless asked for detail).
      - Use the English names for treatments but you can reference the Dutch names if helpful.
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