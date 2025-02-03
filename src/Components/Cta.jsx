import { Button } from "@heroui/react";
import { IoIosArrowForward } from "react-icons/io";
import CustomButton from "../Shared/CustomButton";

const Cta = () => {
  return (
    <div className="w-full text-white relative overflow-hidden -mt-48 px-6">
      {/* SVG Shape */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
      >
        <defs>
          <radialGradient
            id="radialGradient"
            cx="23.57%"
            cy="2%"
            r="88.58%"
            fx="23.57%"
            fy="2%"
          >
            <stop offset="0%" stopColor="#00e9ea" />
            <stop offset="52.08%" stopColor="#1f80f0" />
            <stop offset="100%" stopColor="#005bc4" />
          </radialGradient>
        </defs>
        <path
          fill="url(#radialGradient)"
          d="M0,64L1440,192L1440,320L0,320Z"
        ></path>
      </svg>

      {/* Content Over SVG */}
      <div className="relative max-w-6xl mx-auto pt-[600px] md:pt-96 pb-48 z-10">
        <h2 className="text-[32px] md:text-[56px] font-bold mb-4">Legacy no longer</h2>
        <p className="text-[20px] mb-6">
          Talk to us to find out how we can transform your organization for the
          future
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
    </div>
  );
};

export default Cta;
