import React from "react";

const data = [
	{
		name: "Auction It",
		subTitle:
			"A real-time online app where users can list items for sale, buy items from other users, and engage in real-time auctions by placing bid for the items.",
		imageUrl: "/AuctionItImage.png",
		projectUrl: "",
		tags: ["mongodb", "expressJs", "ReactJs", "NodeJs", "Tailwind Css"],
		frontend: "https://github.com/ak3264114/auction-it-frontend",
		backend: "https://github.com/ak3264114/auction-it-backend",
	},
];

const ProjectCard = () => {
	return (
		<div className="grid grid-cols-2 gap-4">
			{data.map((item, index) => (
				<div
					key={index}
					className="p-3 pb-8 m-2 w-[300px] sm:w-[350px] rounded overflow-hidden bg-white text-black bounce-animation"
				>
					<img className="w-full rounded" src={item.imageUrl} alt="" />
					<div className="pt-4">
						<div className="font-bold text-xl mb-2">{item.name}</div>
					</div>
					<div className="">{item.subTitle}</div>

					<div className="my-2 ">
						{item.frontend && (
							<a href={item.frontend} target="_blank" className="underline">
								Frontend
							</a>
						)}{" "}
						{item.backend && (
							<a href={item.backend} target="_blank" className="underline">
								Frontend
							</a>
						)}{" "}
						{item.github && (
							<a href={item.github} target="_blank" className="underline">
								Frontend
							</a>
						)}
					</div>
					<div className="pt-4 pb-2 mb-5">
						{item.tags.map((tag, i) => (
							<span
								className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								key={i}
							>
								#{tag}
							</span>
						))}
					</div>
					<a
						href=""
						target="_blank"
						className="cursor-pointer py-3 px-8 font-medium rounded-xl  bg-[#fe373c] border-[#fe373c]"
					>
						Visit
					</a>
				</div>
			))}
		</div>
	);
};

export default ProjectCard;
