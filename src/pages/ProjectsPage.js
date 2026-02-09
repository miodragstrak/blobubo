import React from "react";
import "../styles/projects.css";
import { images } from "../assets/images";

const projects = [
  {
    id: 1,
    title: "NelutAI",
    fullTitle: "Transforming the Tourist Experience with AI-Powered Chatbot",
    description: "NelutAI, the award-winning AI chatbot designed to revolutionize how tourists interact with their travel destinations.",
    image: images.project1,
    link: "https://youtu.be/RnwYnRu6GEc?si=bBBCBxuLgK1n1sxT",
  },
  {
    id: 2,
    title: "StayDirect AI",
    fullTitle: "Innovating the PropTech Industry with AI-Driven Marketing Tools",
    description: "Property rental platform designed to streamline direct bookings for property owners and guests.",
    image: images.project2,
    link: "https://staydirect.ai/",
  },
  {
    id: 3,
    title: "VSEA Token",
    fullTitle: "Launching VSEA - Utility token of the SEA Nexus",
    description: "VSEA is the utility token of the SEA Nexus, used to power the network, reward accurate data, and build value. It’s an ASA - a token on the Algorand blockchain.",
    image: images.project3,
    link: "https://sea.earth/",
  },
  {
    id: 4,
    title: "TeslaWatt ERC20 Token",
    fullTitle: "TeslaWatt (TSW) ERC20 Token - New Payment Platform",
    description: "The company has created an ERC20 token and needed a payment process to be implemented on its website.",
    image: images.project4,
    link: "https://etherscan.io/token/0x6b87999be87358065bbde41e8a0fe0b7b1cd2514",

  },
  {
    id: 5,
    title: "RTI Blockchain",
    fullTitle: "RTI Blockchain",
    description: "RTI Blockchain makes the registration of load carrier transactions as simple and automated as internet banking.",
    image: images.project5,
    link: "https://www.rtiblockchain.com/",
  },
  {
    id: 6,
    title: "Vidua",
    fullTitle: "Vidua - Identification, Electronic Signatures",
    description: "The Dutch government has set up this infrastructure in accordance with Dutch and European legislation.",
    image: images.project6,
    link: "https://vidua.nl/",
  },
  {
    id: 7,
    title: "Dutch Soil-passport",
    fullTitle: "The first Proof of Concept for the Dutch Soil-passport",
    description: "This passport will be used to keep track of important information, such as who has dug up how much soil, by whom it was transported, and what the characteristics of the soil are.",
    image: images.project7,
    link: "https://www.magazinesrijkswaterstaat.nl/strategischeverkenningen/2022/01/workshop-5",
  },
  {
    id: 8,
    title: "PrimeLab aka NEAR Apps",
    fullTitle: "Dapp platform on the NEAR blockchain",
    description: "PrimeLab is a Dapp platform on the NEAR blockchain that allows individuals and businesses to easily join the NEAR ecosystem by providing them with easy-to-use tools.",
    image: images.project8,
    link: "https://dappradar.com/blog/will-primelab-on-near-redefine-web3",
  },
  {
    id: 9,
    title: "DeFi 4 DeSci Project",
    fullTitle: "DeFi solution for decentralized science (DeSci) using OriginTrail’s DKG",
    description: "Block Build’s solution DeFi 4 DeSci was awarded 🥉 3rd place in the competitive OriginTrail track at ETH Belgrade 2025!",
    image: images.project9,
    link: "https://www.linkedin.com/posts/block-build-bor_defi-desci-web3-activity-7340803611259482113-rZCx?utm_source=share&utm_medium=member_desktop&rcm=ACoAABGvRI0BLPzmfWjHFhlI5rnAMDCxvzNlu24",
  },
  {
    id: 10,
    title: "Superteam Balkan DeSci Hub",
    fullTitle: "Superteam DeSci Challenge",
    description: "The Superteam DeSci aims to encourage scientific discussion on decentralization and blockchain technology, specifically on Solana.",
    image: images.project10,
    link: "hhttps://superteam-desci-hub.github.io/open-science/",
  },

  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
            </div>
            <div className="card-back">
              <h3>{project.fullTitle}</h3>
              <br/>
              <p>{project.description}</p>
              <br/>
              <p><a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;