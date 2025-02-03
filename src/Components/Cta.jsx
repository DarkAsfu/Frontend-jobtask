import { Button } from "@heroui/react";
import { IoIosArrowForward } from "react-icons/io";

const Cta = () => {
  return (
    <div className="w-full text-white relative overflow-hidden -mt-48">
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
      <div className="relative max-w-6xl mx-auto pt-96 pb-48 z-10">
        <h2 className="text-[56px] font-bold mb-4">Legacy no longer</h2>
        <p className="text-[20px] mb-6">
          Talk to us to find out how we can transform your organization for the
          future
        </p>
        <Button className="flex items-center gap-2 px-6 py-3 text-lg bg-white text-blue-700 hover:bg-gray-200 transition">
          Contact Us <IoIosArrowForward />
        </Button>
      </div>
    </div>
  );
};

export default Cta;
