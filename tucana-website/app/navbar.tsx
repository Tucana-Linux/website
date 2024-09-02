"use client";
import React, { useEffect, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    if (pathname != "/") {
      setNavbar(true);
    }
    const handleScroll = () => {
      console.log(window.scrollY);
      console.log(window.innerHeight);
      if (window.scrollY < window.innerHeight && pathname == "/") {
        console.log("Switching navbar to transparent");
        // True means use the white and black
        setNavbar(false);
      } else {
        console.log("Switching navbar to opaque");
        setNavbar(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <header className="fixed w-full top-0 z-50">
      <div className={navbar ? "navbar active" : "navbar"}>
        <div className={"md:text-sm lg:text-2xl font-bold mx-10 my-4"}>
          Tucana Linux
        </div>
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          <div className="hidden md:flex space-x-8 justify-end">
            <Link href="/#about">
              <NavbarTile
                name={"About"}
                icon={<CiCircleInfo size="20" />}
                navbar={navbar}
              />
            </Link>
            <Link href="https://github.com/rahulc07/Tucana/wiki">
              <NavbarTile
                name={"Wiki"}
                icon={<IoBookOutline size="20" />}
                navbar={navbar}
              />
            </Link>
            <Link href="https://github.com/rahulc07/Tucana">
              <NavbarTile
                name={"Source"}
                icon={<FaGithub size="28" />}
                navbar={navbar}
              />
            </Link>

            <Link href="/download">
              <div className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 text-white rounded-2xl hover:bg-cyan-600 transition-all">
                <FaDownload size="20" />
                <span>Download</span>
              </div>
            </Link>
          </div>
          <div className="md:hidden ml-20 justify-items-end">
            <button className="justify-end" onClick={() => setIsOpen(!isOpen)}>
              <CiMenuBurger size="24" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-cyan-400"
            onClick={() => setIsOpen(false)}
          >
            <IoClose size="32" />
          </button>
          <div className="flex flex-col items-center space-y-8 text-cyan-400 text-2xl font-semibold">
            <Link href="#about">
              <NavbarTile
                name={"About"}
                icon={<CiCircleInfo size="28" />}
                navbar={navbar}
              />
            </Link>
            <Link href="https://github.com/rahulc07/Tucana/wiki">
              <NavbarTile
                name={"Wiki"}
                icon={<IoBookOutline size="28" />}
                navbar={navbar}
              />
            </Link>
            <Link href="https://github.com/rahulc07/Tucana">
              <NavbarTile
                name={"Source"}
                icon={<FaGithub size="28" />}
                navbar={navbar}
              />
            </Link>

            <Link href="/download">
              <NavbarTile
                name={"Download"}
                icon={<FaDownload size="28" />}
                navbar={navbar}
              />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavbarTile = ({
  name,
  icon,
  navbar,
}: {
  name: string;
  icon: React.ReactNode;
  navbar: boolean;
}) => {
  return (
    <div
      className={
        navbar ? "navbar-tile-active" : "md:navbar-tile navbar-tile-active"
      }
    >
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default Navbar;
