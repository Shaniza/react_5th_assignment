import { useState } from "react";
import "./Nav.css";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

     
      <div className="nav-logo">
        <img src={logo} alt="DevStack Logo" className="logo" />
      </div>

       
      <div className={`nav-menu ${menuOpen ? "mobile-open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#technologies" onClick={() => setMenuOpen(false)}>
          Technologies
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

       
      <div className="nav-actions">

        <a href="#signin" className="sign-in">
          Sign In
        </a>

        <button className="sign-up">
          Sign Up
        </button>

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={hamburger} alt="Menu" />
        </button>

      </div>

    </nav>
  );
};

export default Nav;