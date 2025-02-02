import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link
} from '@heroui/react'
import logo from '../assets/logo.svg'
import { IoIosArrowForward } from 'react-icons/io'
import CustomButton from '../Shared/CustomButton'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = ['Profile', 'Dashboard', 'Activity', 'Analytics']

  return (
    <Navbar
      className='bg-blue-500'
      maxWidth='xl'
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <img src={logo} alt='' />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link
            href='#'
            className='text-white w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer font-semibold'
          >
            Solution
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href='#'
            className='text-white w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer font-semibold'
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href='#'
            className='text-white w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer font-semibold'
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href='#'
            className='text-white w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer font-semibold'
          >
            Customers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <CustomButton
            text='Contact Us'
            bgColor=''
            textColor='text-white'
            borderColor='border-white'
            hoverBgColor='bg-white'
            hoverTextColor='text-[#1f80F0]'
            hoverBorderColor=''
          >
            <svg
              className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              ></path>
            </svg>
          </CustomButton>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
