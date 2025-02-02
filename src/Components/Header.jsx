import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@heroui/react'
import logo from '../assets/logo.svg'
import { IoIosArrowForward } from 'react-icons/io'
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
          <a
            className='group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-white hover:bg-white focus:ring-3 focus:outline-hidden transition-all'
            href='#'
          >
            <span className='font-medium transition-colors group-hover:text-blue-500'>
              {' '}
              Contact Us{' '}
            </span>

            <IoIosArrowForward className='group-hover:text-blue-500  group-hover:ml-2 transition-all' />
          </a>
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
