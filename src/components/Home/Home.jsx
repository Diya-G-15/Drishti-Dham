import React from "react";
import { Link } from "react-router-dom";
import TempleSlider from "../TempleSlider/TempleSlider"

import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

import AutoSliderCarousel from "./AutoSliderCarousel";
import Carousal from "./Carousal";
import Separator from "../Separator/separator";
import ChaarDham from "../ChaarDham/ChaarDham";


export default function Home() {
  return (
    <div className="">
    <Carousal/>
    <Separator/>
    <ChaarDham/>
    <TempleSlider/>
    {/* <JyotirlingaCarousal/> */}
    {/* <JyotirlingaList/> */}



      <div className="mx-auto w-full max-w-7xl">
        
        <div>
          <div class="relative w-full bg-white">
            <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div class="flex flex-col justify-center px-2 py-6 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-4 lg:py-6 xl:col-span-6">
                <div class="cursor-pointer mt-4 flex max-w-max items-center space-x-2 rounded-full bg-red-950 p-1">
                  <div class="rounded-full bg-white p-1 px-3">
                    <p class="text-sm font-medium mt-3 ">EXPLORE→</p>
                  </div>
                  <p class="text-sm font-medium mt-3 text-white px-1">
                    Join our team{" "}
                  </p>
                </div>
                <h1 class="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                  Virtual Visit To Indinan Pilgrimage
                </h1>
                <p class="mt-8 text-lg text-gray-700">
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
                    <p class="mt-2 text-sm text-gray-500">
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
                      className=" d-block w-100"
                      src="hero1.webp"
                      alt="slide 1"
                    />
                    <CCarouselCaption className="text-white d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </CCarouselCaption>
                  </CCarouselItem>
                  <CCarouselItem>
                    <CImage
                      className="d-block w-100"
                      src="hero1.webp"
                      alt="slide 2"
                    />
                    <CCarouselCaption className="text-white  d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </CCarouselCaption>
                  </CCarouselItem>
                  <CCarouselItem>
                    <CImage
                      className="d-block w-100"
                      src="hero3.webp"
                      alt="slide 3"
                    />
                    <CCarouselCaption className="text-white d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </CCarouselCaption>
                  </CCarouselItem>
                </CCarousel>

                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
