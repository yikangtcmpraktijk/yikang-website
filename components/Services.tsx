import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

type ServiceId = 'acupuncture' | 'tuina' | 'reflexology';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceId | null>(null);

  const services = [
    {
      id: 'acupuncture' as ServiceId,
      title: 'Acupuncture',
      description: "Stimulate your body's natural healing ability using fine sterile needles. Effective for pain relief, stress, and hormonal balance.",
      image: '/service-acupuncture.jpg',
      priceFrom: '€30',
      features: ['Intake & Diagnosis', 'Classic Acupuncture', 'Ear Acupuncture', 'Combos']
    },
    {
      id: 'tuina' as ServiceId,
      title: 'Tui-Na Therapy',
      description: 'Therapeutic Chinese massage focusing on meridian points and muscles to relieve tension and improve energy flow.',
      image: '/service-tuina.jpg',
      priceFrom: '€40',
      features: ['Meridian Massage', 'Muscle Release', '30-90 Minute Sessions']
    },
    {
      id: 'reflexology' as ServiceId,
      title: 'Reflexology & Detox',
      description: 'Specialized treatments including Foot Reflexology, Cupping, and Gua-Sha to promote circulation and detoxify.',
      image: '/service-reflexology.jpg',
      priceFrom: '€35',
      features: ['Foot Reflexology', 'Cupping Therapy', 'Gua-Sha Scrapping']
    }
  ];

  const pricingData = {
    acupuncture: {
      title: 'Acupuncture Pricing',
      subtitle: 'Effective for pain, stress, and internal balance.',
      items: [
        { name: 'Intake Interview (Intakegesprek)', price: '€30.00', note: 'Required for first visit' },
        { name: 'Classic Acupuncture (Klassieke acupunctuur)', price: '€65.00', note: 'Per treatment' },
        { name: 'Ear Acupuncture (Ooracupunctuur)', price: '€40.00', note: 'Per treatment' },
        { name: 'Acupuncture with Cupping/Gua-Sha', price: '€75.00', note: 'Combined treatment' },
        { name: 'Indwelling Needles (Verblijfsnaalden)', price: '€30.00', note: 'Per treatment' }
      ]
    },
    tuina: {
      title: 'Tui-Na Therapy Pricing',
      subtitle: 'Chinese therapeutic massage for musculoskeletal issues.',
      items: [
        { name: 'Treatment 30 min', price: '€40.00', note: 'Focus on specific area' },
        { name: 'Treatment 55 min', price: '€65.00', note: 'Full session' },
        { name: 'Treatment 90 min', price: '€97.50', note: 'Extended session' }
      ]
    },
    reflexology: {
      title: 'Specialized Therapies Pricing',
      subtitle: 'Detoxification and relaxation treatments.',
      items: [
        { name: 'Chinese Foot Reflexology (55 min)', price: '€65.00', note: 'Chinese voetreflex' },
        { name: 'Cupping Therapy', price: '€35.00', note: 'Per treatment' },
        { name: 'Gua-Sha Therapy', price: '€35.00', note: 'Per treatment' }
      ]
    }
  };

  return (
    <section id="services" className="py-24 relative scroll-mt-28">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-primary-800/30 blur-3xl rounded-full -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary-50 mb-6">Our Treatments</h2>
          <p className="text-primary-300 text-lg font-light leading-relaxed">
            We offer a comprehensive range of traditional therapies tailored to your specific needs. 
            Click on any treatment below to view our current price list.
          </p>
        </div>

        {/* Interactive Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className="relative bg-primary-800/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-primary-700/50 hover:border-gold-500/30 hover:bg-primary-800/60 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-500 flex flex-col text-left group focus:outline-none focus:ring-2 focus:ring-gold-500/50"
            >
              <div className="h-56 overflow-hidden w-full relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 bg-gold-600/90 backdrop-blur text-white px-3 py-1 rounded text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Pricing
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col w-full">
                <h3 className="font-serif text-2xl font-bold mb-3 text-primary-50 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary-300 mb-6 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
                <div className="mt-auto w-full flex justify-between items-end border-t border-primary-700/50 pt-4">
                  <span className="text-xs font-bold text-primary-500 uppercase tracking-wider group-hover:text-primary-400 transition-colors">More Details</span>
                  <div className="text-right">
                    <span className="block text-[10px] text-primary-500 uppercase tracking-widest">Starting at</span>
                    <span className="text-gold-400 font-serif text-xl">{service.priceFrom}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Pricing Modal Popup */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-primary-950/90 backdrop-blur-md" 
                onClick={() => setSelectedService(null)}
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="bg-primary-900 rounded-2xl shadow-2xl w-full max-w-2xl z-10 overflow-hidden relative max-h-[90vh] flex flex-col border border-primary-700"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 bg-primary-800/50 hover:bg-primary-800 text-primary-300 hover:text-white rounded-full transition-colors z-20"
                >
                  <X size={20} />
                </button>

                <div className="bg-gradient-to-r from-gold-700 to-gold-600 p-8 text-center text-white relative shrink-0">
                  <h3 className="font-serif text-3xl mb-2">{pricingData[selectedService].title}</h3>
                  <p className="text-gold-100 opacity-90 font-light tracking-wide">{pricingData[selectedService].subtitle}</p>
                </div>
                
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-primary-900">
                  <div className="space-y-2">
                    {pricingData[selectedService].items.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-primary-800/50 last:border-0 pb-4 pt-2 last:pb-0 group hover:bg-primary-800/30 rounded-lg px-3 transition-colors">
                        <div className="mb-2 sm:mb-0 pr-4">
                          <div className="font-medium text-lg text-primary-100 group-hover:text-white transition-colors">{item.name}</div>
                          {item.note && <div className="text-sm text-primary-500 italic group-hover:text-primary-400 transition-colors">{item.note}</div>}
                        </div>
                        <div className="font-serif font-bold text-xl text-gold-500 whitespace-nowrap">{item.price}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-primary-800 text-center">
                    <p className="text-primary-500 text-xs uppercase tracking-wider mb-6">
                      Prices subject to change
                    </p>
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedService(null)}
                      className="inline-block px-10 py-3 bg-gold-600 text-white font-bold rounded-full hover:bg-gold-500 transition-colors shadow-lg shadow-gold-900/20 transform hover:-translate-y-0.5 text-sm tracking-wider uppercase"
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Services;