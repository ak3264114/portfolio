// components/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you'd typically send the form data to your backend
    // For demo purposes, we'll just simulate a submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const contactInfo = [
    { icon: Mail, label: "Email", value: "amitkumar.tmsl@gmail.com", href: "mailto:amitkumar.tmsl@gmail.com" },
    { icon: Phone, label: "Phone", value: "(+91) 7782865144", href: "tel:+917782865144" },
    { icon: MapPin, label: "Location", value: "Kolkata, West Bengal, India" },
  ];
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/ak3264114", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amitkumar0908/", label: "LinkedIn" },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Get In Touch
          </span>
        </h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
        <p className="text-gray-300">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/60 p-5 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                <info.icon size={20} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium text-white">{info.label}</h3>
                {info.href ? (
                  <a 
                    href={info.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-400">{info.value}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <motion.form 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-800/60 p-6 rounded-xl border border-gray-700"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Send a Message</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="Project Proposal"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
              placeholder="I'd like to discuss a project opportunity..."
            ></textarea>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors w-full md:w-auto"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 flex flex-col"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Connect on Social Media</h2>
          <p className="text-gray-400 mb-6">
            Feel free to connect with me on these platforms for more updates and to follow my work.
          </p>
          
          <div className="grid grid-cols-1 gap-4 mt-auto">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <div className="p-2 bg-blue-600/20 rounded-lg mr-4">
                    <Icon size={20} className="text-blue-500" />
                  </div>
                  <span className="text-white">{link.label}</span>
                  <div className="ml-auto">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.a>
              );
            })}
          </div>
          
          <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
            <h3 className="text-blue-400 font-medium mb-2">Looking for a developer?</h3>
            <p className="text-gray-300 text-sm">
              I'm currently open to freelance work and full-time opportunities. Let's discuss how I can help with your project!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;