import NetworkBackground from './NetworkBackground';

export default function Home() {
  return (
    <section id="home" className="hero">
      <NetworkBackground />
      <div className="hero-content" style={{ background: 'rgba(30, 58, 138, 0.3)', padding: '3rem', borderRadius: '1rem', width: '100%' }}>
        <h1 className="hero-name" style={{ color: '#b0b0b0' }}>SOUJANYA S BADAWADAGI</h1>
        <p className="hero-title">JAVA FULL STACK DEVELOPER</p>
        <p className="hero-bio">
          Trained @ TATA STRIVE Java Full Stack Developer | Git | GitHub | HTML | CSS | Bootstrap | Agile | MySQL | JDBC | Spring Boot | JavaScript | Web Development Fundamentals Internship @ IBM edunet UptoSkills
        </p>
        
        <div className="profile-photo">
          <img src="/passport_size.jpg" alt="Soujanya S Badawadagi" />
        </div>

        <a href="/Soujanya_Resume_JavaFullStack.pdf" download className="btn-download">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download CV
        </a>
      </div>
    </section>
  )
}
