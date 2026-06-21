import React from "react";
import "./HeroSection.css";
import profileImg from "../assets/vishu.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        
        <h1>
          Hello, I am <br />
          <span>Vishwas Bankar</span>
        </h1>

        <h3>Full Stack Developer (MERN)</h3>

        <p className="description">
Full Stack Developer specializing in React.js, Node.js, and AI-driven applications.
Experienced in building scalable web solutions using modern technologies and databases.
Dedicated to creating impactful software with clean code and innovative thinking.
        </p>

       <div className="buttons">
  <button
    className="btn-primary"
    onClick={() =>
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    Get In Touch
  </button>

  <a
    href="/DOC-20260523-WA0009.pdf"
    download
    className="btn-secondary"
  >
    Download Resume
  </a>
</div>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Vishwas Bankar" />
      </div>
    </section>
  );
};

export default HeroSection;