export default function Projects() {
  const projects = [
    {
      name: 'VetPawTner – Veterinary Clinic Management System',
      description: 'Developed a complete clinic management system to streamline veterinary operations. Designed a normalized MySQL database schema and built RESTful APIs using Spring Boot with secure authentication and role-based access. Implemented Hibernate/JPA for ORM and created a responsive React front-end for managing appointments, pet records, treatments, and billing.',
      tech: 'Java | Spring Boot | React | MySQL',
      category: 'Full-Stack Web Application',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop'
    },
    {
      name: 'E-Commerce Website',
      description: 'Built a responsive e-commerce interface with dynamic product listings and interactive UI components. Implemented client-side logic for user interactions and smooth navigation. Deployed as a fully functional frontend application.',
      tech: 'HTML | CSS | JavaScript',
      category: 'Frontend Web Application',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop'
    },
    {
      name: 'Water & Electricity Tracking App',
      description: 'Built a mobile app to monitor daily water and electricity usage. Users can set consumption goals, track usage trends with interactive charts, and receive real-time alerts via Firebase Cloud Messaging. Implemented local storage with cloud synchronization for multi-device access.',
      tech: 'Java | Firebase',
      category: 'Android Application',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      name: 'Voice/Textual Bot Mobile App',
      description: 'Developed a conversational mobile app supporting both voice commands and text input. Implemented real-time response generation to deliver a seamless and engaging user experience.',
      tech: 'Voice & Text Interaction',
      category: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop'
    },
    {
      name: 'Quiz Portal',
      description: 'Created a real-time quiz platform with secure database integration for managing users, questions, and scores. Implemented leaderboard functionality, automated result calculation, and performance analytics including accuracy and time tracking. Structured using object-oriented principles for scalability and maintainability.',
      tech: 'Java Swing | MySQL',
      category: 'Desktop Application',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=500&fit=crop'
    },
    {
      name: 'Rear View Camera & Navigation System',
      description: 'Designed a vehicle assistance system integrating a camera module with Raspberry Pi for real-time video feed and navigation support. Implemented obstacle detection and distance measurement for enhanced safety.',
      tech: 'Raspberry Pi',
      category: 'Embedded System',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop'
    },
    {
      name: 'Tea Shop Web Application',
      description: 'Built an interactive web application with dynamic menu display, order processing, and inventory management. Utilized component-based architecture and two-way data binding for a responsive user experience.',
      tech: 'AngularJS / ReactJS',
      category: 'Frontend Web Application',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=500&fit=crop'
    },
    {
      name: 'Fun Game App',
      description: 'Created a browser-based interactive game featuring real-time animations, scoring logic, and responsive controls. Focused on engaging UI design and smooth gameplay mechanics.',
      tech: 'HTML | CSS | JavaScript',
      category: 'Frontend Web Application',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop'
    },
    {
      name: 'Comparative Analysis of OTT Platforms',
      description: 'Conducted data-driven analysis comparing OTT platforms based on user engagement, subscription growth, and content popularity. Visualized insights using analytical tools to identify performance trends and user preferences.',
      tech: 'Data Analysis & Visualization',
      category: 'Data Analysis',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">{project.tech}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}