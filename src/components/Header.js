import React from "react";
import Navbar from "./Navbar";
import "../styles/header.css";
import { images } from "../assets/images";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="branding">
          <img src={images.bbblogo} alt="Block Build Bor" className="logo" />
          <span className="company-name">Block Build Bor x Ledger Lemur</span>
          <img src={images.lllogo} alt="Ledger Lemur" className="logo" />          
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;