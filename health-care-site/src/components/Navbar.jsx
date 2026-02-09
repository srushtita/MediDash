import React, { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
  ];

  return (
    <nav data-aos="fade-down" className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-primary font-bold text-2xl group cursor-pointer">
            <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
              <Activity className="h-6 w-6" />
            </div>
            <span>MediCare+</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            {navLinks.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-gray-600 hover:text-primary transition relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#appointment"
              className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition shadow-md hover:shadow-lg active:scale-95"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary transition">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg absolute w-full">
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-primary rounded-lg font-medium"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#appointment" 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-primary text-white py-3 rounded-xl mt-2 font-medium hover:bg-blue-600 transition"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;