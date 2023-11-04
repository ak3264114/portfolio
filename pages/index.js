import About from "@/components/About";
import Profile from "@/components/Profile";
import Resume from "@/components/Resume";
import Sidebar from "@/components/Sidebar";
import WorkPage from "@/components/WorkPage";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
export default function Home() {
	const router = useRouter();
	const { tab } = router.query;
	useEffect(() => {
		if (!tab) {
			router.push("/?tab=about");
		}
	}, []);

	return (
		<div className="flex flex-col items-center  p-5 pb-14">
			<div className="max-w-6xl w-full">
				<div className="sm:grid grid-cols-6 gap-8 items-start">
					<div className="rounded-xl border-2  border-[#0D0F10]  shadow-[0_0px_20px_15px] shadow-[#0D0F10]">
						<Sidebar active={tab} />
					</div>
					<div className="md:col-span-5 col-span-6  flex w-full rounded-xl border-2 border-[#0D0F10]  shadow-[0_0px_20px_15px] shadow-[#0D0F10] p-16  min-h-[50vh]">
						{!tab && <About />}
						{tab === "about" && <About />}
						{tab === "resume" && <Resume />}
						{tab === "work" && <WorkPage />}
						{/* {tab === "privacy-settings" && <Privacy />}
				{tab === "contact-us" && <Contact />}
				{tab === "logout" && <LogoutPage />}
				{tab === "achievements-and-certifications" && (
					<AchievementsAndCertifications />
				)} */}
					</div>
				</div>
			</div>
		</div>
	);
}
