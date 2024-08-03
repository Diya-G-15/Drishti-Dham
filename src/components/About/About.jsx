import React from 'react'

import Team from './Team.jsx';
import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from "@coreui/react";

export default function About() {
    return (
        <div className=" bg-white">
			<div className="mx-auto w-full max-w-7xl">
        <div>
          <div class="relative w-full bg-white">
            <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div class="flex flex-col justify-center px-2 py-6 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-4 lg:py-6 xl:col-span-6">
                <div class="cursor-pointer mt-4 flex max-w-max items-center space-x-2 rounded-full bg-red-950 p-1">
                  <div class="rounded-full bg-white p-1 px-3">
                    <p class="text-sm font-medium mt-3 text-orange-500 ">EXPLORE→</p>
                  </div>
                  <p class="text-sm font-medium mt-3 text-white px-1">
                    Join our team{" "}
                  </p>
                </div>
                <h1 class="mt-8 text-3xl font-bold tracking-tight text-red-950 md:text-4xl lg:text-6xl">
                  Virtual Visit To Indian Pilgrimage
                </h1>
                <p class="mt-8 text-lg text-red-950 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur modi blanditiis dolores quasi eaque explicabo!
                </p>
                <form action="" class="mt-8 flex items-start space-x-2">
                  <div>
                    <input
                      class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                    />
                    <p class="mt-2 text-sm text-orange-500">
                      We care about your privacy
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div class="  rounded-3xl mt-12 relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                <CCarousel controls indicators dark >
                  <CCarouselItem>
                    <CImage
                      className=" d-block w-100 rounded-xl"
                      src="hero1.webp"
                      alt="slide 1"
                    />
                    <CCarouselCaption className="text-white d-none d-md-block">
                      <h5></h5>
                      <p>
                        
                      </p>
                    </CCarouselCaption>
                  </CCarouselItem>
                  <CCarouselItem>
                    <CImage
                      className="d-block w-100 rounded-xl"
                      src="hero1.webp"
                      alt="slide 2"
                    />
                    <CCarouselCaption className="text-white  d-none d-md-block">
                      <h5></h5>
                      <p>
                       
                      </p>
                    </CCarouselCaption>
                  </CCarouselItem>
                  <CCarouselItem>
                    <CImage
                      className="d-block w-100 rounded-xl"
                      src="hero3.webp "
                      alt="slide 3"
                    />
                    <CCarouselCaption className="text-white d-none d-md-block">
                      <h5></h5>
                      <p>
                       
                      </p>
                    </CCarouselCaption>
                  </CCarouselItem>
                </CCarousel>  
              </div>
            </div>
          </div>  
        </div>
      </div>

            <div className="container mt-2 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 ">
                        <img
                            className='rounded-xl'
                            src="https://imgcld.yatra.com/ytimages/image/upload/v1461929822/Delhi-Akshardham_Temple.jpg "
                            alt="image"
                        />
                    </div>
                    <div className="text-red-950 md:7/12 lg:w-6/12">
                        <h2 className="text-2xl  font-bold md:text-4xl">
                            Drishti Dham platform is about the Temples information
                        </h2>
                        <p className="mt-6 ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 ">
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
