import React from 'react';
import { Phone, Mail, MapPin, Calendar, User, FileText } from 'lucide-react';

const Appointment = () => {
  const handleBooking = () => {
    alert("Appointment request sent! We will contact you shortly.");
  };

  return (
    <section id="appointment" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
          
          {/* Left Side: Contact Info */}
          <div data-aos="fade-right" className="lg:w-5/12 bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-900 opacity-20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Book Your Visit</h3>
              <p className="text-blue-50 text-lg mb-12 leading-relaxed">
                We are here to help you. Schedule an appointment online, and our team will confirm your slot within 24 hours.
              </p>
              <div className="space-y-8">
                <ContactItem icon={<Phone />} title="Emergency Cases" info="+1 (555) 123-4567" sub="Available 24/7" delay={200} />
                <ContactItem icon={<Mail />} title="Email Support" info="booking@medicare.com" delay={400} />
                <ContactItem icon={<MapPin />} title="Location" info="123 Health Avenue, NY" delay={600} />
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div data-aos="fade-left" className="lg:w-7/12 p-12 bg-gray-50">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-dark mb-2">Fill the Form</h3>
              <p className="text-gray-500">Please provide accurate details so we can assist you better.</p>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput icon={<User />} label="Patient Name" type="text" placeholder="John Doe" />
                <FormInput icon={<Phone />} label="Phone Number" type="tel" placeholder="+1 (000) 000-0000" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Department</label>
                  <select className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-gray-600 appearance-none">
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                  </select>
                </div>
                <FormInput icon={<Calendar />} label="Preferred Date" type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea rows="4" placeholder="Describe your problem..." className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none"></textarea>
                </div>
              </div>
              <button type="button" onClick={handleBooking} className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-600 transition shadow-lg hover:shadow-primary/30 transform active:scale-[0.99]">
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, info, sub, delay }) => (
  <div className="flex items-start gap-5" data-aos="fade-up" data-aos-delay={delay}>
    <div className="bg-white/10 p-3 rounded-xl shrink-0">
      {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
    </div>
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-blue-100 mt-1">{info}</p>
      {sub && <p className="text-xs text-blue-200 mt-1">{sub}</p>}
    </div>
  </div>
);

const FormInput = ({ icon, label, type, placeholder }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <div className="relative">
      {React.cloneElement(icon, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" })}
      <input type={type} placeholder={placeholder} className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
    </div>
  </div>
);

export default Appointment;