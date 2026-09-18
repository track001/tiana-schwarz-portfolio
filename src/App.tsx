import { useState } from "react";
import "./styles.css";

/* =========================================================
   ASSET PATH

   CODE SANDBOX:
   const BASE_URL = "";

   GITHUB PAGES:
   const BASE_URL = "/tiana-schwarz-portfolio";

   Uncomment ONLY the environment you are currently using.
========================================================= */

// CodeSandbox
const BASE_URL = "";

// GitHub Pages
// const BASE_URL = "/tiana-schwarz-portfolio";

const assetPath = (path: string) => `${BASE_URL}${path}`;

type Project = {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  images: string[];
  live?: string;
  github?: string;
};

type Resume = {
  number: string;
  title: string;
  label: string;
  description: string;
  file: string;
};

type TimelineItem = {
  id: string;
  date: string;
  organization: string;
  title: string;
  location?: string;
  summary: string;
  details?: string[];
  tags: string[];
  type: "work" | "certification" | "education";
};

/* =========================================================
   PROJECTS
========================================================= */

const projects: Project[] = [
  {
    number: "01",
    category: "COMPETITION OPERATIONS",
    title: "Battle of Brawn",
    subtitle: "Competition Operations System",
    description:
      "React and TypeScript operations hub for Springs Climbing Center's Battle of Brawn competition. Includes finals projection, competition timing, scoring workflows, raffles, staff SOPs, and event operations.",
    stack: ["React", "TypeScript", "PowerShell", "Python", "GitHub Pages"],
    images: [
      assetPath("/images/brawn-preview1.png"),
      assetPath("/images/brawn-preview2.png"),
      assetPath("/images/brawn-preview3.png"),
      assetPath("/images/brawn-preview4.png"),
    ],
    live: "https://track001.github.io/Battle-of-Brawn-2025-Competition-System/",
    github:
      "https://github.com/track001/Battle-of-Brawn-2025-Competition-System",
  },
  {
    number: "02",
    category: "DIGITAL ARCHIVE",
    title: "Bubby's Wayback Machine",
    subtitle: "GameRant Article Archive",
    description:
      "A client-focused digital archive developed to preserve and organize 282 published GameRant articles, featuring searchable content, filtering, archived source copies, HTML downloads, and print-ready exports.",
    stack: [
      "React",
      "TypeScript",
      "Cloudflare R2",
      "GitHub Pages",
      "HTML",
      "CSS",
    ],
    images: [
      assetPath("/images/bubby-wayback-preview1.png"),
      assetPath("/images/bubby-wayback-preview2.png"),
      assetPath("/images/bubby-wayback-preview3.png"),
      assetPath("/images/bubby-wayback-preview4.png"),
    ],
    live: "https://track001.github.io/Bubbys-Wayback-Machine/",
    github: "https://github.com/track001/Bubbys-Wayback-Machine",
  },
  {
    number: "03",
    category: "EMBEDDED SYSTEMS / SPACE RESEARCH",
    title: "A.R.E.S.",
    subtitle: "Off-Planet IMU Wearable Research",
    description:
      "Undergraduate space research exploring wearable inertial measurement units to capture human movement and evaluate skeletal loading conditions during off-planet operations. Built and tested a multi-sensor Arduino system for collecting acceleration and angular velocity data, with MATLAB used for motion analysis and modeling.",
    stack: [
      "Arduino",
      "C++",
      "MATLAB",
      "IMU Sensors",
      "I2C",
      "Embedded Systems",
    ],
    images: [
      assetPath("/images/ares-preview1.png"),
      assetPath("/images/ares-preview2.png"),
      assetPath("/images/ares-preview3.png"),
    ],
  },
];

/* =========================================================
   PROJECT CAROUSEL
========================================================= */

