import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import "./NavBar.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav className="navbar">
      <Fade top>
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <div className="toggle-container">
            <div className="toggle">
              {navState ? (
                <MdClose onClick={() => setNavState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavState(true)} />
              )}
            </div>
            <div className="mode" onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="light" />
              ) : (
                <BsFillMoonFill className="dark" />
              )}
            </div>
          </div>
        </div>
        <div className={`links-container ${navState ? "nav-visible" : ""}`}>
          <ul className="links">
            <li>
              <Link to="hero" smooth={true} duration={500}>
                Data Analysis
              </Link>
            </li>
            <li>
              <Link to="mena" smooth={true} duration={500} offset={-100}>
                MENA Cart
              </Link>
            </li>
            <li>
              <Link to="partners" smooth={true} duration={500}>
                Partners
              </Link>
            </li>
            <li onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="light" />
              ) : (
                <BsFillMoonFill className="dark" />
              )}
            </li>
          </ul>
        </div>
      </Fade>
    </nav>
  );
}
