import React from "react";
import PropTypes from "prop-types";

const teamMembers = [
	{
		img: "/TeamImages/AkashTiwari.jpg",
		name: "Akash Tiwari",
		designation: "MERN-stack Developer",
	},
	{
		img: "/TeamImages/simran.jpg",
		name: "Simran",
		designation: "Front End Web Developer",
	},
	{
		img: "/TeamImages/diya.jpg",
		name: "Diya",
		designation: "Front End Web Developer",
	},
	
	
];

const TeamMemberItem = ({ member }) => (
	<div className="text-center">
		<img src={member.img} alt={member.name} className="p-2 w-full" />
		<div className="relative -top-7 text-white">
			<p className="bg-slate-700 w-[90%] text-[15px] font-bold leading-10 shadow z-10 mx-auto">
				{member.name}
			</p>
			<p className="w-[80%] left-11 bg-blue-600 text-[13px] leading-9 mx-auto">
				{member.designation}
			</p>
		</div>
	</div>
);

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

const Team = () => {
	return (
		<section className=" dark py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
			<div className="container px-4 mx-auto relative">
				<div className="flex">
					<div className="text-red-950 mb-6 text-left">
						<h2 className="text-[42px] md:text-5xl after:w-28 after:h-1 after:absolute after:bg-white after:bottom-4 after:-z-[1] after:-translate-x-1/2 relative">
							OUR TEAM
						</h2>
						<p>Who made it successful</p>
					</div>
				</div>

				<div className="absolute top-0 left-[90%] hidden md:inline-flex z-10 rotate-90 origin-center">
					<div className="flex justify-center">
						<hr className="w-32 border-t-2 border-blue-600 relative top-1/2 right-0 opacity-100 inline-block m-0" />
						<div className="text-red-950 h-4 relative inline-block whitespace-nowrap left-0 top-0 text-[13px] font-bold leading-4 uppercase tracking-wider mx-1">
						ADHUNIK CODERS
						</div>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-6">
					{teamMembers.map((member, i) => (
						<div className="col-span-4 sm:col-span-2 lg:col-span-1" key={i}>
							<TeamMemberItem member={member} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Team
