import React from "react";
import "../styles/awards.css";
import rodc2024 from "../assets/rodc2024.jpg";
import ethBelgrade2025 from "../assets/eth-belgrade-2025.jpeg";

const awards = [
  {
    title: "1st Place - RODC 2024",
    subtitle: "BlockBuildBor · Serbia",
    description: "First place at RODC 2024 for the BlockBuildBor solution.",
    image: rodc2024,
  },
  {
    title: "3rd Place - ETH Belgrade 2025",
    subtitle: "OriginTrail Track",
    description:
      "3rd place in the competitive OriginTrail track at ETH Belgrade 2025.",
    image: ethBelgrade2025,
  },
];

const Awards = () => {
  return (
    <section className="awards">
      <h2>Awards & Recognition</h2>

      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <img
              src={award.image}
              alt={award.title}
              className="award-image"
            />
            <h3>{award.title}</h3>
            <p className="award-subtitle">{award.subtitle}</p>
            <p className="award-description">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
