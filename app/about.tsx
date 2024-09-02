import React from "react";
import { TbSettingsPlus } from "react-icons/tb";
import { GiSunCloud } from "react-icons/gi";
import { FaHammer } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";

const About = () => {
  return (
    <>
      <div className="w-screen h-32" id="about"></div>
      <h1 className="text-6xl text-center underline">About</h1>
      <div className="h-screen py-10 justify-start flex-row">
        <div className="md:mx-40 bg-gray-100 rounded-2xl shadow-lg p-6 flex items-center flex-col md:flex-row">
          <TbSettingsPlus
            size="200"
            className="text-blue-500 mb-4 md:mb-0 md:mr-6"
          />
          <div className="ml-6 text-gray-800 text-center md:text-left">
            With Tucana, you get full control over your computer, with as many
            options as you can dream of. Want to host your own repository?
            Tucana was designed for that! Need a patched kernel? Great, you can
            push that to your own repo or install it locally. Or don't to any of
            those things, the choice is yours.
          </div>
        </div>

        <div className="my-10 md:mx-40 bg-gray-100 rounded-2xl shadow-lg p-6 flex items-center flex-col md:flex-row">
          <GiSunCloud
            size="200"
            className="text-yellow-500 mb-4 md:mb-0 md:mr-6"
          />
          <div className="ml-6 text-gray-800 text-center md:text-left">
            Tucana is a customizers heaven, once you finish customizing your
            desktop, share it using the ISO building tools! Customize the
            installer 'till your hearts content and build it the way you want to
            build it.
          </div>
        </div>

        <div className="my-10 md:mx-40 bg-gray-100 rounded-2xl shadow-lg p-6 flex items-center flex-col md:flex-row">
          <FaHammer size="200" className="text-black mb-4 md:mb-0 md:mr-6" />
          <div className="ml-6 text-gray-800 text-center md:text-left">
            Tucana was built from scratch for customization and desktop use. The
            build process for new packages is exceptionally simple, check out
            the templates and build-scripts on{" "}
            <a
              className="text-blue-400 hover:underline transition-all"
              href="https://github.com/rahulc07/Tucana-Build-Scripts"
            >
              Github
            </a>
          </div>
        </div>
        <div className="my-10 md:mx-40 bg-gray-100 rounded-2xl shadow-lg p-6 flex items-center flex-col md:flex-row">
          <LuPackageOpen
            size="200"
            className="text-amber-900 mb-4 md:mb-0 md:mr-6"
          />
          <div className="ml-6 text-gray-800 text-center md:text-left">
            Tucana uses a fully custom package manager called mercury, entirely
            written Bash mercury isn’t the fastest thing in the world, but its
            simplicity allows it to be easily modified to suite any need. Try it
            with mercury-sync, mercury- install $PACKAGE, mercury-update.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
