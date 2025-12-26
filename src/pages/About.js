import React from "react";
import "../styles/about.css";
import miodragImg from "../assets/team/miodrag.JPG";
import kristinaImg from "../assets/team/kristina.jpeg";
import SanjaImg from "../assets/team/sanja.jpg";
import AleksandraImg from "../assets/team/aleksandra.jpeg";
import NenadImg from "../assets/team/nenad.jpeg";

const teamMembers = [
  {
    name: "Miodrag Strak",
    role: "Director & Founder",
    bio: "Founder of Block Build Bor, focused on blockchain, AI, and applied R&D solutions.",
    image: miodragImg,
    linkedin: "https://www.linkedin.com/in/miodragstrak/",
  },
  {
    name: "Sanja Kostić Strak",
    role: "Business Development Lead",
    bio: "TBD",
    image: SanjaImg,
    linkedin: "https://ecobiblion.blogspot.com/",
  },
  {
    name: "Kristina Mosić",
    role: "Full-Stack Developer",
    bio: "Full-stack developer working on modern web and distributed systems.",
    image: kristinaImg,
    linkedin: "https://www.linkedin.com/in/kristina-mosi%C4%87-7166b0183/",
  },
  {
    name: "Aleksandra Petrović",
    role: ".NET Developer",
    bio: ".NET developer specializing in backend systems and cloud solutions.",
    image: AleksandraImg,
    linkedin: "https://www.linkedin.com/in/aleksandra-petrovic-4509711b7/",
  },
];

const externalMembers = [
  {
    name: "Nenad Dimitrovski",
    role: "IoT Expert",
    bio: "External expert specializing in IoT systems and hardware integrations.",
    image: NenadImg,
    linkedin: "https://www.linkedin.com/in/nenad-dimitrovski/",
  },
];

const About = () => {
  return (
    <main className="about-container">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          Block Build Bor is a technology studio focused on blockchain,
          AI-driven systems, and applied research. We collaborate with partners
          across Europe on production-grade and experimental solutions.
        </p>
      </section>

      <section className="about-section">
        <h2>Core Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-avatar">
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <div className="avatar-placeholder">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>

            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                View LinkedIn →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>

      <section className="about-section">
        <h2>External Experts</h2>

        <div className="team-grid">
          {externalMembers.map((member, index) => (
            <div key={index} className="team-card secondary">
              <div className="team-avatar">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="avatar-placeholder">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>

              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  View LinkedIn →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="about-contact">
        <h2>Contact</h2>

        <p><strong>Block Build DOO</strong></p>
        <p><strong>Ledger Lemur PR</strong></p>

        <address>
          3. oktobar<br />
          19210 Bor<br />
          Serbia
        </address>

        <p>
          Email:{" "}
          <a href="mailto:private.2925672709@vpn.diamonds">
            Send email
          </a>
        </p>

        <p className="contact-links">
          <a
            href="https://www.linkedin.com/company/blockbuild/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Block Build Bor on LinkedIn
          </a>
          {" · "}
          <a
            href="https://www.linkedin.com/company/lelemur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ledger Lemur on LinkedIn
          </a>
        </p>
      </section>
    </main>
  );
};

export default About;
