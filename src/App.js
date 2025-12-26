import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Partners from "./pages/Partners";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/we3b" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    <Footer />
    </>
  );
}

export default App;