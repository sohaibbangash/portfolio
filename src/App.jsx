import './App.css'

const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js 14', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Tailwind', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Odoo ERP/CRM', 'Python', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Figma', 'npm', 'Linux CLI', 'SQL'],
  },
]

const projects = [
  {
    name: 'Right Innovations Website',
    stack: 'Next.js 14, React, Tailwind CSS, Node.js',
    link: 'https://right-innovations-lovat.vercel.app',
    text: 'Full company website rebuilt from WordPress to Next.js App Router with an admin dashboard, reusable components, SSR pages, and Vercel deployment.',
  },
  {
    name: 'Odoo Modules',
    stack: 'Odoo 16/17, Python, PostgreSQL',
    text: 'Custom modules for real estate and import/trading workflows, including listings, lead management, automated currency rates, landed costs, and tender management.',
  },
  {
    name: 'SysnovaSolutions',
    stack: 'React.js, Vite, Node.js',
    link: 'https://sysnovasolutions.com',
    text: 'Responsive frontend with SPA routing, lazy loading, polished UI sections, and production deployment.',
  },
]

function App() {
  return (
    <main className="portfolio-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Muhammad Sohaib Bangash portfolio home">
          MSB
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy reveal">
          <p className="eyebrow">Full Stack Developer · Software Engineer</p>
          <h1>Muhammad Sohaib Bangash</h1>
          <p className="hero-text">
            I build production-ready web apps, Next.js migrations, admin panels, and custom
            ERP/CRM modules for B2B teams.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="mailto:khansohaib1411@gmail.com">
              Hire Me
            </a>
            <a className="secondary-btn" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-card reveal delay-1" aria-label="Portfolio highlights">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="profile-mark">SB</div>
          <div className="card-content">
            <span>Currently at</span>
            <strong>Right Innovations (RIPL)</strong>
            <p>Karachi, Pakistan · On-site</p>
          </div>
        </div>
      </section>

      <section className="split-section" id="work">
        <div className="section-heading reveal">
          <p className="eyebrow">Experience</p>
          <h2>Building scalable products for real business workflows.</h2>
        </div>
        <div className="timeline reveal delay-1">
          <article className="timeline-item">
            <span className="time">Nov 2025 - Present</span>
            <h3>Full Stack Developer · Right Innovations (RIPL)</h3>
            <p>
              Migrated rightinnovations.com from WordPress to Next.js 14 App Router, covering 24+
              service pages, SSR, reusable components, and a Vercel CI/CD pipeline.
            </p>
          </article>
          <article className="timeline-item">
            <span className="time">Production Systems</span>
            <h3>Admin Panels and ERP Modules</h3>
            <p>
              Architected blog CRUD, contact tracking, CV management, an interactive visual page
              builder, and Odoo modules for trading and real estate clients.
            </p>
          </article>
          <article className="timeline-item">
            <span className="time">Deployment</span>
            <h3>Performance and Release Stability</h3>
            <p>
              Resolved Git and deployment issues, optimized Next.js image LCP, and supported stable
              production releases.
            </p>
          </article>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading centered reveal">
          <p className="eyebrow">Selected Projects</p>
          <h2>Practical builds with clean interfaces and useful systems behind them.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className="project-card reveal"
              style={{ '--delay': `${index * 120}ms` }}
              key={project.name}
            >
              <span className="project-index">0{index + 1}</span>
              <h3>{project.name}</h3>
              <p className="stack">{project.stack}</p>
              <p>{project.text}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  Visit Project
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading reveal">
          <p className="eyebrow">Technical Skills</p>
          <h2>Comfortable across frontend, backend, ERP, and deployment work.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article
              className="skill-panel reveal"
              style={{ '--delay': `${index * 100}ms` }}
              key={group.title}
            >
              <h3>{group.title}</h3>
              <div className="chip-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section">
        <div className="education-card reveal">
          <p className="eyebrow">Education</p>
          <h2>B.S. Software Engineering</h2>
          <p>Virtual University of Pakistan · Mar 2024 - Mar 2028</p>
          <p>MERN Stack Development · Bano Qabil 5.0 - Batch 11 · 2024 - Present</p>
        </div>
        <div className="education-card reveal delay-1">
          <p className="eyebrow">Certifications</p>
          <h2>Web and Design Training</h2>
          <p>Web Development - Bano Qabil · Completed</p>
          <p>Graphic Designing - Jawan Pakistan · 2022</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something reliable, fast, and easy to manage.</h2>
        </div>
        <div className="contact-links reveal delay-1">
          <a href="tel:+923353929170">+92 335 392 9170</a>
          <a href="mailto:khansohaib1411@gmail.com">khansohaib1411@gmail.com</a>
          <a href="https://github.com/sohaibbangash" target="_blank" rel="noreferrer">
            github.com/sohaibbangash
          </a>
          <a href="https://www.linkedin.com/in/sohaib-khan1411" target="_blank" rel="noreferrer">
            LinkedIn · sohaib-khan1411
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
