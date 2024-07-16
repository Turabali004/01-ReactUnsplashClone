import React from "react";
import logo from "../../assests/images/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="NavbarContainer">
      <img src={logo} />
      <form action="">
        <BiSearchAlt2 />
        <input type="text" required />
      </form>
      <span>Advertise</span>
      <span>Blog</span>
      <span>Unsplash</span>
    </div>
  );
}

export default Navbar;
