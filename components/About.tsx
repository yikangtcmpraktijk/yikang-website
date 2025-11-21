
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-primary-700 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a92d1d0495e?auto=format&fit=crop&q=80&w=1000"
                alt="Holistic TCM Treatments" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-800 rounded-2xl -z-0 border border-primary-700"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-bold tracking-widest uppercase rounded-full mb-4 border border-gold-500/20">
              Onze Filosofie
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Natuurlijke Balans Herstellen
            </h2>
            <h3 className="text-xl text-gold-400 mb-6 font-medium italic">
              "Wij behandelen de oorzaak, niet alleen de symptomen."
            </h3>
            <p className="text-primary-200 mb-6 leading-relaxed text-lg">
              Bij YIKANG TCM Praktijk zijn we gespecialiseerd in Traditionele Chinese Geneeskunde (TCM), een allesomvattend holistisch systeem dat al duizenden jaren wordt beoefend. 
              Onze aanpak gaat verder dan tijdelijke verlichting; we streven ernaar de natuurlijke harmonie (Yin en Yang) en vitale energie (Qi) van het lichaam te herstellen.
            </p>
            <p className="text-primary-200 mb-8 leading-relaxed text-lg">
              We combineren bewezen therapeutische modaliteiten—waaronder <strong>Acupunctuur</strong>, <strong>Tui-Na Therapie</strong> en <strong>Cupping</strong>—om gepersonaliseerde behandelplannen te maken. 
              Of u nu verlichting zoekt voor chronische pijn, stressvermindering of hormonale balans, onze behandelingen zijn afgestemd op uw unieke pad naar langdurig welzijn.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-800 p-4 rounded-lg border-l-4 border-gold-500 shadow-lg">
                <div className="font-bold text-white text-xl mb-1">Holistisch</div>
                <div className="text-sm text-primary-400 uppercase tracking-wider">Zorg voor het hele lichaam</div>
              </div>
              <div className="bg-primary-800 p-4 rounded-lg border-l-4 border-gold-500 shadow-lg">
                <div className="font-bold text-white text-xl mb-1">Natuurlijk</div>
                <div className="text-sm text-primary-400 uppercase tracking-wider">Niet-invasief</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
