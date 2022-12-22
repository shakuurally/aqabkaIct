import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/Logo.svg";
import Image from "next/image";
import Router from "next/router";
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="w-full bg-white shadow">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link
                  href="/"
                  
                >
                  <Image src={LogoVPN}  width={145}
                    height={50} className="h-3 w-4"   loading="lazy"
                    />
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <Link
                    activeClass="active"
                    href="/"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("ourWork");
                    }}
                  >
                    <a
                      className={
                        "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                        (activeLink === "ourWork"
                          ? " text-orange-500 animation-active "
                          : " text-black-500 hover:text-orange-500 ")
                      }
                    >
                     Home
                    </a>
                  </Link> 
                  <Link
                    activeClass="active"
                    href="ourWork"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("ourWork");
                    }}
                  >
                    <a
                      className={
                        "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                        (activeLink === "ourWork"
                          ? " text-orange-500 animation-active "
                          : " text-black-500 hover:text-orange-500 ")
                      }
                    >
                     Products
                    </a>
                  </Link> 
                </li>
                <div  className=" md:hidden">
                    <ButtonOutline>
                <a href="tel:+252616771010">Call Us</a>
              </ButtonOutline>
                </div>
              
              </ul>
            </div>
            <div>
            <div className="hidden md:flex">
              <ButtonOutline>
                <a href="tel:+252616771010">Call Us</a>
              </ButtonOutline>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
