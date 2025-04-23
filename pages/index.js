import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import About from "@/components/About";
import Resume from "@/components/Resume";
import WorkPage from "@/components/WorkPage";
import Contact from "@/components/Contact";
import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNavbar";
import Head from "next/head";

const Index = () => {
	const [activeTab, setActiveTab] = useState("about");
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const tab = params.get("tab") || "about";
		setActiveTab(tab);

		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const renderContent = () => {
		switch (activeTab) {
			case "about":
				return <About />;
			case "resume":
				return <Resume />;
			case "work":
				return <WorkPage />;
			case "contact":
				return <Contact />;
			default:
				return <About />;
		}
	};

	return (



		<>
			<Head>
				<title>Amit Kumar - Portfolio</title>
				<meta name="description" content="Portfolio showcasing my work and skills as a developer" />
				<meta name="keywords" content="Full Stack Developer, portfolio, Amit Kumar, projects, skills" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

				<meta property="og:title" content="Amit Kumar - Portfolio" />
				<meta property="og:description" content="Portfolio showcasing my work and skills as a developer" />
				<meta property="og:url" content="https://amit-kumar.vercel.app" />
				<meta property="og:image" content="https://amit-kumar.vercel.app/profile.jpg" />
				<meta property="og:type" content="website" />


				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Amit Kumar - Portfolio" />
				<meta name="twitter:description" content="Portfolio showcasing my work and skills as a developer" />
				<meta name="twitter:image" content="https://amit-kumar.vercel.app/profile.jpg" />
			</Head>




			<div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8">
				{isMobile && <TopNavbar active={activeTab} setActive={setActiveTab} />}

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-7xl mx-auto mt-6"
				>
					<div className="grid md:grid-cols-[300px_1fr] gap-6">
						{!isMobile && (
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="bg-gray-800/80 rounded-xl border border-gray-700 shadow-xl backdrop-blur-lg"
							>
								<Sidebar active={activeTab} setActive={setActiveTab} />
							</motion.div>
						)}

						<motion.div
							key={activeTab}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
							className="bg-gray-800/80 rounded-xl border border-gray-700 shadow-xl backdrop-blur-lg p-6 md:p-8"
						>
							{renderContent()}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Index;