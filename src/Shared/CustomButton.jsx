import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
const CustomButton = ({
  text,
  onClick,
  className = '',
  children,
  bgColor = '',
  textColor = '',
  borderColor = '',
  hoverBgColor = '',
  hoverTextColor = '',
  hoverBorderColor = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#_"
      className={`inline-flex items-center ${borderColor ? "border" : "border-0"} w-full px-5 py-3 mb-3 mr-1 text-[18px] font-semibold no-underline align-middlerounded-md cursor-pointer select-none sm:mb-0 sm:w-auto transition-all duration-300 group ${isHovered ? hoverBgColor : bgColor} ${isHovered ? hoverTextColor : textColor} ${isHovered ? hoverBorderColor : borderColor} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      {children && (
        // <svg
        //   className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
        //   fill="none"
        //   stroke="currentColor"
        //   viewBox="0 0 24 24"
        //   xmlns="http://www.w3.org/2000/svg"
        // >
        //   <path
        //     strokeLinecap="round"
        //     strokeLinejoin="round"
        //     strokeWidth="2"
        //     d="M14 5l7 7m0 0l-7 7m7-7H3"
        //   ></path>
        // </svg>
        <IoIosArrowForward className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
};

export default CustomButton;