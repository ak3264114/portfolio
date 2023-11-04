import React from "react";

const About = () => {
	return (
		<div className="grid grid-cols-5 gap-8">
			{/* <div className="">
				<img
					src="https://st.depositphotos.com/1158045/2328/i/450/depositphotos_23282950-stock-photo-engineer.jpg"
					alt="Profile image"
				/>
			</div> */}
			<div className="col-span-5">
				<h1 className="text-3xl font-bold font-sans tracking-wider mb-4">
					About Me
				</h1>
				<p>
					I'm Amit Kumar, a dedicated and skilled Full Stack Developer currently
					pursuing a B.Tech in Computer Science and Engineering (Data Science)
					at Techno Main Salt Lake, Kolkata. Proficient in Python, C, C++,
					JavaScript, and other programming languages, I have actively
					contributed to various projects, showcasing a strong understanding of
					backend architecture and intuitive UI design. <br />
					With valuable internship experiences at Genci Remote and CodeStrike
					Remote, I've gained expertise in Next.js, React.js, and other
					technologies, emphasizing my commitment to continuous learning and
					innovation. A proactive team player with strong problem-solving
					abilities, I've secured top positions in technical competitions,
					demonstrating my enthusiasm for impactful software development. <br />
					Committed to leveraging technology for positive change, I'm eager to
					collaborate on challenging projects that foster growth and innovation.
				</p>
			</div>
		</div>
	);
};

export default About;
