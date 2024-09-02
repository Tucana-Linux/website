"use client";
import React from "react";
import "./global.css";
import { TypeAnimation } from "react-type-animation";

const Title = () => {
  return (
    <div className="h-screen items-center flex flex-col justify-center bg-i-see-stars bg-cover text-white">
      <h1 className="-mt-20 text-center text-6xl font-montserrat">
        Tucana Linux
      </h1>
      <TypeAnimation
        sequence={[
          "Build your desktop",
          1000,
          "Build your configs",
          1000,
          "Build your distro",
          1000,
          "Build your dreams",
          1000,
        ]}
        wrapper="div"
        speed={50}
        style={{
          fontSize: "2em",
          display: "inline-block",
          fontFamily: "Montserrat",
        }}
        repeat={0}
      />
    </div>
  );
};

export default Title;
