import React from 'react'
import Team from './Team.jsx';
// import React from "react";

export default function About() {



    return (
        <div className="py-16 bg-white">
            
           


		<header
			className="ezy__header33 light bg-cover bg-right bg-no-repeat text-white relative flex justify-center items-center  md:py-48 z-[1]"
			style={{
				backgroundImage:
					"url(https://cdn.easyfrontend.com/pictures/hero/header33-bg.jpg)",
			}}
		>
			<div
				className="absolute top-0 left-0 right-0 bottom-0 -z-[1]"
				style={{
					background:
						"linear-gradient(130deg, rgba(13, 110, 253, 0.35), rgba(0, 0, 0, 0.631))",
				}}
			></div>
			<div className="container px-4">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-9 lg:col-span-7 xl:col-span-6">
						<h2 className="text-[32px] leading-snug md:text-8xl font-bold tracking-wider mb-6">
							The Desert is my DNA
						</h2>
						<p className="text-lg leading-relaxed mb-12 md:mr-32 lg:mr-52">
							An activity that requires a person's mental or physical effort is
							work.If a person is trained for a certain type of job, they may
							have a job or profession which suits.
						</p>
						<div className="md:mr-40 lg:mr-72">
							<button className="py-4 px-8 text-bold bg-white text-black font-bold hover:bg-opacity-80 rounded-full w-full">
								Know More about us
							</button>
						</div>
					</div>
				</div>
				<div className="absolute bottom-4 md:bottom-12 left-1/2 w-full -translate-x-1/2">
				</div>
			</div>
		</header>
	



            


            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        <div className=' p-4'>
            <Team/>
            </div>
        
        
        </div>
    );
}
