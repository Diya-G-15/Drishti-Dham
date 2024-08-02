import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { temples } from "../TempleSlider/TempleSlider";
import { charDham } from "../ChaarDham/ChaarDham";


const TempleInfo = () => {
	const params = useParams();
	console.log(params)
	const { templeId
		, Id
	} = params;
	let temple = ""
	if (!Id) {
		temple = temples[templeId];
	}
	else {
		temple = charDham[Id-1];
	}

	const ref = useRef(null)
	useEffect(() => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	})

	return (
		<section ref={ref} className="temple-info py-14 md:py-24 bg-[#fff7e6] dark:bg-[#2c2c2c] text-[#4b2e00] dark:text-[#f5c542]">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Image Section */}
					<div className="lg:col-span-1 flex flex-col items-center">
						<img
							src={temple.image}
							alt={temple.name}
							className="w-full h-auto rounded-lg shadow-lg border-4 border-[#f5c542]"
						/>
						{/* Additional Images */}
						<div className="flex flex-wrap justify-center mt-4 gap-4">
							{temple.additionalImages && temple.additionalImages.map((img, index) => (
								<img
									key={index}
									src={img}
									alt={`${temple.name} ${index + 1}`}
									className="w-1/3 md:w-1/4 h-auto rounded-lg shadow-lg border-2 border-[#f5c542]"
								/>
							))}
						</div>
					</div>

					{/* Info Section */}
					<div className="lg:col-span-1 flex flex-col gap-6">
						<h1 className="text-4xl font-bold mb-4 text-[#d94f04] dark:text-[#f5c542]">
							{temple.name}
						</h1>
						<p className="text-lg mb-6 text-[#8b5e34] dark:text-[#e0e0e0]">
							{temple.keyInformation || 'No key information available'}
						</p>

						{/* Main Information Cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Card 1 */}
							<div className="p-6 bg-[#fff3e0] dark:bg-[#3e3e3e] rounded-lg shadow-lg border border-[#f5c542]">
								<h2 className="text-xl font-semibold mb-2 text-[#d94f04] dark:text-[#f5c542]">
									Location
								</h2>
								<p className="text-[#8b5e34] dark:text-[#e0e0e0]">
									{temple.location}
								</p>
							</div>

							{/* Card 2 */}
							<div className="p-6 bg-[#fff3e0] dark:bg-[#3e3e3e] rounded-lg shadow-lg border border-[#f5c542]">
								<h2 className="text-xl font-semibold mb-2 text-[#d94f04] dark:text-[#f5c542]">
									Opening Time
								</h2>
								<p className="text-[#8b5e34] dark:text-[#e0e0e0]">
									{temple.openingTiming}
								</p>
							</div>

							{/* Card 3 */}
							
							<div className="p-6 bg-[#fff3e0] dark:bg-[#3e3e3e] rounded-lg shadow-lg border border-[#f5c542]">
								<h2 className="text-xl font-semibold mb-2 text-[#d94f04] dark:text-[#f5c542]">
									Closing Time
								</h2>
								<p className="text-[#8b5e34] dark:text-[#e0e0e0]">
								{temple.closingTiming=="N/A"?"Open in Daytime":temple.closingTiming}
									
								</p>
							</div>
							

							{/* Card 4 */}
							<div className="p-6 bg-[#fff3e0] dark:bg-[#3e3e3e] rounded-lg shadow-lg border border-[#f5c542]">
								<h2 className="text-xl font-semibold mb-2 text-[#d94f04] dark:text-[#f5c542]">
									Prashad
								</h2>
								<p className="text-[#8b5e34] dark:text-[#e0e0e0]">
									{temple.prashad}
								</p>
							</div>
						</div>

						{/* Additional Information Cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Additional Card 1 */}
							<div className="p-6 bg-[#fff3e0] dark:bg-[#3e3e3e] rounded-lg shadow-lg border border-[#f5c542]">
								<h2 className="text-xl font-semibold mb-2 text-[#d94f04] dark:text-[#f5c542]">
									Important Dates
								</h2>
								<p className="text-[#8b5e34] dark:text-[#e0e0e0]">
									{temple.importantDates.join(', ')}
								</p>
							</div>

							{/* Additional Card 2 */}
							<div className="p-6 bg-[#fff3e0] dark:bg-[#3e3e3e] rounded-lg shadow-lg border border-[#f5c542]">
								<h2 className="text-xl font-semibold mb-2 text-[#d94f04] dark:text-[#f5c542]">
									Establishment
								</h2>
								<p className="text-[#8b5e34] dark:text-[#e0e0e0]">
									{temple.establishment}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	);
};

export default TempleInfo
