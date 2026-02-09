import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <Appointment />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;