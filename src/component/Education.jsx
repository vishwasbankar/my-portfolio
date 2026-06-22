import "./Education.css";

function Education() {
  const educationData = [
    {
      degree: "B.E Computer Engineering",
      college: "ISBM College of Engineering, Pune",
      year: "2024 - 2027",
      description:
        "Focused on software development, data structures, algorithms, databases, and full-stack web development. Participated in hackathons and AI projects.",
    },
    {
      degree: "Diploma in Information Technology",
      college: "Sveri College of Engineering (Poly), Pandharpur",
      year: "2021- 2024",
      description:
        "Built a strong foundation in programming, networking, databases, and web technologies through academic and practical projects.",
    },
  ];

  return (
    <section className="education" id="education">
      <h2 className="education-title">Education</h2>

      <div className="education-container">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-icon">🎓</div>

            <div className="education-content">
              <h3>{item.degree}</h3>
              <h4>{item.college}</h4>
              <span>{item.year}</span>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;