import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GaHamburgerMenu, GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to={"/"}>
          <h1>
            {" "}
            <span>S</span>erene
          </h1>
        </Link>
      </div>
      <ul className="app__navbar-links">
        <Link to={"/"}>
          <li className="p__opensans"> Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="p__opensans"> About</li>
        </Link>
        <Link to={"/menu"}>
          <li className="p__opensans"> Menu</li>
        </Link>
        <Link to={"/contact"}>
          <li className="p__opensans"> Contact</li>
        </Link>
      </ul>
      <div className="app__navbar-login">
        <Link to={"/login"}>
          <p className="p__opensans">Log In </p>
        </Link>
        <div></div>
        <Link to={"/login"}>
          <p className="p__opensans"> Book a Table </p>
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                {" "}
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
