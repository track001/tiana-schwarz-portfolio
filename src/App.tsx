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
// const BASE_URL = "";

// GitHub Pages
const BASE_URL = "/tiana-schwarz-portfolio";

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
 
{
  number: "04",
  category: "SYSTEM MONITORING / AUTOMATION",
  title: "TRON Telemetry",
  subtitle: "Portable Windows Desktop Monitoring Dashboard",
  description:
     "A client-focused, downloadable Rainmeter dashboard developed to monitor and visualize Windows system performance. Built with PowerShell and native Windows performance counters, it features real-time CPU, GPU, and RAM telemetry, live utilization graphs, and hardware specifications. Interactive hover tooltips explain technical metrics, while customizable character overlays and interface elements reflect the client's preferences. The project and its source code are publicly available for download and customization.",
  stack: [
    "Rainmeter",
    "PowerShell",
    "Windows",
    "Performance Counters",
    "WMI/CIM",
  ],
  images: [
    assetPath("/images/version7.png"),
    assetPath("/images/CPU-preview.png"),
    assetPath("/images/GPU-preview.png"),
    assetPath("/images/RAM-preview.png"),
    assetPath("/images/GPUinfo.png"),
  ],
  github: "https://github.com/track001/TRON-Telemetry",
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


/* =========================================================
   CREDENTIALS, RECOGNITION & COMMUNITY
========================================================= */

type Credential = {
  title: string;
  issuer: string;
  date: string;
  validity?: string;
  detail: string;
};

const credentials: Credential[] = [
  { title: "CompTIA Security+ (SY0-601)", issuer: "CompTIA", date: "May 29, 2024", validity: "Valid through May 29, 2027", detail: "Tiana Schwarz earned the CompTIA Security+ (SY0-601) certification, validating foundational knowledge of threats, vulnerabilities, security architecture, security operations, and risk management." },
  { title: "Level 1 Routesetter", issuer: "USA Climbing", date: "July 12, 2026", validity: "Routesetter membership through July 9, 2027", detail: "Tiana Schwarz completed USA Climbing Level 1 Routesetter training, developing skills in movement design, route development, setting practices, and competition routesetting." },
  { title: "Para Routesetting", issuer: "USA Climbing", date: "April 17, 2026", detail: "Tiana Schwarz completed a three-day USA Climbing Para Routesetting course focused on inclusive route design, adaptive movement, and routesetting considerations for para athletes." },
  { title: "CPR / AED / First Aid", issuer: "National CPR Foundation", date: "August 13, 2026", validity: "Renewal August 13, 2028", detail: "Tiana Schwarz completed CPR, AED, and First Aid training covering emergency response, lifesaving techniques, and basic first aid procedures." },
  { title: "Cyber Security Analyst Virtual Experience", issuer: "Telstra / Forage", date: "July 10, 2023", detail: "Tiana Schwarz completed the Telstra Cyber Security Analyst program, gaining hands-on experience in malware attack response, firewall rule creation, Python-based mitigation, and incident post-mortem documentation." },
  { title: "SketchUp Fundamentals", issuer: "SketchUp", date: "Date not specified", detail: "Tiana Schwarz earned the SketchUp Fundamentals (Desktop) certification, validating skills in precision modeling, texturing, and scene creation using the desktop version of SketchUp. The certification confirms her ability to navigate the full toolset and produce cross-platform visualizations." },
];

type RecognitionCategory = "Technical & Career" | "Academic Honors" | "Climbing" | "Athletics";
type Recognition = {
  title: string;
  source: string;
  category: RecognitionCategory;
  description: string;
  url?: string;
};

const recognition: Recognition[] = [
  { title: "Between Chalk and Code: Lessons from Climbing and Cyber", source: "Reinvented Magazine", category: "Technical & Career", description: "Tiana Schwarz authored an article exploring how climbing has shaped her approach to cybersecurity, problem-solving, perseverance, and learning through difficult challenges.", url: "https://www.reinventedmagazine.com/post/between-chalk-and-code-lessons-from-climbing-and-cyber" },
  { title: "UCCS A.R.E.S. Project Wins Space Grant Prize", source: "The Scribe", category: "Academic Honors", description: "Tiana Schwarz was part of the UCCS A.R.E.S. Project team recognized by the Colorado Space Grant Consortium for innovative research on inertial measurement units (IMUs) in microgravity. The team explored how wearable technology could support human movement and monitoring in space.", url: "https://scribe.uccs.edu/uccs-ares-project-wins-prize-from-colorado-space-grant-consortium/" },
  { title: "Alumni Spotlight: Class of 2018", source: "SkyView Academy", category: "Academic Honors", description: "SkyView Academy featured alumna Tiana Schwarz (Class of 2018), highlighting her academic journey, professional work in cybersecurity, and continued involvement in climbing and community activities.", url: "https://www.skyviewacademy.org/p/~board/alumni/post/alumni-spotlight-tiana-schwarz-class-of-2018" },
  { title: "2022–2023 Colorado Space Grant Consortium Institutional Scholarship", source: "Colorado Space Grant Consortium", category: "Academic Honors", description: "Tiana Schwarz was selected as a recipient of the 2022–2023 Colorado Space Grant Consortium Institutional Scholarship, part of NASA's National Space Grant College and Fellowship Program supporting future scientists, engineers, and leaders.", },
  { title: "Fall 2023 President's List", source: "UCCS Communique", category: "Academic Honors", description: "Tiana Schwarz was recognized on the Fall 2023 President's List at the University of Colorado Colorado Springs for achieving a 4.0 semester GPA in the College of Engineering and Applied Science.", url: "https://communique.uccs.edu/?p=153687" },
  { title: "Fall 2021 President's and Dean's Lists", source: "UCCS Communique", category: "Academic Honors", description: "Tiana Schwarz was recognized for academic excellence during the Fall 2021 semester in the College of Engineering and Applied Science at UCCS, where she studied Computer Science in the ABET-accredited program.", url: "https://communique.uccs.edu/?p=137114" },
  { title: "Fall 2019 President's and Dean's Lists", source: "UCCS Communique", category: "Academic Honors", description: "Tiana Schwarz was recognized for academic excellence during the Fall 2019 semester in the College of Engineering and Applied Science at UCCS, where she studied Computer Science in the ABET-accredited program.", url: "https://communique.uccs.edu/?p=118157" },
  { title: "Crux: 9 Photos That Capture the Power and Struggle of a Climb's Hardest Move", source: "Climbing Magazine · Chris Thai", category: "Climbing", description: "Tiana Schwarz was featured in Climbing Magazine's Crux photo contest as an honorable mention in Chris Thai's photograph, Flo Storm Crux. The image captures Schwarz preparing for the dynamic crux of Flo Storm (V8) in Heaven's Gate near Eleven Mile Canyon, Colorado, where the defining move requires throwing to the next hold and cutting feet.", url: "https://www.climbing.com/culture-climbing/crux-winning-photo-summer-2026-contest/" },
  { title: "2024 Collegiate National Championships", source: "USA Climbing", category: "Athletics", description: "At her first Collegiate Nationals, delayed by multiple knee surgeries, Tiana Schwarz placed first in both qualifiers and finals for Bouldering and Sport Climbing in the Intermediate category at the 2024 USA Climbing Collegiate National Championships. As the inaugural year for the Intermediate division, her performance marked a meaningful return to competitive climbing.", url: "https://usaclimbing.org/news/2024-collegiate-national-championships-conclude-in-arizona/" },
  { title: "Eagle Valley Shines at Weekend of Mixed Climbing Events", source: "Vail Daily", category: "Climbing", description: "Tiana Schwarz of the University of Colorado Colorado Springs won the women’s lead/top-rope category at a weekend of mixed climbing events hosted by Eagle Climbing & Fitness.", url: "https://www.vaildaily.com/news/eagle-climbing-and-fitness-hosts-weekend-of-mixed-climbing-events-eagle-valley-middle-school-climber-tops-individual-leaderboard/" },
  { title: "SkyView Academy High School Track & Field Records", source: "Athletic.net", category: "Athletics", description: "Tiana Schwarz is the current SkyView Academy record holder in the 400m, 800m, 4×400m relay, 4×800m relay, and SMR 800m relay, and ranks third all-time in the 200m, with primary focus on the 400m and 800m. Last updated August 2026.", url: "https://www.athletic.net/team/42708/track-and-field-outdoor/2026/team-records/f" },
  { title: "Great Southwest Classic Colorado Entry List", source: "MileSplit Colorado", category: "Athletics", description: "Tiana Schwarz was selected to represent Colorado at the prestigious Great Southwest Track & Field Classic, an invite-only meet at the University of New Mexico that draws top high school athletes from across the nation. Competing in the 800m, she ran a 2:26.03 against elite competition in this nationally recognized multi-day event.", url: "https://co.milesplit.com/articles/155390/updated-great-southwest-entry-list-for-colorado" },
  { title: "Colorado Class 3A Volleyball Statistical Leaders", source: "Colorado Preps", category: "Athletics", description: "At the Class 3A volleyball level in Colorado, Tiana Schwarz ranked seventh in digs with 368 total, placing her among the elite dig leaders in the state that Fall 2017 season.", url: "https://coloradopreps.com/class-3a-volleyball-statistical-leaders/" },
  { title: "Volleyball Players to Watch: SkyView Academy", source: "Colorado Community Media", category: "Athletics", description: "Colorado Community Media featured Tiana Schwarz in coverage of SkyView Academy volleyball and the team's competitive development.", url: "https://www.coloradocommunitymedia.com/stories/volleyball-squads-work-in-ways-like-football-teams,253643/" },
  { title: "Colorado 3A Girls Track and Field State Meet Results 2015", source: "The Denver Post", category: "Athletics", description: "Tiana Schwarz placed sixth in the 400m dash with a time of 1:00.04. In the 800m, despite suffering a fall mid-race that required immediate stitches, she pushed through to finish 16th, clocking a 64-second opening lap. She also anchored SkyView Academy's 4×800m relay team to a seventh-place finish, earning valuable points for the school.", url: "https://www.denverpost.com/2015/05/16/colorado-3a-girls-track-and-field-state-meet-results-2015/" },
  { title: "Top Small-School Track Performances", source: "MileSplit Colorado", category: "Athletics", description: "Coverage of Colorado small-school track and field performances during the 2015 season.", url: "https://co.milesplit.com/articles/151240/top-small-school-performances-of-the-past-week" },
  { title: "2016 Colorado State Track Championships", source: "MileSplit Colorado", category: "Athletics", description: "Tiana Schwarz competed in the 2016 Colorado State Track and Field Championships as part of SkyView Academy's 4×800m relay team, which finished 14th in 10:43.30.", url: "https://co.milesplit.com/meets/220074-colorado-state-track-and-field-championships-2016/results/453815/raw" },
];

function PortfolioAdditions() {
  const [category, setCategory] = useState<"All" | RecognitionCategory>("All");
  const categories: Array<"All" | RecognitionCategory> = ["All", "Technical & Career", "Academic Honors", "Climbing", "Athletics"];
  const visible = category === "All" ? recognition : recognition.filter((item) => item.category === category);

  return (
    <>
      <section className="portfolio-extra-section" id="certifications">
        <div className="section-label">CERTIFICATIONS & CREDENTIALS</div>
        <h2>Training, credentials & continued learning.</h2>
        <p className="extra-intro">Cybersecurity, competition routesetting, adaptive climbing, and professional development.</p>
        <div className="extra-grid">
          {credentials.map((item) => (
            <article className="extra-card" key={item.title}>
              <span className="extra-kicker">{item.issuer} · {item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              {item.validity && <span className="extra-footnote">{item.validity}</span>}
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-extra-section" id="recognition">
        <div className="section-label">PUBLICATIONS & RECOGNITION</div>
        <h2>Writing, research & milestones.</h2>
        <p className="extra-intro">Published work, academic honors, competition coverage, and athletics records.</p>
        <div className="recognition-filters" aria-label="Filter publications and recognition">
          {categories.map((item) => (
            <button key={item} type="button" className={category === item ? "selected" : ""} onClick={() => setCategory(item)} aria-pressed={category === item}>
              {item}
            </button>
          ))}
        </div>
        <div className="extra-grid">
          {visible.map((item) => (
            <article className="extra-card" key={item.title}>
              {item.source.startsWith("Climbing Magazine") && (
                <img className="recognition-feature-image" src={assetPath("/images/bouldering-Chris-Thai.webp")} alt="Tiana Schwarz climbing Flo Storm V8, photographed by Chris Thai" loading="lazy" />
              )}
              <span className="extra-kicker">{item.category} · {item.source}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.url && <a className="extra-link" href={item.url} target="_blank" rel="noopener noreferrer">Read source ↗</a>}
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-extra-section" id="community">
        <div className="section-label">COMMUNITY INVOLVEMENT</div>
        <h2>Service, access & community.</h2>
        <p className="extra-intro">Supporting local food access and inclusive outdoor recreation.</p>
        <div className="extra-grid">
          <article className="extra-card">
            <span className="extra-kicker">ADAPTIVE RECREATION · MAY 30, 2026</span>
            <h3>Outside Days 2026</h3>
            <p className="extra-org">Adaptive Adventures · Westminster, Colorado</p>
            <p>Rock climbing wall support for adaptive athletes at an inclusive outdoor recreation event.</p>
            <span className="extra-footnote">Volunteer role: Rock Climbing Support</span>
          </article>
          <article className="extra-card">
            <span className="extra-kicker">VOLUNTEER RESOURCE · COLORADO SPRINGS</span>
            <h3>Volunteering in Colorado Springs</h3>
            <p>I maintain a collection of volunteer opportunities and community organizations around Colorado Springs that I've researched, volunteered with, or recommend.</p>
            <p>It focuses primarily on homelessness, healthcare access, food insecurity, and support for older adults.</p>
            <a className="extra-link" href="https://github.com/track001/VolunteeringinCOS" target="_blank" rel="noopener noreferrer">Explore Volunteering in Colorado Springs ↗</a>
          </article>
          <article className="extra-card">
            <span className="extra-kicker">COMMUNITY SERVICE · COLORADO SPRINGS</span>
            <h3>Community Food Pantry Support</h3>
            <p className="extra-org">Colorado Springs, Colorado</p>
            <p>Supporting food pantry efforts serving underserved communities and helping improve access to essential food resources.</p>
          </article>
        </div>
      </section>
    </>
  );
}

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

          <a href="#recognition">Recognition</a>
          <span>|</span>
          <a href="#community">Community</a>
          <span>|</span>
          <a href="#about">About</a>
          <span>|</span>

          <a href="#resumes">Résumés</a>
        </nav>
      </header>

      <div className="security-banner">
        <span>COMPTIA SECURITY+</span>
        <span>Active TS/SCI Clearance</span>
        <a href="#certifications">View credentials ↗</a>
      </div>

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

            <blockquote
              style={{
                margin: "22px 0 26px",
                padding: "4px 0 4px 18px",
                borderLeft: "2px solid #e97759",
                color: "#e8ddd5",
              }}
            >
              <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "clamp(18px, 2vw, 24px)", margin: "0 0 8px" }}>
                “Further up and further in!”
              </p>
              <cite style={{ fontSize: "12px", fontStyle: "normal", letterSpacing: "0.06em", color: "#c5b4aa" }}>
                C. S. Lewis, <em>The Last Battle</em>
              </cite>
            </blockquote>

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

{project.title === "TRON Telemetry" && project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      width: "fit-content",
      marginTop: "12px",
      marginBottom: "20px",
      color: "#e97759",
      fontSize: "14px",
      fontWeight: 600,
      letterSpacing: "0.04em",
      textDecoration: "none",
      borderBottom: "1px solid #e97759",
      paddingBottom: "5px",
    }}
  >
    ↓ DOWNLOAD TRON TELEMETRY ON GITHUB ↗
  </a>
)}

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
               <span>05 / NEXT</span>

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

        <PortfolioAdditions />

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
