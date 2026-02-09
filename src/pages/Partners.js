import React from "react";
import "../styles/partners.css";
import { images } from "../assets/images";

const partners = [
  { id: 1, name: "Ledger Leopard", logo: images.partner1},
  { id: 2, name: "Stay Direct", logo: images.partner2},
  { id: 3, name: "UNDP", logo: images.partner3},
  { id: 4, name: "ReSPA", logo: images.partner4},
  { id: 5, name: "Superteam Balkan", logo: images.partner5},
  { id: 6, name: "Nenadsky", logo: images.partner6},
  { id: 7, name: "Smart Connection", logo: images.partner7},
  { id: 8, name: "Prime Lab", logo: images.partner8},
  { id: 9, name: "NBG", logo: images.partner9},
  { id: 10, name: "Z.E.N.", logo: images.partner10},
  { id: 11, name: "Kyramarios", logo: images.partner11},
  { id: 12, name: "Stay by Rafa", logo: images.partner12},
  
];

const Partners = () => {
  return (
    <div className="partners-container">
      {partners.map((partner) => (
        <div key={partner.id} className="partner-card">
          <img src={partner.logo} alt={partner.name} className="partner-logo" />
        </div>
      ))}
    </div>
  );
};

export default Partners;