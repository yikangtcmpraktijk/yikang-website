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
                src="/about-treatments.jpg" 
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
              Our Philosophy
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Restoring Balance Naturally
            </h2>
            <h3 className="text-xl text-gold-400 mb-6 font-medium italic">
              "Treating the root cause, not just the symptoms."
            </h3>
            <p className="text-primary-200 mb-6 leading-relaxed text-lg">
              At YIKANG TCM Praktijk, we specialize in Traditional Chinese Medicine (TCM), a comprehensive holistic system that has been practiced for thousands of years. 
              Our approach goes beyond providing temporary relief; we aim to restore the body's natural harmony (Yin and Yang) and vital energy flow (Qi).
            </p>
            <p className="text-primary-200 mb-8 leading-relaxed text-lg">
              We combine proven therapeutic modalities—including <strong>Acupuncture</strong>, <strong>Tui-Na Therapy</strong>, and <strong>Cupping</strong>—to create personalized treatment plans. 
              Whether you are seeking relief from chronic pain, stress reduction, or hormonal balance, our treatments are tailored to support your unique path to long-term wellness.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-800 p-4 rounded-lg border-l-4 border-gold-500 shadow-lg">
                <div className="font-bold text-white text-xl mb-1">Holistic</div>
                <div className="text-sm text-primary-400 uppercase tracking-wider">Whole Body Care</div>
              </div>
              <div className="bg-primary-800 p-4 rounded-lg border-l-4 border-gold-500 shadow-lg">
                <div className="font-bold text-white text-xl mb-1">Natural</div>
                <div className="text-sm text-primary-400 uppercase tracking-wider">Non-Invasive</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;