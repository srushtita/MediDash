import React from 'react';
import { Activity, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing! We will keep you updated.");
  };

  return (
    <footer data-aos="fade-in" className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary font-bold text-3xl">
              <Activity className="h-8 w-8" />
              <span>MediCare+</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading the way in medical excellence.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialIcon href="https://facebook.com" icon={<Facebook size={20} />} />
              <SocialIcon href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialIcon href="https://instagram.com" icon={<Instagram size={20} />} />
              <SocialIcon href="https://linkedin.com" icon={<Linkedin size={20} />} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <FooterLink text="Home" href="#home" />
              <FooterLink text="Our Services" href="#services" />
              <FooterLink text="Find a Doctor" href="#doctors" />
              <FooterLink text="Book Appointment" href="#appointment" />
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Health Avenue, NY</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:support@medicare.com" className="hover:text-white transition">support@medicare.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input type="email" required placeholder="Your email address" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-sm text-white transition" />
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition text-sm">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2024 MediCare+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-primary transition text-gray-400 hover:text-white hover:-translate-y-1">
    {icon}
  </a>
);

const FooterLink = ({ text, href }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-primary transition hover:translate-x-1 inline-block">
      {text}
    </a>
  </li>
);

export default Footer;