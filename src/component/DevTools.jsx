import React from "react";
import { FaGitAlt, FaGithub, FaTools } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoTriangleSharp } from "react-icons/io5";

import "./DevTools.css";

const tools = [
  { name: "Git", icon: <FaGitAlt />, level: 90 },
  { name: "GitHub", icon: <FaGithub />, level: 93 },
  { name: "VS Code", icon: <VscVscode />, level: 95 },
  { name: "Vercel", icon: <IoTriangleSharp />, level: 85 },
  { name: "Netlify", icon: <SiNetlify />, level: 80 },
];

const DevTools = () => {
  return (
    <div className="devtools-card">
      <div className="card-header">
        <div className="header-icon">
          <FaTools />
        </div>

        <div>
          <h2>Dev Tools & Platforms</h2>
          <p>Version control and deployment platforms</p>
        </div>
      </div>

      <div className="divider"></div>

      {tools.map((tool, index) => (
        <div className="skill-item" key={index}>
          <div className="skill-info">
            <div className="skill-icon">{tool.icon}</div>
            <span>{tool.name}</span>
          </div>

          <div className="skill-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${tool.level}%` }}
              />
            </div>
            <span className="percent">{tool.level}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DevTools;