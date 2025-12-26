import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-brand">
          Block Build Bor × Ledger Lemur
        </p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/company/block-build-bor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/miodragstrak"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://x.com/Materializeee"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>

        <p className="footer-copy">
          © 2025 Block Build Bor · Ledger Lemur
        </p>
      </div>
    </footer>
  );
};

export default Footer;
