import React from "react";
import "./global.css";
import Navbar from "./navbar";
import Title from "./page";
import About from "./about";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="scroll-smooth">
      <head>
        <body>
          <Navbar />
          {children}
        </body>
      </head>
    </html>
  );
};
export default Layout;
