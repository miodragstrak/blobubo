import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
          <Link to="/we3b">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
