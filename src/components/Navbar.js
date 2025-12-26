import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Separate styling for navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/we3b" className="nav-button">Home</Link>
      <Link to="/projects" className="nav-button">Projects</Link>
      <Link to="/partners" className="nav-button">Partners / Clients</Link>
      <Link to="/about" className="nav-button">About</Link>
    </nav>
  );
};

export default Navbar;