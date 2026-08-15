import { useEffect, useState } from "react";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, Phone,
  Menu, X, Code2, Database, Server, Layers3, GraduationCap,
  ExternalLink, MapPin, Sparkles, Briefcase, CalendarDays, Building2, FileCheck2
} from "lucide-react";

const profile = {
  name: "Balaji Ganugapichi",
  role: "Java Full Stack Developer",
  email: "balajiganugapichi@gmail.com",
  phone: "+91 6301678851",
  github: "https://github.com/Balu13765",
  linkedin: "https://www.linkedin.com/in/ganugapichi-balaji-053992251/",
};

const skills = [
  ["Java", "Backend & OOP"],
  ["Spring Boot", "REST APIs"],
  ["Hibernate / JPA", "Persistence"],
  ["MySQL", "Database"],
  ["JavaScript", "Frontend"],
  ["React", "UI Development"],
  ["HTML & CSS", "Responsive UI"],
  ["JDBC", "Database Connectivity"],
  ["DSA", "Problem Solving"],
  ["Git & GitHub", "Version Control"],
];

const projects = [
  {
    title: "AI-Based Job Portal with Resume Matching",
    featured: true,
    description:
      "Full-stack job portal that uses NLP-based resume parsing, keyword extraction and candidate-job matching to rank relevant opportunities and identify skill gaps.",
    tags: ["Java", "Spring Boot", "React.js", "SQL", "NLP", "REST APIs"],
    github: "https://github.com/Balu13765",
  },
  {
    title: "Smart Task Management & Collaboration System",
    description:
      "Full-stack collaboration platform for managing team tasks, deadlines and progress with secure authentication, role-based access and RESTful APIs.",
    tags: ["Java", "Spring Boot", "React.js", "MySQL", "JWT", "REST APIs", "AWS"],
    github: "https://github.com/Balu13765",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Internship", "Contact"];

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span>B</span> Balaji
        </a>

        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Resume <ExternalLink size={14} />
          </a>
          <a className="nav-cta" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> Open to opportunities</div>
          <p className="hello">Hello, I'm</p>
          <h1>Balaji <span>Ganugapichi</span></h1>
          <h2>{profile.role}</h2>
          <p className="hero-text">
            MCA graduate focused on building reliable backend systems, responsive
            web applications and practical full-stack solutions using Java and modern web technologies.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View Projects <ArrowUpRight size={18} /></a>
            <a className="btn secondary" href="/resume.pdf" target="_blank" rel="noreferrer"><ExternalLink size={18} /> View Resume</a>
          </div>
          <div className="quick-links">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn</a>
            <a href={`mailto:${profile.email}`}><Mail size={19} /> Email</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="window-bar">
              <span /><span /><span />
              <small>Balaji.java</small>
            </div>
            <pre>{`class Balaji {

  String role =
    "Java Full Stack Developer";

  String[] stack = {
    "Java", "Spring Boot",
    "SQL", "React"
  };

  boolean readyToBuild() {
    return true;
  }
}`}</pre>
          </div>
          <div className="floating-badge">
            <Code2 size={18} />
            <div><strong>Java</strong><span>Primary Stack</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading kicker="ABOUT ME" title="Building with purpose, learning by doing." />
        <div className="about-grid">
          <div className="about-photo">
            <img className="profile-photo" src="/images/balaji-profile.jpeg" alt="Balaji Ganugapichi" />
          </div>
          <div className="about-content">
            <p>
              I'm Balaji Ganugapichi, an MCA graduate focused on starting my career
              as a software developer. My strongest interest is Java full-stack development,
              with hands-on learning across Java, Spring Boot, SQL, frontend technologies and DSA.
            </p>
            <p>
              I enjoy turning requirements into working applications, debugging problems,
              improving code and learning technologies that make software more reliable and useful.
            </p>
            <div className="info-grid">
              <div><GraduationCap /><span><b>MCA Graduate</b><small>2026</small></span></div>
              <div><MapPin /><span><b>Based in India</b><small>Open to opportunities</small></span></div>
              <div><Code2 /><span><b>Primary Focus</b><small>Java Full Stack</small></span></div>
              <div><Github /><span><b>Open Source</b><small>GitHub projects</small></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section muted">
      <div className="container">
        <SectionHeading kicker="TECHNICAL SKILLS" title="Tools I use to build." />
        <div className="skill-grid">
          {skills.map(([name, detail]) => (
            <div className="skill-card" key={name}>
              <div className="skill-icon">
                {name === "MySQL" || name === "JDBC" ? <Database /> :
                 name === "Spring Boot" || name === "Hibernate / JPA" ? <Server /> :
                 name === "React" || name === "JavaScript" ? <Layers3 /> : <Code2 />}
              </div>
              <div><h3>{name}</h3><p>{detail}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading kicker="FEATURED WORK" title="Projects that show what I can build." />
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
              <div className="project-top">
                <span className="project-number">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="Open GitHub">
                  <Github size={20} />
                </a>
              </div>
              {project.featured && <span className="featured-label">Featured Project</span>}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                View on GitHub <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Internship() {
  return (
    <section id="internship" className="section muted">
      <div className="container">
        <SectionHeading kicker="INTERNSHIP EXPERIENCE" title="Hands-on experience beyond the classroom." />
        <article className="internship-card">
          <div className="internship-icon"><Briefcase size={25} /></div>
          <div className="internship-main">
            <div className="internship-header">
              <div>
                <span className="section-kicker">PYTHON FULL STACK INTERN</span>
                <h3>Employment Express</h3>
                <p className="internship-location"><Building2 size={15} /> Madanapalle, Andhra Pradesh</p>
              </div>
              <span className="internship-date"><CalendarDays size={15} /> Oct–Nov 2022</span>
            </div>
            <div className="internship-content">
              <p>
                Completed a Python Full Stack internship focused on practical web application development,
                working across the frontend, backend and database layers of a full-stack application.
              </p>
              <ul>
                <li>Contributed to a full-stack web application using <strong>Python, React.js and MySQL</strong>, delivering functional application modules.</li>
                <li>Implemented <strong>REST APIs</strong> and dynamic user interfaces to connect application components and improve usability.</li>
                <li>Optimized frontend implementation and application flow, contributing to a reported <strong>20% reduction in page load time</strong>.</li>
              </ul>
              <div className="tags internship-tags">
                {['Python', 'React.js', 'MySQL', 'REST APIs', 'Full Stack Development'].map(tag => <span key={tag}>{tag}</span>)}
              </div>

              <div className="certificate-panel">
                <div className="certificate-preview">
                  <img src="/images/internship-certificate.jpeg" alt="Employment Express Full Stack Python Virtual Internship completion certificate" />
                </div>
                <div className="certificate-info">
                  <span className="section-kicker">VERIFICATION</span>
                  <h4>Internship Completion Certificate</h4>
                  <p>6-week Full Stack Python Virtual Internship · Employment Express · Oct–Nov 2022</p>
                  <div className="certificate-meta">
                    <span><FileCheck2 size={15} /> Certificate ID: EMPIFS003094</span>
                  </div>
                  <a className="certificate-button" href="/images/internship-certificate.jpeg" target="_blank" rel="noreferrer">
                    View Certificate <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section muted">
      <div className="container narrow">
        <SectionHeading kicker="EDUCATION" title="Academic foundation." />
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div><span className="date">2026</span><h3>Master of Computer Applications (MCA)</h3><p>KMM Institute of Post-Graduation</p></div>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div><span className="date">2023</span><h3>Bachelor of Computer Applications (BCA)</h3><p>Sri Gnanambika Degree College</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-card">
        <div>
          <span className="section-kicker">CONTACT</span>
          <h2>Let's build something useful.</h2>
          <p>I'm currently looking for software development opportunities where I can contribute, learn and grow.</p>
        </div>
        <div className="contact-actions">
          <a className="btn primary" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <a className="contact-line" href={`tel:${profile.phone}`}><Phone size={18} /> {profile.phone}</a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title }) {
  return <div className="section-heading"><span className="section-kicker">{kicker}</span><h2>{title}</h2></div>;
}

export default function App() {
  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Education />
        <Contact />
      </main>
      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Balaji Ganugapichi</span>
          <div>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
            <a href={`mailto:${profile.email}`}><Mail size={18} /></a>
          </div>
        </div>
      </footer>
      <a className="to-top" href="#home" aria-label="Back to top"><ArrowUpRight size={19} /></a>
    </>
  );
}