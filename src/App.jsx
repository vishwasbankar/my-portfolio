import "./App.css";
import Navbar from "./component/Navbar";

import HeroSection from "./component/HeroSection";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Contact from "./component/Contact";
import A from "./component/a";
import A2 from "./component/A2";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <div className="abc">
          <A />
          <A2 />
        </div>
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;