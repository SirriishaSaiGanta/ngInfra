import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">N.G Infra Developers</div>

      <div className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#services" className="nav-item">
          Services
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
        <button className="contact-button">Contact Us</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
