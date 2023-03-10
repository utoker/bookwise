import { Popover } from '@headlessui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import AppContext from './AppContext';
import { useTheme } from 'next-themes';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const context = useContext(AppContext);
  const onClick = () => {
    context.setIsOpen(true);
  };
  const links = [
    {
      name: 'Home',
      href: 'hero',
    },
    {
      name: 'About',
      href: 'about',
    },
    {
      name: 'Contact',
      href: 'contact',
    },
  ];

  return (
    <nav className="fixed w-full z-20  rounded  mx-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center px-2 py-2.5  sm:px-8 justify-between mx-auto border border-gray-200 bg-white  dark:border-gray-700 dark:bg-gray-800">
        <Link to="hero" smooth duration={500} className="flex items-center">
          <Image
            src="/images/logo.png"
            className=" mr-3 "
            alt="BookWise Logo"
            width={32}
            height={33}
          />
          <span className="cursor-pointer self-center hidden md:flex text-xl font-semibold whitespace-nowrap dark:text-white">
            BookWise
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-3 h-12 w-12 mx-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={onClick}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>

          <Popover className="relative inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <Popover.Button>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Popover.Button>

            <Popover.Panel className="absolute left-1/2 z-10 mt-40 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-4 bg-white p-3 lg:grid-cols-2">
                  {links.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center rounded-lg transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Popover>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                smooth
                spy
                duration={500}
                to="hero"
                className="dark:text-gray-400 cursor-pointer block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy
                smooth
                duration={500}
                offset={-400}
                to="about"
                className="cursor-pointer block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                spy
                smooth
                duration={500}
                to="contact"
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