function ProjectCarousel({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? project.images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((current) =>
      current === project.images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="project-image-wrap">
      <img
        src={project.images[currentImage]}
        alt={`${project.title} preview ${currentImage + 1}`}
        className="project-image"
      />

      {project.images.length > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow-left"
            type="button"
            onClick={previousImage}
            aria-label={`Previous ${project.title} preview`}
          >
            ‹
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            type="button"
            onClick={nextImage}
            aria-label={`Next ${project.title} preview`}
          >
            ›
          </button>

          <div className="carousel-dots">
            {project.images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`carousel-dot ${
                  index === currentImage ? "active" : ""
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`View ${project.title} preview ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-count">
            {currentImage + 1} / {project.images.length}
          </div>
        </>
      )}

      <div className="project-overlay">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            View live ↗
          </a>
        )}

        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   RESUMES
========================================================= */

const resumes: Resume[] = [
  {
    number: "01",
    title: "Technical",
    label: "CYBER / ENGINEERING",
    description:
      "Cybersecurity, mission analysis, cyber test and evaluation, software, automation, and technical documentation.",
    file: assetPath("/resumes/Tiana-Schwarz-Technical-Resume.pdf"),
  },
  {
    number: "02",
    title: "Routesetting",
    label: "CLIMBING / COMPETITION",
    description:
      "Routesetting, coaching, competition operations, climbing leadership, certifications, and community work.",
    file: assetPath("/resumes/Tiana-Schwarz-Routesetting-Resume.pdf"),
  },
];

/* =========================================================
   TIMELINE
========================================================= */

const timeline: TimelineItem[] = [
  {
    id: "pts",
    date: "AUG 2026 — PRESENT",
    organization: "PACIFIC TECHNOLOGIES & SOLUTIONS",
    title: "MRT-C Mission Analyst",
    location: "Colorado Springs, CO",
    summary:
      "Cyber mission analysis supporting U.S. Space Force mission assurance, cyber terrain, and risk assessments.",
    details: [
      "Analyze mission-relevant cyber terrain, system dependencies, vulnerabilities, and Key Terrain–Cyber supporting USSF mission systems.",
      "Support mission decomposition through Mission Thread Engineering (MEngT) and develop technical analysis supporting Operational Risk Assessments (ORAs), Asset Defense Plans (ADPs), and MRT-C mission data.",
      "Support cross-team Quality Assurance (QA) reviews to improve the consistency, technical accuracy, and documentation quality of mission deliverables.",
    ],
    tags: [
      "TS/SCI Clearance",
      "Mission Analysis",
      "ORA / ADP",
      "MADSS",
      "Mission Dependencies",
    ],
    type: "work",
  },
  {
    id: "l1",
    date: "JUL 2026",
    organization: "USA CLIMBING",
    title: "Level 1 Routesetter",
    summary: "Earned USA Climbing Level 1 Routesetter certification.",
    tags: ["Competition Routesetting", "Certification"],
    type: "certification",
  },
  {
    id: "nlogic",
    date: "2024 — 2026",
    organization: "NLOGIC / KBR",
    title: "Sustainment Cyber Test & Evaluation Engineer",
    location: "Colorado Springs, CO",
    summary:
      "Cybersecurity test and evaluation supporting DoD MILSATCOM systems.",
    details: [
      "Supported cybersecurity testing, system verification, technical documentation, and test execution.",
      "Built repeatable technical procedures and worked in mission-focused test environments.",
    ],
    tags: [
      "SECRET Clearance",
      "Powershell Scripts",
      "Sustainment",
      "STIGS",
      "ACAS",
    ],
    type: "work",
  },
  {
    id: "security-plus",
    date: "MAY 2024",
    organization: "COMPTIA",
    title: "Security+",
    summary: "Earned CompTIA Security+ certification.",
    tags: ["DoD IAT Level 2"],
    type: "certification",
  },
  {
    id: "uccs",
    date: "2023",
    organization: "UNIVERSITY OF COLORADO COLORADO SPRINGS",
    title: "B.S. Computer Science",
    location: "Colorado Springs, CO",
    summary: "Graduated cum laude from the University of Colorado.",
    tags: ["Computer Science", "Cum Laude"],
    type: "education",
  },
];

export default function App() {
  const [openTimelineItem, setOpenTimelineItem] = useState<string | null>(null);

  const toggleTimelineItem = (id: string) => {
    setOpenTimelineItem((current) => (current === id ? null : id));
  };

  return (
    <div className="site">
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="space-background" aria-hidden="true">
        <div className="near-star-glow" />

        <span className="star star-1">✦</span>
        <span className="star star-2">•</span>
        <span className="star star-3">✦</span>
        <span className="star star-4">•</span>
        <span className="star star-5">✧</span>
        <span className="star star-6">•</span>
        <span className="star star-7">✦</span>
        <span className="star star-8">•</span>
        <span className="star star-9">✧</span>
        <span className="star star-10">•</span>
        <span className="star star-11">✦</span>
        <span className="star star-12">•</span>
        <span className="star star-13">✧</span>
        <span className="star star-14">•</span>
        <span className="star star-15">✦</span>
        <span className="star star-16">•</span>
        <span className="star star-17">•</span>
        <span className="star star-18">·</span>
        <span className="star star-19">✦</span>
        <span className="star star-20">•</span>
        <span className="star star-21">·</span>
        <span className="star star-22">✧</span>
        <span className="star star-23">•</span>
        <span className="star star-24">·</span>
        <span className="star star-25">✦</span>
        <span className="star star-26">•</span>
        <span className="star star-27">·</span>
        <span className="star star-28">✧</span>
        <span className="star star-29">•</span>
        <span className="star star-30">·</span>
        <span className="star star-31">✦</span>
        <span className="star star-32">•</span>
        <span className="star star-33">·</span>
        <span className="star star-34">✧</span>
        <span className="star star-35">•</span>
        <span className="star star-36">·</span>

        <div className="satellite satellite-1">
          <span className="satellite-panel" />
          <span className="satellite-body">◇</span>
          <span className="satellite-panel" />
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="nav">
        <div className="nav-identity">
          <a className="brand" href="#top">
            Tiana Schwarz
          </a>

          <div className="nav-contact">
            <a href="mailto:schwarztiana@gmail.com">schwarztiana@gmail.com</a>

            <span>|</span>

            <a href="tel:+17207175523">(720) 717-5523</a>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#work">Projects</a>
          <span>|</span>

          <a href="#experience">Experience</a>
          <span>|</span>

          <a href="#about">About</a>
          <span>|</span>

          <a href="#resumes">Résumés</a>
        </nav>
      </header>

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow">COMPUTER SCIENCE • CYBER • CLIMBING</div>

            <h1>
              Tiana Schwarz
              <br />
              <span>Colorado Springs, CO</span>
            </h1>

            <p className="hero-description">
              Computer science graduate working in cyber mission analysis with a
              background in cybersecurity test and evaluation, software,
              automation, and a love for technical documentation.
            </p>

            <p className="hero-description secondary">
              Outside of my 9-5 - I routeset, coach climbers, and build systems
              for the people and communities I care about.
            </p>

            <div className="hero-links">
              <a
                href="https://github.com/track001"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/tschwarz001/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src={assetPath("/images/ti-portrait.png")}
              alt="Tiana Schwarz"
            />

            <div className="hero-status">
              <span className="status-dot" />
              Colorado Springs, CO
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <div className="section-label">PROJECTS</div>

              <p>
                A mix of software, research, competition systems, archives, and
                smaller projects I've worked on.
              </p>
            </div>

            <span>
              {projects.length.toString().padStart(2, "0")} PROJECT
              {projects.length !== 1 ? "S" : ""}
            </span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectCarousel project={project} />

                <div className="project-body">
                  <div className="project-meta">
                    <span>
                      {project.number} / {project.category}
                    </span>

                    <span>FEATURED</span>
                  </div>

                  <h2>{project.title}</h2>
                  <h3>{project.subtitle}</h3>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            <article className="project-card placeholder">
              <div className="placeholder-inner">
                <span>04 / NEXT</span>

                <h2>Adding More Projects Soon...</h2>

                <p>
                  Additional projects will be added as I finalize documentation,
                  images, and live hosting.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE / TIMELINE
        ===================================================== */}

        <section className="timeline-section" id="experience">
          <div className="timeline-heading">
            <div className="section-label">TIMELINE</div>

            <h2>Experience, education & certifications.</h2>

            <p>
              A timeline of my work, education, and other pursuits since
              graduating in 2023.
            </p>
          </div>

          <div className="timeline-list">
            {timeline.map((item) => {
              const isOpen = openTimelineItem === item.id;
              const canExpand = item.details && item.details.length > 0;

              return (
                <article
                  className={`timeline-item ${isOpen ? "open" : ""}`}
                  key={item.id}
                >
                  <div className="timeline-date">{item.date}</div>

                  <div className="timeline-content">
                    <div className="timeline-organization">
                      {item.organization}
                    </div>

                    <h3>{item.title}</h3>

                    <p className="timeline-summary">{item.summary}</p>

                    {item.location && (
                      <div className="timeline-location">{item.location}</div>
                    )}

                    {isOpen && item.details && (
                      <div className="timeline-details">
                        <ul>
                          {item.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="timeline-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="timeline-action">
                    {canExpand ? (
                      <button
                        type="button"
                        onClick={() => toggleTimelineItem(item.id)}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? "Hide details −" : "View details +"}
                      </button>
                    ) : (
                      <span className={`timeline-type ${item.type}`}>
                        {item.type}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            RESUMES
        ===================================================== */}

        <section className="coming-section resume-section" id="resumes">
          <div className="section-heading">
            <div>
              <div className="section-label">RÉSUMÉS</div>

              <h2>
                I currently maintain both a STEM resume and a routesetting
                resume.
              </h2>

              <p>
                Engineering and climbing have both become significant parts of
                my professional life.
              </p>
            </div>
          </div>

          <div className="resume-preview">
            {resumes.map((resume) => (
              <article className="resume-card" key={resume.title}>
                <div className="resume-card-top">
                  <span className="resume-number">{resume.number}</span>
                  <span className="resume-label">{resume.label}</span>
                </div>

                <h2>{resume.title}</h2>

                <p>{resume.description}</p>

                <div className="resume-actions">
                  <a
                    className="resume-button"
                    href={resume.file}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Résumé ↗
                  </a>

                  <a className="resume-download" href={resume.file} download>
                    Download PDF ↓
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section className="coming-section" id="about">
          <div className="section-label">ABOUT</div>

          <h2>A little more about me.</h2>

          <div className="about-copy">
            <p>
              I'm a computer science graduate working in cyber mission analysis,
              with a background in cybersecurity test and evaluation, software,
              automation, and technical documentation.
            </p>

            <p>
              My career hasn't followed one straight line. I've worked in
              engineering, healthcare, research, and climbing, and I've learned
              something different from each of them. I like learning new things,
              doing work that matters, helping where I can, and leaving things
              better than I found them.
            </p>

            <p>
              Outside of my engineering work, I'm a routesetter and coach. I
              care about thoughtful movement, accessible climbing, competition
              operations, and building stronger climbing communities.
            </p>

            <p>
              I spend a lot of my time building things, asking questions, and
              picking up new skills. The projects here range from software and
              research to climbing tools and personal projects I've cared about
              to continuously improve.
            </p>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-identity">
            <strong>Tiana J. Schwarz</strong>

            <div className="footer-contact">
              <a
                href="https://www.linkedin.com/in/tschwarz001/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <span>|</span>

              <a
                href="https://github.com/track001"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <span>|</span>

              <a href="mailto:schwarztiana@gmail.com">schwarztiana@gmail.com</a>

              <span>|</span>

              <a href="tel:+17207175523">(720) 717-5523</a>
            </div>
          </div>

          <div className="footer-mark" aria-hidden="true">
            ✦ ❀ ✦
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Ti Schwarz ✿ </span>
        </div>
      </footer>
    </div>
  );
}
