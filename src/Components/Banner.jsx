import React from "react";
import CustomButton from "../Shared/CustomButton";
import preset from "../assets/WaveLinesDesktop3.svg";

const Banner = () => {
  return (
    <div className="relative py-20">
      <div
        className="absolute inset-0 bg-blue-500"
        style={{
          backgroundImage: `url(${preset})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          zIndex: -1 // Ensure this is in front of the first background but behind the content
        }}
      />
      <div className="relative max-w-6xl mx-auto py-20 space-y-4 grid md:grid-cols-2">
        <div className="">
          <h1 className="text-[80px] leading-none font-semibold w-[70%] text-white">
            Embrace the future of finance
          </h1>
          <p className="mt-8 text-[16px] font-bold text-white max-w-[37rem] tracking-wide">
            Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation
          </p>
          <CustomButton
            text="Contact Us"
            bgColor="bg-[#FE8B53]"
            textColor="text-white"
            borderColor=""
            hoverBgColor="bg-[#FE8B53]"
            hoverTextColor="text-white"
            hoverBorderColor="border-[#FE8B53]"
            className="mt-10"
          >
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </CustomButton>
        </div>
        <div >
         <img src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=6720&auto=format" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;