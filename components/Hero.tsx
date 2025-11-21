
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600334019640-46d97136b3b3?auto=format&fit=crop&q=80&w=2070"
          alt="Peaceful Acupuncture Setting" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        {/* Gradient overlay to blend with body background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/90 to-primary-950"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-gold-500/50"></div>
          <span className="text-gold-400 font-medium tracking-[0.3em] uppercase text-xs md:text-sm">
            Holistisch & Welzijn
          </span>
          <div className="h-[1px] w-12 bg-gold-500/50"></div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-50 mb-8 leading-tight tracking-tight drop-shadow-2xl"
        >
          Herstel Balans <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic pr-2">Natuurlijk</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-primary-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Ervaar de eeuwenoude wijsheid van Traditionele Chinese Geneeskunde in een moderne, serene omgeving. 
          Gespecialiseerd in pijnbestrijding, stressvermindering en hormonale balans.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href="#contact" 
            className="px-10 py-4 bg-gold-600 text-white rounded-full font-bold text-base tracking-wider hover:bg-gold-500 transition-all shadow-[0_0_30px_-5px_rgba(198,144,88,0.3)] hover:shadow-[0_0_40px_-5px_rgba(198,144,88,0.5)] hover:-translate-y-1"
          >
            Maak Afspraak
          </a>
          <a 
            href="#services" 
            className="px-10 py-4 bg-transparent text-primary-200 border border-primary-600 rounded-full font-medium text-base tracking-wider hover:bg-primary-800/50 transition-all hover:border-gold-500/50 hover:text-gold-400"
          >
            Onze Diensten
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-500/50 animate-pulse"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
