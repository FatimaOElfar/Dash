import React from 'react';
import styles from './navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 border-white border-2 border-solid py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4 rounded-xl  ">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <span className="ms-2 text-xl text-black dark:text-white flex flex-row justify-center items-center">
          <GiHamburgerMenu /> <h3 className="text-[#0FB3BB] mx-4">Sky Cast</h3>
          <span className="ms-2 text-xl text-black dark:text-white flex flex-row justify-center items-center">
            <CiLocationOn className="text-[#0FB3BB]" />{' '}
            <h3 className="text-[#0FB3BB] mx-4">Sky Cast</h3>
          </span>
        </span>

        <div className="ms-5 flex w-[25%] items-center justify-between">
          <input
            type="search"
            className="relative m-0 block w-[2px] md:w-[20px] min-w-0 flex-auto rounded-lg border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
            placeholder="Search location"
            style={{ marginLeft: '20px', fontSize: '15px' }}
            aria-label="Search"
            aria-describedby="button-addon2"
          />

          <span
            className="flex items-center absolute   whitespace-nowrap rounded   py-1.5 text-center text-base font-medium text-gray-600 dark:text-white [&>svg]:w-5"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          {/* <span>
            <IoIosNotificationsOutline className="text-xl text-[#0FB3BB] " />
          </span> */}
          <Link to="sign-up" className="px-4">
            <button className=" bg-[#0FB3BB] rounded text-black text-sm  py-2 px-4 outline-none border-0 ">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
