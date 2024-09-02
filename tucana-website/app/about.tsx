import React from "react";
import { TbSettingsPlus } from "react-icons/tb";

const About = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto bg-gray-100 rounded-2xl shadow-lg p-6 flex items-center flex-col md:flex-row">
        <TbSettingsPlus
          size="200"
          className="text-blue-500 mb-4 md:mb-0 md:mr-6"
        />
        <div className="ml-6 text-gray-800 text-center md:text-left">
          With Tucana, you get full control over your computer With as many
          options as you can dream of. Want to host your own repository? Tucana
          was designed for that! Need a patched kernel? Great, you can push that
          to your own repo or install it locally.
        </div>
      </div>
    </div>
  );
};

export default About;
