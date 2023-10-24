import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import Login from "../Login";
import Cesta from "../Cesta";
import Button from "../Button";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full min-h-min transition-all duration-300 ease-in-out flex flex-row justify-center items-center space-x-5 ${
        scrolling ? "bg-white shadow-md" : "bg-opacity-90"
      }`}
    >
      <Logo />
      <Navigation />
      <div className=" flex flex-row  justify-around " >
        {/* Login - carrito - contacto */}
        <Login />
        <Cesta />
        <Button />
      </div>
    </nav>
  );
}
export default Navbar;
