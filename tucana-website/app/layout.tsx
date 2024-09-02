import React from "react";
import "./global.css";
import Navbar from "./navbar";
import Title from "./title";
import About from "./about";
export const Layout = () => {
  return (
    <html className="scroll-smooth">
      <head>
        <body>
          <Navbar />
        </body>
      </head>
      <body>
        <Title />
        <About />
      </body>
    </html>
  );
};
export default Layout;
