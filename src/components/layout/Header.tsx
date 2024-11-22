"use client"; 

import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5"; 

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-10 bg-white">
      <header>
        <Wrapper>
          <div className="flex justify-between py-4 items-center">
            {/* Logo */}
            <div className="text-2xl font-bold ">
              <h1>Panaverse Dou</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 font-medium">
              <ul className="flex space-x-8">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>

                {/* Dropdown for Courses */}
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="focus:outline-none"
                  >
                    Courses
                  </button>
                  {isDropdownOpen && (
                    <ul
                      className="absolute left-1/2 -translate-x-1/2 bg-transparent-400 border border-gray-300 shadow-lg mt-2 rounded-md w-40 text-black"
                      onMouseLeave={closeDropdown}
                    >
                      <li className="hover:bg-gray-100">
                        <Link href="/courses/web3" className="block px-4 py-2">
                          Web 3.0
                        </Link>
                      </li>
                      <li className="hover:bg-gray-100">
                        <Link href="/courses/ai" className="block px-4 py-2">
                          Artificial Intelligence
                        </Link>
                      </li>
                      <li className="hover:bg-gray-100">
                        <Link href="/courses/cloud" className="block px-4 py-2">
                          Cloud Computing
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <IoClose size={24}  />
                ) : (
                  <IoMenu size={24} />
                )}
              </button>
            </div>
          </div>
        </Wrapper>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 space-y-4">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li className="relative">
              <button onClick={toggleDropdown} className="w-full text-left">
                Courses
              </button>
              {isDropdownOpen && (
                <ul className="bg-white border border-gray-300 shadow-lg mt-2 rounded-md w-full">
                  <li className="hover:bg-gray-100">
                    <Link href="/courses/web3" className="block px-4 py-2">
                      Web 3.0
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/courses/ai" className="block px-4 py-2">
                      Artificial Intelligence
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/courses/cloud" className="block px-4 py-2">
                      Cloud Computing
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
