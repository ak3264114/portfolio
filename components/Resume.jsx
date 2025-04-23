import { CGPA } from "@/utils/constant";
import React from "react";

const Resume = () => {
	return (
		<div className="">
			<div className="shadow-lg rounded-lg pb-12 font-light">
				<h2 className="text-3xl font-bold mb-4">Amit Kumar</h2>

				<p className="mb-2">
					Kolkata, West Bengal —{" "}
					<a href="mailto:amitkumar.tmsl@gmail.com">amitkumar.tmsl@gmail.com</a>{" "}
					— <a href="tel:amitkumar.tmsl@gmail.com">(+91)7782865144</a> —
					<a href="https://www.linkedin.com/in/amitkumar0908/" target="_blank">
						iamkumaramit
					</a>{" "}
					— India
				</p>
				<h3 className="text-2xl font-bold mt-4 mb-2">SKILLS</h3>
				<ul className="list-disc list-inside mb-4">
					<li>
						<span className="font-medium">Programming : </span> Python, C, C++,
						JavaScript, HTML, CSS, DSA
					</li>
					<li>
						<span className="font-medium">Technologies : </span> Next.js,
						React.js, Express.js, MongoDB, Git, GitHub, Node.js
					</li>
					<li>
						<span className="font-medium">Familiar with: </span> TypeScript,
						jQuery, Django
					</li>
				</ul>

				<h3 className="text-2xl font-bold mt-4 mb-2">EDUCATION</h3>
				<div className="flex justify-between">
					<p>
						<span className="font-medium">Techno Main Salt Lake </span> ,
						Kolkata, West Bengal
					</p>
					<p>July 2021 - June 2025</p>
				</div>
				<div className="flex justify-between">
					<p>B.Tech in Computer Science and Engineering (Data Science)</p>
					<p> YGPA: {CGPA}</p>
				</div>
				<div className="flex justify-between">
					<p>
						<span className="font-medium">Vidya Bharti Chinmaya Vidyalay </span>{" "}
						, Jamshedpur, Jharkhand
					</p>
					<p>Year of completion: 2021</p>
				</div>
				<div className="flex justify-between">
					<p>Intermediate (CBSE board)</p>
					<p> Grade: 84.4 Percent</p>
				</div>
				<div className="flex justify-between">
					<p>
						<span className="font-medium">Xavier Public School</span> ,
						Jamshedpur, Jharkhand
					</p>
					<p>Year of completion: 2019</p>
				</div>
				<div className="flex justify-between">
					<p>Matriculation (CBSE board) </p>
					<p> Grade: 77.6 Percent</p>
				</div>

				<h3 className="text-2xl font-bold mt-4 mb-2">ACHIEVEMENTS</h3>
				<ul className="list-disc list-inside mb-4">
					<li>
						<span className="font-medium">Secured 2nd position</span> in
						CryptoQuest (decoding a hidden message) in EDGE’2K22 (TMSL inter
						college fest)
					</li>
					<li>
						<span className="font-medium">Secured 3rd position</span> in
						Geekathon (48 hr hackathon) in EDGE’2K22 (TMSL inter college fest)
					</li>
					<li>
						<span className="font-medium">Secured 3rd position</span> in WEB DEV
						in intra college fest 2022
					</li>
				</ul>

				<h3 className="text-2xl font-bold mt-4 mb-2">EXPERIENCE</h3>
				<div className="mb-4">
					<div className="flex justify-between">
						<p className="font-medium">DevTown</p>
						<p> Remote</p>
					</div>
					<div className="flex justify-between">
						<p>Full Stack web Developer Intern</p>
						<p> Nov 2023 - Aug 2024</p>
					</div>
					<ul className="list-disc list-inside ml-8 mb-2">
						<li>
							Implemented secure Gmail-based magic link authentication for Devtown, enhancing user login experience and account security. With 16.6k users benefiting from these services.
						</li>
						<li>
							Streamlined one-time certificate upgrades, reducing user mistakes and assuring data correctness.
						</li>
						<li>
							Developed a code compiler for multiple languages, leveraging lambda functions for cost minimization..
						</li>
					</ul>
				</div>
				<div className="mb-4">
					<div className="flex justify-between">
						<p className="font-medium">Genci</p>
						<p> Remote</p>
					</div>
					<div className="flex justify-between">
						<p>Full Stack Developer Intern</p>
						<p> Aug 2023 - Oct 2023</p>
					</div>
					<ul className="list-disc list-inside ml-8 mb-2">
						<li>
							Created and built the backend independently, starting from the
							ground up.
						</li>
						<li>
							Collaborated with the frontend team to integrate backend services
							seamlessly into the application.
						</li>
						<li>
							Optimized frontend workflow for better version control and boosted
							website speed by 2.5x.
						</li>
					</ul>
				</div>

				<h3 className="text-2xl font-bold mt-4 mb-2">PROJECTS</h3>
				<div className="mb-4">
					<div className="flex justify-between">
						<p className="font-medium">CodeMore</p>
						<p> Aug 2023 - Sept 2023</p>
					</div>
					<p>
						A Web app for coders where coders can compare their performance with
						their friends
					</p>
					<p>
						Backend: NodeJs, Mongodb, ExpressJs — Frontend: Reactjs, Bootstrap
					</p>
					<ul className="list-disc list-inside ml-8 mb-2">
						<li>
							Implemented user authentication to ensure secure access to the
							platform.
						</li>
						<li>
							Integrated the LeetCode GraphQL API to fetch and display data from
							LeetCode user profiles.
						</li>
					</ul>
					<div className="">
						<p>
							Visit :{" "}
							<a
								href="https://github.com/ak3264114/code-more-frontend"
								target="_blank"
							>
								Frontend{" "}
							</a>{" "}
							—{" "}
							<a
								href="https://github.com/ak3264114/code-more-backend"
								target="_blank"
							>
								Backend{" "}
							</a>{" "}
							—{" "}
							<a href="https://code-more-frontend.vercel.app/" target="_blank">
								Live Link
							</a>
						</p>
					</div>
				</div>
				<div className="mb-4">
					<div className="flex justify-between">
						<p className="font-medium">AuctionIt</p>
						<p>Oct 2023 - Oct 2023</p>
					</div>
					<p>
						A real-time online app where users can list items for sale, buy
						items from other users, and engage in real-time auctions by placing
						bids for the items.
					</p>
					<p>
						Backend: NodeJs, Mongodb, ExpressJs — Frontend: Reactjs, Tailwind
						Css
					</p>
					<ul className="list-disc list-inside ml-8 mb-2">
						<li>
							Implemented WebSocket communication for real-time updates during
							auctions, ensuring seamless bid placement and live bidding
							experience.
						</li>
						<li>
							Implemented user-friendly interfaces with React.js and Tailwind
							CSS, ensuring seamless navigation for browsing, listing, and
							purchasing items on the platform.
						</li>
					</ul>
					<div className="">
						<p>
							Visit :{" "}
							<a
								href="https://github.com/ak3264114/auction-it-frontend"
								target="_blank"
							>
								Frontend{" "}
							</a>{" "}
							—{" "}
							<a
								href="https://github.com/ak3264114/auction-it-backend"
								target="_blank"
							>
								Backend{" "}
							</a>{" "}
							—{" "}
							<a href="https://auction-it-liard.vercel.app/" target="_blank">
								Live Link
							</a>
						</p>
					</div>
				</div>

				<h3 className="text-2xl font-bold mt-4 mb-2">
					Open Source Contribution
				</h3>
				<div className="mb-4">
					<div className="flex justify-between">
						<p>Open-Certs </p>
						<p>Sept 2022 - Oct 2022</p>
					</div>
					<p>GSSOC’22 Open source project</p>

					<p>
						Frontend: ReactJS, Tailwind CSS — Backend: Node.js, MongoDB, Express
					</p>
					<ul className="list-disc list-inside ml-8">
						<li>
							Contributed to Open-Certs, an open-source project for certifying
							open-source contributions.
						</li>
						<li>
							Developed the UI page using React TypeScript and Tailwind CSS to
							display project details.
						</li>
					</ul>
					<p>
						Visit :{" "}
						<a
							href="https://github.com/open-certs/oc-frontend/commit/5c8e6b3ad370517745918bda21a240369f0d2159"
							target="_blank"
						>
							{" "}
							My contribution
						</a>
					</p>
				</div>
			</div>
			<a
				href="https://drive.google.com/uc?export=download&id=1d7mh-XJYdiufrxDI2denatQl5xCRqln9"
				target="_blank"
				className="cursor-pointer py-4 px-5 hover:px-10  rounded-xl  bg-[#fe373c] border-[#fe373c] font-bold transition-all  duration-1000 ease-in-out"
			>
				Download Resume
			</a>
		</div>
	);
};

export default Resume;
