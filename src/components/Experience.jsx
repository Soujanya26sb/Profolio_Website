export default function Experience() {
  const petImages = Array.from({ length: 25 }, (_, i) => new URL(`../assets/pet${i + 1}.png`, import.meta.url).href).slice(1);
  const ibmImages = Array.from({ length: 7 }, (_, i) => new URL(`../assets/IBM${i + 1}.png`, import.meta.url).href);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">PROJECT-BASED TRAINING & INTERNSHIP EXPERIENCE</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">May 2025 - Sep 2025</p>
              <h3>Junior Full Stack Java Developer</h3>
              <h4>Tata Strive</h4>
              <p>
                Cleared role-based assessment with overall Grade A. Developed 10+ backend REST APIs using Spring Boot for user and application data. Implemented CRUD operations and database persistence using Hibernate/JPA with MySQL.
              </p>
              <div className="image-scroll-container">
                <div className="image-scroll">
                  {petImages.concat(petImages).map((img, idx) => (
                    <img key={idx} src={img} alt={`Pet ${idx + 1}`} className="scroll-image" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">Aug 2025 - Sep 2025</p>
              <h3>Front End Web Development Intern</h3>
              <h4>Edunet Foundation (AICTE) | IBM SkillsBuild</h4>
              <p>
                Developed responsive web pages using HTML5, CSS3, and JavaScript. Built UI layouts and components using Bootstrap. Implemented forms and basic client-side validation.
              </p>
              <div className="image-scroll-container">
                <div className="image-scroll">
                  {ibmImages.concat(ibmImages).map((img, idx) => (
                    <img key={idx} src={img} alt={`IBM ${idx + 1}`} className="scroll-image" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
