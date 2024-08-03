
import React from "react";
import PropTypes from "prop-types";
import { faLandmark } from "@fortawesome/free-solid-svg-icons"; // Use an appropriate icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Char Dham data
export const charDham = [
  {
    name: "Badrinath",
    location: "Chamoli, Uttarakhand",
    openingTiming: "4:00 AM - 9:00 PM",
    closingTiming: "N/A",
    importantDates: ["Badrinath Temple Opening", "Badrinath Temple Closing"],
    prashad: "Peda, Milk",
    establishment: "Ancient Temple",
    keyInformation: "Badrinath is dedicated to Lord Vishnu and is situated in the backdrop of the Neelkanth Peak.",
    image: "/images/badrinath.jpg", // Update to your image path
  },
  {
    name: "Dwarka",
    location: "Dwarka, Gujarat",
    openingTiming: "6:00 AM - 8:00 PM",
    closingTiming: "N/A",
    importantDates: ["Dwarka Festival", "Janmashtami"],
    prashad: "Ladoo, Rice",
    establishment: "Ancient Temple",
    keyInformation: "Dwarka is dedicated to Lord Krishna and is one of the seven Moksha-puris (places of liberation).",
    image: "/images/Dwarka.jpg", // Update to your image path
  },
  {
    name: "Puri",
    location: "Puri, Odisha",
    openingTiming: "5:00 AM - 10:00 PM",
    closingTiming: "N/A",
    importantDates: ["Jagannath Rath Yatra", "Jagannath Temple Opening"],
    prashad: "Mahaprasad",
    establishment: "Ancient Temple",
    keyInformation: "Puri is dedicated to Lord Jagannath; famous for the Jagannath Rath Yatra.",
    image: "/images/jagannath.jpg", // Update to your image path
  },
  {
    name: "Rameswaram",
    location: "Rameswaram, Tamil Nadu",
    openingTiming: "5:00 AM - 8:00 PM",
    closingTiming: "N/A",
    importantDates: ["Rama Navami", "Maha Shivaratri"],
    prashad: "Panchamirtham",
    establishment: "Ancient Temple",
    keyInformation: "Rameswaram is dedicated to Lord Shiva and is linked to the epic Ramayana.",
    image: "/images/rameshwardham.jpg", // Update to your image path
  }
];



const FeatureItem = ({ feature }) => {
  return (

    <div className="bg-white dark:bg-[#1E2735] text-center rounded-[20px] relative p-6 pt-12 lg:p-8 mb-6">
      <div className="relative mb-6">
        <img
          src={feature.image}
          alt={feature.name}
          className="w-full h-[300px] object-cover rounded-xl" // Ensure image is well-sized
        />
        <div className="w-[80px] h-[80px] bg-white dark:bg-[#0b1727] text-blue-600 rounded-full text-[36px] inline-flex items-center justify-center shadow-xl absolute right-0 top-0 -m-6">
          <FontAwesomeIcon icon={faLandmark} /> {/* Use a relevant icon */}
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-3xl font-bold mb-4 text-[#333] dark:text-[#f5c542]"> {/* Adjusted text color */}
          {feature.name}
        </h4>
        <p className="opacity-90 mb-2 text-[rgb(44,27,27)] text-lg font-medium "> {/* Adjusted text color */}
          {feature.keyInformation}
        </p>
        <p className="opacity-90 mb-2 text-[rgb(44,27,27)] text-lg font-medium "> {/* Adjusted text color */}
          Location: {feature.location}
        </p>
        <p className="opacity-90 mb-2 text-[rgb(44,27,27)] text-lg font-medium "> {/* Adjusted text color */}
          Timing: {feature.openingTiming}
        </p>
        <p className="opacity-90 text-[rgb(44,27,27)] text-lg font-medium"> {/* Adjusted text color */}
          Prashad: {feature.prashad}
        </p>
      </div>
    </div>

  );
};

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
};



FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
};

const ChaarDham = () => {
  return (
    <section className="ezy__featured10 light py-14 md:py-24 dark:bg-[#0b1727] text-zinc-900 dark:text-white bg-[#d0fef4]">
      <div className="container px-2">
        <div className="grid grid-cols-12 justify-center lg:gap-8">
          <div className="col-span-12 lg:col-span-5 lg:col-start-2">
            <div className="mb-12">
              <h2 className="text-[25px] md:text-[45px] leading-none font-bold mb-6">
                Char Dham Pilgrimage Sites
              </h2>
              <p className="text-lg leading-9 mb-6">
                Explore the sacred Char Dham pilgrimage sites, each with its own unique significance and divine presence.
              </p>
            </div>

            {charDham
              .slice(0, Math.floor(charDham.length / 2))
              .map((feature, i) => (
                <Link to={`/home/chardham/${i + 1}`} key={i} className="cursor-pointer no-underline">
                  <FeatureItem feature={feature} />
                </Link>
              ))}
          </div>
          <div className="col-span-12 lg:col-span-5">
            {charDham.slice(Math.floor(charDham.length / 2), charDham.length).map((feature, i) => (
              <Link to={`/home/chardham/${Math.floor(charDham.length / 2) + i + 1}`} key={i} className="cursor-pointer no-underline">
                <FeatureItem feature={feature} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaarDham;
