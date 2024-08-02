import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { temples } from "../TempleSlider/TempleSlider"; 


const TempleInfo = () => {
    const params = useParams();
    const { templeId } = params;
    const temple = temples[templeId];
	const ref= useRef(null)
	useEffect(()=>{
		if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
	})

    return (
       
// 	<section className="temple-info py-14 md:py-24 bg-[#fff7e6] dark:bg-[#2c2c2c] text-[#4b2e00] dark:text-[#f5c542]">
// 	<div className="container mx-auto px-4">
// 		<div className="flex flex-col lg:flex-row items-start lg:justify-between">
// 			<div className="lg:w-2/3 mb-8 lg:mb-0">
// 				<img
// 					src={temple.image}
// 					alt={temple.name}
// 					className="w-full h-auto rounded-lg shadow-lg border-4 border-[#f5c542]"
// 				/>
// 				<div className="flex justify-between mt-4">
// 					{temple.additionalImages && temple.additionalImages.map((img, index) => (
// 						<img
// 							key={index}
// 							src={img}
// 							alt={`${temple.name} ${index + 1}`}
// 							className="w-1/4 h-auto rounded-lg shadow-lg border-2 border-[#f5c542] mx-2"
// 						/>
// 					))}
// 				</div>
// 			</div>
// 			<div className="lg:w-1/3 lg:pl-12">
// 				<h1 className="text-4xl font-bold mb-4 text-[#d94f04] dark:text-[#f5c542]">
// 					{temple.name}
// 				</h1>
// 				<p className="text-lg mb-6 text-[#8b5e34] dark:text-[#e0e0e0]">
// 					{temple.description || 'No description available'}
// 				</p>
// 				<div className="space-y-6">
// 					{[
// 						{ label: "Location", value: temple.location },
// 						{ label: "Timing", value: temple.time },
// 						{ label: "Prashad", value: temple.prashad },
// 						{ label: "Important Dates", value: temple.importantDates.join(', ') }
// 					].map((info, index) => (
// 						<div key={index} className="p-6 bg-[#fff3e0] dark:bg-[#3e3e3e] rounded-lg shadow-lg border border-[#f5c542]">
// 							<h2 className="text-xl font-semibold mb-2 text-[#d94f04] dark:text-[#f5c542]">
// 								{info.label}
// 							</h2>
// 							<p className="text-[#8b5e34] dark:text-[#e0e0e0]">{info.value}</p>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>
<section ref={ref} className="temple-info py-14 md:py-24 bg-[#fff7e6] dark:bg-[#2c2c2c] text-[#4b2e00] dark:text-[#f5c542]">
<div className="container mx-auto px-4">
	<div className="flex flex-col lg:flex-row items-start lg:justify-between">
		<div className="lg:w-2/3 mb-8 lg:mb-0">
			<img
				src={temple.image}
				alt={temple.name}
				className="w-full h-auto rounded-lg shadow-lg border-4 border-[#f5c542]"
			/>
			<div className="flex justify-between mt-4">
				{temple.additionalImages && temple.additionalImages.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`${temple.name} ${index + 1}`}
						className="w-1/4 h-auto rounded-lg shadow-lg border-2 border-[#f5c542] mx-2"
					/>
				))}
			</div>
		</div>
		<div className="lg:w-1/3 lg:pl-12">
			<h1 className="text-4xl font-bold mb-4 text-[#d94f04] dark:text-[#f5c542]">
				{temple.name}
			</h1>
			<p className="text-lg mb-6 text-[#8b5e34] dark:text-[#e0e0e0]">
				{temple.keyInformation || 'No key information available'}
			</p>
			<div className="space-y-6">
				{[
					{ label: "Location", value: temple.location },
					{ label: "Opening Time", value: temple.openingTiming },
					{ label: "Closing Time", value: temple.closingTiming },
					{ label: "Prashad", value: temple.prashad },
					{ label: "Important Dates", value: temple.importantDates.join(', ') },
					{ label: "Establishment", value: temple.establishment },
					{ label: "Key Information", value: temple.keyInformation }
				].map((info, index) => (
					<div key={index} className="p-6 bg-[#fff3e0] dark:bg-[#3e3e3e] rounded-lg shadow-lg border border-[#f5c542]">
						<h2 className="text-xl font-semibold mb-2 text-[#d94f04] dark:text-[#f5c542]">
							{info.label}
						</h2>
						<p className="text-[#8b5e34] dark:text-[#e0e0e0]">{info.value}</p>
					</div>
				))}
			</div>
		</div>
	</div>
</div>
</section>
    );
};

export default TempleInfo
