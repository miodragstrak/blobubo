import React from "react";
import "../styles/homepage.css";
import NewsUpdates from "../components/NewsUpdates";
import Awards from "../components/Awards";

const HomePage = () => {
  return (
    <main className="homepage">

      {/* HERO / INTRO */}
      <section className="hero">
        <h1>Building the future of AI, blockchain, and decentralized innovation</h1>
        <p className="hero-text">
          We3b is a technology-focused company specializing in AI-driven systems,
          blockchain infrastructure, and decentralized solutions. We help
          organizations design, build, and scale intelligent, secure, and
          future-proof digital products.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="services">
        <h2>What We Do</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>🧠 Artificial Intelligence</h3>
            <p>
              AI agents, intelligent assistants, and automation systems designed
              for real-world applications.
            </p>
          </div>

          <div className="service-card">
            <h3>🔗 Blockchain & Web3</h3>
            <p>
              Decentralized applications, smart contracts, tokenized systems,
              and DeSci infrastructure.
            </p>
          </div>

          <div className="service-card">
            <h3>⚙️ Product & Systems Engineering</h3>
            <p>
              End-to-end product development, API-first architectures, and
              scalable system design.
            </p>
          </div>
        </div>
      </section>

      <NewsUpdates />
      <Awards />

    </main>
  );
};

export default HomePage;
