import { motion } from "framer-motion";
import { User, FileText, Briefcase, Mail, Github, Linkedin, Download } from "lucide-react";
import Image from "next/image";

const Sidebar = ({ active, setActive }) => {
  const menuItems = [
    { label: "About", value: "about", icon: User },
    { label: "Resume", value: "resume", icon: FileText },
    { label: "Work", value: "work", icon: Briefcase },
    { label: "Contact", value: "contact", icon: Mail },
  ];

  const handleClick = (value) => {
    setActive(value);
    const url = new URL(window.location);
    url.searchParams.set("tab", value);
    window.history.pushState({}, "", url);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ak3264114" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amitkumar0908/" },
  ];

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-lg">
          <Image 
            src="/profile.jpg" 
            alt="Amit Kumar" 
            layout="fill" 
            objectFit="cover"
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-white mt-2">Amit Kumar</h2>
        <p className="text-blue-400 font-medium">Full Stack Developer</p>
      </div>
      
      <div className="space-y-3 mb-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.value;
          
          return (
            <motion.button
              key={item.value}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleClick(item.value)}
              className={`flex items-center w-full space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? "bg-blue-600 text-white font-medium shadow-md" 
                  : "text-gray-300 hover:bg-gray-700/70 hover:text-white"
              }`}
            >
              <Icon size={18} className={isActive ? "text-white" : "text-blue-400"} />
              <span>{item.label}</span>
              {isActive && (
                <motion.div 
                  className="ml-auto h-2 w-2 rounded-full bg-white"
                  layoutId="activeIndicator"
                />
              )}
            </motion.button>
          );
        })}
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="bg-gray-700 p-2 rounded-full text-blue-400 hover:text-white hover:bg-blue-600 transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
        
        <motion.a
          href="https://drive.google.com/uc?export=download&id=1d7mh-XJYdiufrxDI2denatQl5xCRqln9"
          target="_blank"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md"
        >
          <Download size={18} />
          Download CV
        </motion.a>
      </div>
    </div>
  );
};

export default Sidebar;