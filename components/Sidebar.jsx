import Link from "next/link";
import React from "react";

const Sidebar = ({ active }) => {
	const data = [
		{
			label: "About",
			value: "about",
		},
		{
			label: "Resume",
			value: "resume",
		},
		{
			label: "Work",
			value: "work",
		},
		{
			label: "Contact",
			value: "contact",
		},
	];

	return (
		<div className="">
			<div className="text-left text-sm my-4 w-4/5 mx-auto text-gray-200 font-bold">
				{data.map((item) => (
					<Link href={`?tab=${item.value}`} key={item.value}>
						<h1
							className={`cursor-pointer py-2 px-2  rounded-lg text-lg my-2 font-medium transition-all duration-1000  ${
								active == item.value
									? "bg-[#fe373c] border-[#fe373c] font-bold transition-all  duration-1000 ease-in-out"
									: ""
							} `}
						>
							{item.label}
						</h1>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
