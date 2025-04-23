import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Server } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Auction It",
    description: "A real-time online app where users can list items for sale, buy items from other users, and engage in real-time auctions by placing bids for the items.",
    imageUrl: "/AuctionItImage.png",
    liveUrl: "https://auction-it-liard.vercel.app/",
    frontend: "https://github.com/ak3264114/auction-it-frontend",
    backend: "https://github.com/ak3264114/auction-it-backend",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "WebSockets"],
    highlights: [
      "Implemented WebSocket communication for real-time updates during auctions",
      "Created user-friendly interfaces with React.js and Tailwind CSS",
      "Built secure user authentication system"
    ]
  },
  {
    id: 2,
    name: "CodeMore",
    description: "A web app for coders to compare their performance with friends using LeetCode profiles and statistics.",
    imageUrl: "/CodeMoreImage.png", 
    liveUrl: "https://code-more-frontend.vercel.app/",
    frontend: "https://github.com/ak3264114/code-more-frontend",
    backend: "https://github.com/ak3264114/code-more-backend",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap", "GraphQL"],
    highlights: [
      "Implemented user authentication to ensure secure access",
      "Integrated LeetCode GraphQL API to fetch user profile data",
      "Designed interactive dashboards for performance comparison"
    ]
  },
  {
    id: 3,
    name: "Open-Certs",
    description: "An open-source contribution to a project for certifying open-source contributions during GSSOC'22.",
    imageUrl: "/OpenCertsImage.png", 
    liveUrl: "",
    github: "https://github.com/open-certs/oc-frontend/commit/5c8e6b3ad370517745918bda21a240369f0d2159",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Open Source"],
    highlights: [
      "Developed UI page using React TypeScript and Tailwind CSS",
      "Designed project details display interface",
      "Contributed to open-source community project"
    ]
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-in-out" 
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70`}></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2 py-1 text-xs font-medium bg-blue-600/80 text-white rounded">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-700/80 text-white rounded">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="mb-4">
          {project.highlights && project.highlights.map((highlight, i) => (
            <div key={i} className="flex items-start mb-1">
              <div className="h-2 w-2 mt-1.5 mr-2 bg-blue-500 rounded-full"></div>
              <p className="text-xs text-gray-300">{highlight}</p>
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-3 mt-4">
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors flex-1 justify-center"
            >
              <Eye size={16} />
              View Demo
            </motion.a>
          )}
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                title="GitHub"
              >
                <Github size={18} />
              </motion.a>
            )}
            {project.frontend && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                title="Frontend Repo"
              >
                <Github size={18} />
              </motion.a>
            )}
            {project.backend && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                title="Backend Repo"
              >
                <Server size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WorkPage = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));
  
  const filters = ["all", "react", "node", "mongodb"];
  
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
            My Projects
          </span>
        </h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
        <p className="text-gray-300">
          Here are some of my recent projects and contributions. Each project demonstrates different skills and technologies.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
              filter === f 
                ? "bg-blue-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkPage;