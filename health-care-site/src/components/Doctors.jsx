// src/components/Doctors.jsx
import React from 'react';
import { Linkedin, Twitter, Stethoscope } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    description: "Expert in heart health with over 15 years of experience."
  },
  {
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    description: "Specialized in treating complex neurological disorders."
  },
  {
    name: "Dr. Emily Parker",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    description: "Dedicated to the health and well-being of children."
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    description: "Advanced surgical solutions for bone and joint issues."
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">Meet Our Specialists</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our team of highly qualified doctors is ready to provide you with the best medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Stethoscope className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">{doctor.specialty}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{doctor.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{doctor.description}</p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                  <a href="#" className="p-2 text-gray-400 hover:text-primary hover:bg-blue-50 rounded-full transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-2 text-gray-400 hover:text-primary hover:bg-blue-50 rounded-full transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;