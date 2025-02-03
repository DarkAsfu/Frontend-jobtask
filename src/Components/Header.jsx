import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import CustomButton from "../Shared/CustomButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = ["Profile", "Dashboard", "Activity", "Analytics"];

  return (
    <Navbar
      shouldHideOnScroll
      className={`fixed w-full top-0 transition-all duration-300 z-50 ${
        isScrolled ? "bg-white text-blue-600" : "bg-transparent text-white"
      }`}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <img src={isScrolled ? logo2 : logo} alt="Logo" />

        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {["Solution", "Customers", "Services"].map((item) => (
          <NavbarItem key={item}>
            <Link
              href="#"
              className={`w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b-2 ${
                isScrolled
                  ? "border-blue-600 text-blue-600"
                  : "border-white text-white"
              } border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer font-semibold`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <CustomButton
            text="Contact Us"
            bgColor=""
            textColor={`${isScrolled ? "text-blue-600" : "text-white"}`}
            borderColor="border-white"
            hoverBgColor="bg-white"
            hoverTextColor="text-[#1f80F0]"
            hoverBorderColor=""
            className="mt-2"
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
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={index === 2 ? "primary" : "foreground"}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
