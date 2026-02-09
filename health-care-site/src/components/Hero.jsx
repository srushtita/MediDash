import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="bg-blue-50 min-h-[600px] flex items-center relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 py-16 md:py-0">
        
        {/* Text Content */}
        <div className="md:w-1/2 z-10 space-y-6 text-center md:text-left">
          <span data-aos="fade-down" className="inline-block bg-white text-primary px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
            24/7 Emergency Service
          </span>
          <h1 data-aos="fade-right" data-aos-delay="200" className="text-4xl md:text-5xl font-extrabold text-dark leading-tight">
            Caring for Your Health, <br />
            <span className="text-primary">Protecting Your Future.</span>
          </h1>
          <p data-aos="fade-right" data-aos-delay="400" className="text-gray-600 text-lg md:max-w-lg">
            Our team of expert doctors provides world-class medical services with a personal touch, using the latest technology.
          </p>
          <div data-aos="fade-right" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#doctors" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
              Find a Doctor
            </a>
            <a href="#services" className="flex items-center justify-center text-gray-700 font-medium hover:text-primary transition group">
              Learn More <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 relative" data-aos="fade-left" data-aos-delay="400">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" 
              alt="Friendly Doctor" 
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;