import Link from "next/link";
import React from "react";
import { CiCircleInfo } from "react-icons/ci";

const Layout = () => {
  return (
    <>
      <div className="text-center mt-32 mx-32 text-5xl font-montserrat">
        Download Tucana 3.1
      </div>
      <div className="flex items-center mx-40 my-10 rounded-2xl bg-red-50 h-32 flex-row p-10 text-gray-600">
        <CiCircleInfo size="90" />
        <div className="mx-4"></div>
        Note: All Tucana installers will ask for a repository mirror you want to
        clone from. You can either use the public mirrors detailed at the wiki
        post{" "}
        <a
          className="text-blue-400"
          href="https://github.com/rahulc07/Tucana/wiki/Installation#simple-install"
        >
          here
        </a>{" "}
        or host your with the instructions from another wiki article
        <a
          className="text-blue-400"
          href="https://github.com/rahulc07/Tucana/wiki/Repo-Setup"
        >
          here
        </a>
        . In addition all Tucana ISOs, regardless of their user interface can be
        used to install ANY desktop enviornment listed on this page and more,
        the installer will give you an option to pick at install time.
      </div>
      <h1 className="text-center mx-32 text-4xl font-montserrat mb-10 underline">
        Prebuilt ISOs
      </h1>
      <div className="flex flex-row items-center">
        <div className="items-center text-center rounded-s-lg bg-gray-100 shadow-lg w-1/3 mx-40 flex flex-col">
          <img className="rounded-xl mb-2" src="/images/kde.png" />
          <h1 className="font-bold font-suse text-xl my-2">KDE Plasma</h1>
          <p className="text-left p-6">
            A sleek modern desktop environment built around the Qt toolkit.
            Extremely customizable and user friendly, with a Windows like layout
            by default.
          </p>
          <Link href="https://ftp2.osuosl.org/pub/tucana-linux/stable/iso/tucana-3.1-kde.iso">
            <button className="px-10 font-montserrat font-bold rounded-xl p-6 my-4 text-left bg-cyan-500 text-gray-100">
              Download
            </button>
          </Link>
        </div>
        <div className="items-center text-center rounded-s-lg bg-gray-100 shadow-lg w-1/3 mx-40 flex flex-col">
          <img className="rounded-xl mb-2" src="/images/gnome.png" />
          <h1 className="font-bold font-suse text-xl my-2">GNOME</h1>
          <p className="text-left p-6">
            A classic Linux desktop environment with a unique but powerful user
            interface built around Gtk and Libadwaita. Infinitely customizable
            with user-built extensions.
          </p>
          <Link href="https://ftp2.osuosl.org/pub/tucana-linux/stable/iso/tucana-3.1-gnome.iso">
            <button className="hover:bg-white hover:text-cyan-400 hover:border-cyan-400 hover:border-spacing-2 transition-all font-montserrat font-bold rounded-xl p-6 px-10 my-4 text-left bg-cyan-500 text-gray-100">
              Download
            </button>
          </Link>
        </div>
      </div>
      <div className="h-20"></div>
      <h1 className="text-center mx-32 text-4xl font-montserrat mb-2 underline">
        Other desktops
      </h1>
      <p className="text-center font-montserrat text-xl mb-10">
        Install these with one of the ISOs above
      </p>
      <div className="flex flex-row items-center">
        <div className="items-center text-center rounded-s-lg bg-gray-100 shadow-lg w-1/3 mx-40 flex flex-col">
          <img className="rounded-xl mb-2" src="/images/cinnamon.png" />
          <h1 className="font-bold font-suse text-xl my-2">Cinnamon</h1>
          <p className="text-left p-6">
            The default environment for{" "}
            <Link
              className="text-blue-600 underline"
              href="https://linuxmint.com/"
            >
              Linux Mint
            </Link>{" "}
            with a Windows like UI friendly for beginners and somewhat
            lightweight compared to the others. Easily themable but Tucana's
            defaults don't look that good out of the box. We would recommend
            installing <i>papirus</i> and <i>nordic</i> from mercury or some
            other theme to make it look better.
          </p>
        </div>
        <div className="items-center text-center rounded-s-lg bg-gray-100 shadow-lg w-1/3 mx-40 flex flex-col">
          <img className="rounded-xl mb-2" src="/images/xfce.png" />
          <h1 className="font-bold font-suse text-xl my-2">XFCE</h1>
          <p className="text-left p-6">
            A super light weight desktop environment with a lot of customization
            options. Once again Tucana does not come with a theme for this one
            so we would recommend installing <i>papirus</i> and <i>nordic</i>{" "}
            from mercury or some other theme to make it look better.
          </p>
        </div>
      </div>
      <div className="h-20"></div>
      <h1 className="text-center mx-32 text-4xl font-montserrat mb-2 underline">
        Others not listed
      </h1>
      <p className="text-center font-montserrat text-xl mb-10">
        Select No desktop during install and install the package(s)
      </p>
      <p className="text-center font-montserrat text-xl mb-10">
        i3<br></br> icewm<br></br> twm
      </p>
      <h1 className="text-center mx-32 text-4xl font-montserrat mb-2 underline">
        Don't see your favorite?
      </h1>
      <p className="text-center font-montserrat text-xl mb-10">
        Request it by making an issue on the Tucana source{" "}
        <Link
          href="https://github.com/rahulc07/Tucana/issues"
          className="text-blue-500 underline"
        >
          here
        </Link>
      </p>
    </>
  );
};

export default Layout;
