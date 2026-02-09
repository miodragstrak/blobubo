import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Social icons */}
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/company/block-build-bor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/miodragstrak"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/Materializeee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Text */}
        <p className="footer-copy">
          © {new Date().getFullYear()} we3b. All rights reserved.
        </p>

        <p className="footer-sub">
          AI • Blockchain • Decentralized Systems
        </p>

      </div>
    </footer>
  );
};

export default Footer;
