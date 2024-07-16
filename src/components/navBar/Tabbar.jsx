import React from "react";
import "./Navbar.scss";
import { Tab } from "./navBar";
import {Link, NavLink} from 'react-router-dom'

function Tabbar() {
  const tempData = ["Wallpaper", "3D Renders", "Trable", "Nature"];
  

  return (
    <div className="TabbarContainer">
      <Tab>Editorial</Tab>
      <Tab>Following</Tab>
      <hr className="lineBar"></hr>
      {tempData.map((item, index) => (
        <NavLink 
        // to='/'
        className={({isActive}) =>
          `  duration-200 ${isActive ? "text-yellow-200" : "text-{#767676}"}  hover:text-orange-700 `

      }
        key={index}>{item}</NavLink>
      ))}
    </div>
  );
}

export default Tabbar;
