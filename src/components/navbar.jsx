import React from "react";
import "../css/navbar.css";
import logo from "../images/logo.png";
import contentimage from "../images/content-image-1.png";
import contentimage3 from "../images/icons.png";
import pattern1 from "../images/pattern-1.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Foodily-logo" />
        </div>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <i class="fa-solid fa-magnifying-glass" id="navicon"></i>
          <i class="fa-solid fa-bars" id="navicon"></i>
        </div>
      </nav>

      <div className="contentbox">
        <div className="content">
          <span>Healthy Smoothie</span>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            voluptates odit! Est atque corrupti earum, eveniet soluta
            consequatur quidem provident. Ratione beatae unde ullam cum iusto
            facere odio veniam maiores?
          </p>

          <button className="buynow">
            <p className="button-icon">
              <i className="fa-solid fa-leaf"></i>
            </p>
            <p className="buttontext">Buy Now</p>
          </button>

          <img src={contentimage3} id="contentimage3" />
        </div>

        <img src={contentimage} id="contentimage1" />
      </div>

      <img src={pattern1} id="pattern1" />
    </div>
  );
}

export default Navbar;
