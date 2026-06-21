import React from "react";
import "./Skills.css";
import DevTools from "./DevTools";

const frontendSkills = [
  { name: "React.js", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 82 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 75 },
  { name: "Tailwind CSS", level: 68 },
];

const backendSkills = [
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 84 },
  { name: "java", level: 78 },
  { name: "MongoDB", level: 80 },
  { name: "MySQL", level: 85 },
  { name: "PostgreSQL", level: 75 },
];

const aiSkills = [
  { name: "RAG ", level: 78 },
  { name: " LLMs", level: 80 },
       { name: " system Design", level: 70 },
     { name: " Generative AI", level: 80 },
 { name: " Prompt Engineering", level: 80 },
 
]; 

const SkillCard = ({ title, subtitle, skills, color }) => (
  <div className="skill-card">
    <h3>{title}</h3>
    <p>{subtitle}</p>

    {skills.map((skill, index) => (
      <div className="skill-item" key={index}>
        <div className="skill-info">
          <span>{skill.name}</span>
          <span>{skill.level}%</span>
        </div>

        <div className="progress">
          <div
            className="progress-fill"
            style={{
              width: `${skill.level}%`,
              background: color,
            }}
          ></div>
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section className="skills">
      <p className="tag">✦ EXPERTISE</p>

      <h2>
        Skills & <span>Technologies</span>
      </h2>

      <p className="subtitle">
        A comprehensive toolkit of modern technologies mastered through
        hands-on experience and continuous learning.
      </p>

      <div className="skills-grid">
        <SkillCard
          title="Frontend Development"
          subtitle="Building responsive and interactive interfaces"
          skills={frontendSkills}
          color="#39bdf8"
        />

        <SkillCard
          title="Backend Development"
          subtitle="Server-side development and database management"
          skills={backendSkills}
          color="#39f0c8"
        />

        <SkillCard
          title="AI Tools & others"
          subtitle="Machine learning and intelligent systems"
          skills={aiSkills}
          color="#a78bfa"
        />
      </div>
       <DevTools/>
    </section>

    
  );
};

export default Skills;