"use client";
import React, { useEffect, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [navbar, transparency] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const opaqueNavBar = () => {
      if (!(window.scrollY >= window.innerHeight)) {
        transparency(false);
      } else {
        transparency(true);
      }
    };
    window.addEventListener("scroll", opaqueNavBar);
  });
  return (
    <header>
      <div className={navbar ? "navbar active" : "navbar"}>
        <div className="justify-start">
          <span className="flex space-x-3 mx-72 mt-4 mb-2 px-2 font-montserrat font-bold text-2xl">
            Tucana Linux
          </span>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } fixed justify-end w-screen h-16 text-white hidden md:flex`}
        >
          <span className="mx-72 flex space-x-3">
            <NavbarTile
              name={"About"}
              icon={<CiCircleInfo size="20" />}
              navbar={navbar}
            />
            <NavbarTile
              name={"Wiki"}
              icon={<IoBookOutline size="20" />}
              navbar={navbar}
            />
            <NavbarTile
              name={"Source"}
              icon={<FaGithub size="20" />}
              navbar={navbar}
            />
            <div
              className=" relative flex items-center justify-center  space-x-3 mx-auto 
    mt-2 mb-2 px-2 py-2 text-white hover:font-bold transition-all bg-cyan-500 rounded-2xl"
            >
              <span className="space-x-5">
                <FaDownload size="20" />
              </span>
              <span className="space-x-5">Download</span>
            </div>
          </span>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <CiMenuBurger />
          </button>
        </div>
      </div>
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
    <div className={navbar ? "navbar-tile active" : "navbar-tile"}>
      <span className="space-x-5">{icon}</span>
      <span className="space-x-5">{name}</span>
    </div>
  );
};

export default Navbar;
