import React from "react";
import "../styles/news-updates.css";

const updates = [
  {
    title: "Giveaway: Win a Free AI Consultation",
    source: "LinkedIn",
    date: "Dec 2025",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7408798397605875712",
  },
  {
    title: "Materilize Project",
    source: "LinkedIn",
    date: "Nov 2025",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7399523414840967169",
  },
];

const NewsUpdates = () => {
  return (
    <section className="news-updates">
      <h2>News & Updates</h2>

      <ul className="updates-list">
        {updates.map((item, index) => (
          <li key={index} className="update-item">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="update-title">{item.title}</span>
              <span className="update-meta">
                {item.source} · {item.date}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsUpdates;
