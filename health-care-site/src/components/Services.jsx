import React, { useState } from 'react';
import { HeartPulse, Stethoscope, Brain, Baby, X } from 'lucide-react';

const services = [
  { 
    icon: <Stethoscope size={32} />, 
    title: "General Care", 
    desc: "Routine checkups and comprehensive preventive care for all ages.",
    details: "Our General Care includes annual physicals, immunizations, and chronic disease management. We focus on preventive strategies to keep you healthy year-round."
  },
  { 
    icon: <HeartPulse size={32} />, 
    title: "Cardiology", 
    desc: "Expert heart care, advanced diagnostics, and treatment plans.",
    details: "Our Cardiology department features state-of-the-art EKG, stress testing, and echocardiograms. We treat hypertension, arrhythmia, and coronary artery disease."
  },
  { 
    icon: <Brain size={32} />, 
    title: "Neurology", 
    desc: "Specialized treatment for a wide range of neurological disorders.",
    details: "We provide comprehensive care for migraines, epilepsy, stroke recovery, and neuropathy. Our neurologists use the latest imaging technology for accurate diagnosis."
  },
  { 
    icon: <Baby size={32} />, 
    title: "Pediatrics", 
    desc: "Compassionate and specialized healthcare for infants and children.",
    details: "From newborn care to adolescent health, our pediatricians are here for your child's growth. We handle vaccinations, school physicals, and acute illnesses."
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
           <span className="text-primary font-semibold uppercase tracking-wider">What We Do</span>
           <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-16">Our Medical Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-20 h-20 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
              <p className="text-gray-500 mb-6">{service.desc}</p>
              
              <button 
                onClick={() => setSelectedService(service)}
                className="text-primary font-semibold hover:underline"
              >
                Read Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div 
            className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-[fadeIn_0.3s_ease-out]"
            data-aos="zoom-in"
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-500 transition"
            >
              <X size={20} />
            </button>

            <div className="text-primary mb-4 flex justify-center">
              {React.cloneElement(selectedService.icon, { size: 48 })}
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4">{selectedService.title}</h3>
            <p className="text-gray-600 leading-relaxed text-center mb-8">
              {selectedService.details}
            </p>

            <button 
              onClick={() => {
                setSelectedService(null);
                window.location.href = "#appointment";
              }}
              className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Book {selectedService.title}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;