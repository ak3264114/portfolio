import { motion } from "framer-motion";
import { useState } from "react";
import { User, FileText, Briefcase, Mail, Menu, X } from "lucide-react";

const TopNavbar = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { label: "About", value: "about", icon: User },
    { label: "Resume", value: "resume", icon: FileText },
    { label: "Work", value: "work", icon: Briefcase },
    { label: "Contact", value: "contact", icon: Mail },
  ];

  const handleClick = (value) => {
    setActive(value);
    setIsOpen(false);
    const url = new URL(window.location);
    url.searchParams.set("tab", value);
    window.history.pushState({}, "", url);
  };

  return (
    <nav className="relative z-10">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white">Amit Kumar</h1>
          <span className="ml-2 px-2 py-1 bg-blue-600 text-xs text-white rounded">Dev</span>
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 left-0 right-0 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2"
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.value}
                onClick={() => handleClick(item.value)}
                className={`flex items-center space-x-3 w-full px-4 py-3 ${
                  active === item.value 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
};

export default TopNavbar;