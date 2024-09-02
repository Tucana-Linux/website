import React from "react";
import "./global.css";
import Navbar from "./navbar";
import Title from "./page";
import About from "./about";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <head></head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
