// components/About.jsx
import { CGPA } from "@/utils/constant";
import { motion } from "framer-motion";
import { Code, Server, Database, Zap, Award, Book } from "lucide-react";

const About = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 }
		},
	};

	const skills = [
		{
			title: "Frontend",
			icon: Code,
			color: "bg-gradient-to-br from-purple-500 to-indigo-600",
			items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
		},
		{
			title: "Backend",
			icon: Server,
			color: "bg-gradient-to-br from-blue-500 to-cyan-600",
			items: ["Node.js", "Express", "MongoDB", "RESTful APIs"]
		},
		{
			title: "Languages",
			icon: Database,
			color: "bg-gradient-to-br from-green-500 to-emerald-600",
			items: ["JavaScript", "Python", "C++", "TypeScript"]
		},
		{
			title: "Tools & Other",
			icon: Zap,
			color: "bg-gradient-to-br from-red-500 to-pink-600",
			items: ["Git/GitHub", "VS Code", "Postman", "Docker"]
		},
	];

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="space-y-8"
		>
			<motion.div variants={itemVariants} className="space-y-4">
				<h1 className="text-3xl md:text-4xl font-bold">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
						Hello, I'm Amit Kumar
					</span>
				</h1>
				<div className="h-1 w-20 bg-blue-600 rounded"></div>
				<p className="text-lg text-gray-300 leading-relaxed">
					A passionate <span className="text-blue-400 font-medium">Full Stack Developer</span> with
					experience in building web applications using modern technologies.
					Currently pursuing a B.Tech in Computer Science and Engineering with a focus on Data Science.
				</p>
			</motion.div>

			<motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700">
					<div className="flex items-center mb-4">
						<Award className="text-blue-500 mr-3" size={24} />
						<h2 className="text-xl font-semibold text-white">Education</h2>
					</div>
					<div className="space-y-4">
						<div>
							<h3 className="text-blue-400">Techno Main Salt Lake</h3>
							<p className="text-sm text-gray-400">B.Tech in CSE (Data Science) • 2021-2025</p>
							<p className="text-sm text-gray-300 mt-1">CGPA: {CGPA}</p>
						</div>
						<div>
							<h3 className="text-blue-400">Vidya Bharti Chinmaya Vidyalay</h3>
							<p className="text-sm text-gray-400">Intermediate (CBSE) • 2021</p>
							<p className="text-sm text-gray-300 mt-1">84.4%</p>
						</div>
					</div>
				</div>

				<div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700">
					<div className="flex items-center mb-4">
						<Book className="text-blue-500 mr-3" size={24} />
						<h2 className="text-xl font-semibold text-white">Experience</h2>
					</div>
					<div className="space-y-4">
						<div>
							<h3 className="text-blue-400">DevTown</h3>
							<p className="text-sm text-gray-400">Full Stack web Developer Intern Nov 2023 - Aug 2024</p>
							<p className="text-sm text-gray-300 mt-1">Built and maintained full-stack features for DevTown</p>
						</div>
						<div>
							<h3 className="text-blue-400">Genci</h3>
							<p className="text-sm text-gray-400">Full Stack Developer Intern • Aug-Oct 2023</p>
							<p className="text-sm text-gray-300 mt-1">Built backend from ground up, integrated with frontend</p>
						</div>

					</div>
				</div>
			</motion.div>

			<motion.div variants={itemVariants} className="pt-4">
				<h2 className="text-2xl font-semibold text-white mb-6">My Skills</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ y: -5, transition: { duration: 0.2 } }}
							className="p-5 rounded-xl bg-gray-800/40 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
						>
							<div className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${skill.color}`}>
								<skill.icon size={24} className="text-white" />
							</div>
							<h3 className="font-semibold text-lg text-white mb-2">{skill.title}</h3>
							<div className="text-sm text-gray-400">
								{skill.items.join(" • ")}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default About;