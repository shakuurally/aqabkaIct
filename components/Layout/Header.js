import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/Logo.svg";
import Image from "next/image";
import Router, { useRouter } from "next/router";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const currentRoute = router.pathname;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <header
      className={
        "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
        (scrollActive ? " shadow-md pt-0" : " pt-4")
      }
    >
      <nav className="w-full  px-3 lg:px-24 bg-white shadow">
        <div className="flex items-center justify-between">
          {/* left */}
          <div>
          <Link activeClass="active" href="/">

            <Image
              src={LogoVPN}
              width={145}
              height={50}
              className="h-3 w-4"
              loading="lazy"
            />
            </Link>
          </div>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
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
            )}{" "}
          </div>
          {/* right */}

          {/* desktop menu */}
          <div className=" items-center space-x-10 hidden md:flex">
            <Link href="/">
              <a
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (currentRoute === "/"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Home
              </a>
            </Link>
            <Link activeClass="active" href="ourWork">
              <a
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (currentRoute === "/ourWork"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Products
              </a>
            </Link>
            <ButtonOutline>
              <a href="tel:+252616771010">Call Us</a>
            </ButtonOutline>
          </div>

          {/* mobile menu */}
          <div
            className={`  items-center space-y-24 flex md:hidden flex-col absolute left-0 top-20 h-screen w-screen overflow-hidden z-50 bg-white pt-24
          shadow-lg ${open ? "flex" : "hidden"}
        `}
        
          >
            <Link activeClass="active" href="/">
              <a
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (currentRoute === "/"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
                onClick={() => setOpen(!open)}

              >
                Home
              </a>
            </Link>
            <Link activeClass="active" href="ourWork">
              <a
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (currentRoute === "/ourWork"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
                onClick={() => setOpen(!open)}

              >
                Products
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
