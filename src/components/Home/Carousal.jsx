import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SearchForm = () => (
  
  <form className="w-full flex justify-center items-center rounded-xl overflow-hidden mx-auto bg-white shadow-md">
  <input
    type="email"
    className="px-7 py-3 grow focus:outline-none"
    placeholder="Enter Email"
  />
  <button className="flex justify-center items-center text-white text-[22px] py-3 px-7 border border-blue-600 bg-blue-600 hover:bg-opacity-90 hover:border-opacity-90 duration-300">
    <FontAwesomeIcon icon={faSearch} />
  </button>
</form>
);

const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false,
  };

  const images = [
    "/hero1.webp",
    "/hero2.webp",
    "/hero3.webp",
  ];

  return (
    <section className="relative text-white ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-screen relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})`,backgroundPosition:'top center' }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <div className="container px-4 mx-auto">
                <div className="md:max-w-5xl mx-auto text-center">
                  <h1 className="text-6xl font-bold leading-tight md:text-[62px] mb-2">
                    VIRTUAL VISIT TO<br/> INDIAN PILGRIMAGE
                  </h1>
                  <p className="text-2xl opacity-80 leading-snug px-12 py-6">
                    Discover the beauty of Indian Pilgrimage with DrishtiDham
                  </p>
                  <div className="sm:max-w-lg mx-auto flex justify-center">
                    <SearchForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousal;
