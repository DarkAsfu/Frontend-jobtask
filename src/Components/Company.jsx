import { Button } from "@heroui/react";
import { IoIosArrowForward } from "react-icons/io";

const Company = () => {
  const stats = [
    {
      id: 1,
      count: ">20",
      desc: "Years of experience",
    },
    {
      id: 2,
      count: "40+",
      desc: "Financial institutions",
    },
    {
      id: 3,
      count: ">200m",
      desc: "Customers Each",
    },
  ];

  const clogo = [
    {
      id: 1,
      url: "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
    },
    {
      id: 2,
      url: "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp",
    },
    {
      id: 3,
      url: "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&fm=webp",
    },
    {
      id: 4,
      url: "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&fm=webp",
    },
    {
      id: 5,
      url: "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&fm=webp",
    },
    {
      id: 6,
      url: "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&fm=webp",
    },
    {
      id: 7,
      url: "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&fm=webp",
    },
    {
      id: 8,
      url: "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&fm=webp",
    },
    {
      id: 9,
      url: "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&fm=webp",
    },
    {
      id: 10,
      url: "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp",
    },
    {
      id: 11,
      url: "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&fm=webp",
    },
    {
      id: 12,
      url: "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
    },
    {
      id: 13,
      url: "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp",
    },
    {
      id: 14,
      url: "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
    },
    {
      id: 15,
      url: "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp",
    },
  ];

  return (
    <div className=" pb-20">
      {/* Gradient SVG Shape */}
      <svg
        className="max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0" />
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto">
        <h5 className="title text-center">TRUSTED BY THE BEST</h5>
        <div className="grid md:grid-cols-3 mt-8 space-y-8 md:space-y-0">
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex flex-row md:flex-col items-center justify-between md:justify-center border-b border-dashed md:border-b-0 border-[#b9d9ff] pb-8"
            >
              <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat font-semibold leading-none bg-gradient-to-b from-blue-500 to-[#0057BB] text-transparent bg-clip-text">
                {item.count}
              </h2>
              <p className="text-right text-[#151D2F] lg:text-center max-lg:text-[20px] lg:text-lg lg:mt-[19px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-xl grid grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5 items-center mt-20">
          {clogo.map((item) => (
            <img key={item.id} src={item.url} alt="" className="mt-8" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
