import React from "react";
import logo from "../images/logo.svg";
function Navbar() {
  return (
    <nav className="bg-[#F1F1F1] sticky top-0 w-full z-10 bottom-0 left-0 right-0">
      <div>
        <img src={logo} alt="logo" className="w-[13%]"></img>
      </div>
    </nav>
  );
}

export default Navbar;
