export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">👨💻 PROFESSIONAL SUMMARY</h2>
        <p style={{ maxWidth: '100%', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'justify' }}>
          Entry-level Java Full Stack Developer with hands-on experience in building Spring Boot REST APIs 
          and MySQL-backed applications through academic projects and project-based training. Strong foundation 
          in Java, Hibernate/JPA, and RESTful design with practical exposure to API testing using Postman and 
          Git-based version control workflows.
        </p>

        <div className="education-section" style={{ marginTop: '3rem' }}>
          <h2 className="section-title">EDUCATION</h2>
          <div className="education-timeline">
            <div className="edu-card">
              <div className="edu-year">2021 - 2025</div>
              <div className="edu-content">
                <h3>Bachelor of Technology in Computer Science and Engineering</h3>
                <h4>Presidency University, Bangalore</h4>
                <div className="edu-details">
                  <span className="edu-badge">GPA: 7.2</span>
                  <span className="edu-badge">Graduated: 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
