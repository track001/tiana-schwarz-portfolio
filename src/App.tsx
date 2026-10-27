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
  sortDate?: string;
};

const credentials: Credential[] = [
  { title: "CompTIA Security+ (SY0-601)", issuer: "CompTIA", date: "May 29, 2024", validity: "Valid through May 29, 2027", detail: "Tiana Schwarz earned the CompTIA Security+ (SY0-601) certification, validating foundational knowledge of threats, vulnerabilities, security architecture, security operations, and risk management.", sortDate: "2024-05-29" },
  { title: "Level 2 Youth Coach", issuer: "USA Climbing", date: "November 2023", validity: "Membership through August 14, 2027", detail: "USA Climbing Level 2 Youth Coach with experience developing youth athletes, guiding structured practices, supporting competition preparation, and fostering a positive team environment.", sortDate: "2023-11-01" },
  { title: "Level 1 Routesetter", issuer: "USA Climbing", date: "July 12, 2026", validity: "Routesetter membership through July 9, 2027", detail: "Tiana Schwarz completed USA Climbing Level 1 Routesetter training, developing skills in movement design, route development, setting practices, and competition routesetting.", sortDate: "2026-07-12" },
  { title: "Para Routesetting", issuer: "USA Climbing", date: "April 17, 2026", detail: "Tiana Schwarz completed a three-day USA Climbing Para Routesetting course focused on inclusive route design, adaptive movement, and routesetting considerations for para athletes.", sortDate: "2026-04-17" },
  { title: "CPR / AED / First Aid", issuer: "National CPR Foundation", date: "August 13, 2026", validity: "Renewal August 13, 2028", detail: "Tiana Schwarz completed CPR, AED, and First Aid training covering emergency response, lifesaving techniques, and basic first aid procedures.", sortDate: "2026-08-13" },
  { title: "Cyber Security Analyst Virtual Experience", issuer: "Telstra / Forage", date: "July 10, 2023", detail: "Tiana Schwarz completed the Telstra Cyber Security Analyst program, gaining hands-on experience in malware attack response, firewall rule creation, Python-based mitigation, and incident post-mortem documentation.", sortDate: "2023-07-10" },
  { title: "SketchUp Fundamentals", issuer: "SketchUp", date: "Date not specified", detail: "Tiana Schwarz earned the SketchUp Fundamentals (Desktop) certification, validating skills in precision modeling, texturing, and scene creation using the desktop version of SketchUp. The certification confirms her ability to navigate the full toolset and produce cross-platform visualizations." },
];

type RecognitionCategory = "Writing & Media" | "Academic Honors" | "Climbing & Athletics";
type Recognition = {
  title: string;
  source: string;
  category: RecognitionCategory;
  description: string;
  url?: string;
  sortDate?: string;
};

const recognition: Recognition[] = [
  { title: "B.S. Computer Science · Cum Laude", source: "UCCS · College of Engineering and Applied Science", category: "Academic Honors", sortDate: "2023-12-15", description: "Tiana Schwarz earned her B.S. in Computer Science from UCCS in December 2023, graduating Cum Laude through the College of Engineering and Applied Science. She earned a perfect 4.0 GPA in her final semester and received the 2022–2023 Colorado Space Grant Consortium Institutional Scholarship." },
  { title: "Dean's List · Eight Semesters", source: "UCCS · College of Engineering and Applied Science", category: "Academic Honors", sortDate: "2023-12-15", description: "Recognized across eight academic semesters: Fall 2018, Spring 2019, Spring 2021, Summer 2021, Fall 2021, Spring 2023, Summer 2023, and Fall 2023. UCCS published academic honors announcements for multiple semesters, including President’s List recognition for the 4.0 GPA earned in Fall 2023. The eight-semester distinction reflects the academic honors recorded on her LinkedIn profile." },
  { title: "Track & Field Awards · SkyView Academy", source: "CHSAA · SkyView Academy", category: "Climbing & Athletics", sortDate: "2018-05-01", description: "Earned the 2015 Heart of the Hawk Award and Varsity MVP recognition. At the 2015 Colorado state meet, placed sixth in the 400m, 16th in the 800m, seventh with the 4×800m relay, and 12th with the 4×400m relay. Competed for Colorado at the Great Southwest Invitational in the 800m. Returned to state competition in the 4×800m relay in 2016 (14th) and anchored the 2017 4×400m relay team to 11th place.", url: "https://co.milesplit.com/athletes/4986072/stats" },
  { title: "AMTA Mock Trial · Award Recognition", source: "American Mock Trial Association", category: "Academic Honors", description: "Tiana Schwarz participated in AMTA Mock Trial and received an award. Award title and date are to be confirmed." },
  { title: "Between Chalk and Code: Lessons from Climbing and Cyber", source: "Reinvented Magazine", category: "Writing & Media", description: "Tiana Schwarz authored an article exploring how climbing has shaped her approach to cybersecurity, problem-solving, perseverance, and learning through difficult challenges.", url: "https://www.reinventedmagazine.com/post/between-chalk-and-code-lessons-from-climbing-and-cyber" },
  { title: "Climbing Club Gains Popularity in Its First Semester", source: "The Scribe · UCCS", category: "Climbing & Athletics", description: "Tiana Schwarz founded and served as president of this iteration of the UCCS Climbing Club, partnering with the on-campus SOLE recreation center and Springs Climbing Center to make climbing more accessible to college students. The club welcomed both recreational and competitive climbers while representing UCCS in USA Climbing Collegiate competitions.", url: "https://scribe.uccs.edu/climbing-club-gains-popularity-in-its-first-semester/" },
  { title: "Springs Climbing Center Continues to Push Students to Greater Heights", source: "The Scribe · UCCS", category: "Climbing & Athletics", description: "Tiana Schwarz was featured in The Scribe, the University of Colorado Colorado Springs student newspaper, in its coverage of Springs Climbing Center and the local student climbing community.", url: "https://scribe.uccs.edu/springs-climbing-center-continues-to-push-students-to-greater-heights/" },
  { title: "The Impact Driver Podcast · Upcoming Guest", source: "The Impact Driver · Climbing Business Journal · Upcoming / Not Yet Published", category: "Writing & Media", description: "Tiana Schwarz has been invited to appear on The Impact Driver Podcast, a Climbing Business Journal podcast focused on routesetting and the people, ideas, and challenges shaping the routesetting industry. The planned conversation will draw on her experience as a routesetter and climbing coach. Once released, the episode is expected to be available in audio on Apple Podcasts, Spotify, and Podbean, with a video version on YouTube and a written transcript. Recording and publication details are pending." },
  { title: "UCCS A.R.E.S. Project Wins Space Grant Prize", source: "The Scribe", category: "Academic Honors", description: "Tiana Schwarz was part of the UCCS A.R.E.S. Project team recognized by the Colorado Space Grant Consortium for innovative research on inertial measurement units (IMUs) in microgravity. The team explored how wearable technology could support human movement and monitoring in space.", url: "https://scribe.uccs.edu/uccs-ares-project-wins-prize-from-colorado-space-grant-consortium/" },
  { title: "Alumni Spotlight: Class of 2018", source: "SkyView Academy", category: "Academic Honors", description: "SkyView Academy featured alumna Tiana Schwarz (Class of 2018), highlighting her academic journey, professional work in cybersecurity, and continued involvement in climbing and community activities.", url: "https://www.skyviewacademy.org/p/~board/alumni/post/alumni-spotlight-tiana-schwarz-class-of-2018", sortDate: "2025-11-04" },
  { title: "2022–2023 Colorado Space Grant Consortium Institutional Scholarship", source: "Colorado Space Grant Consortium", category: "Academic Honors", sortDate: "2022-08-01", description: "Tiana Schwarz was selected for the 2022–2023 Colorado Space Grant Consortium Institutional Scholarship, part of NASA's National Space Grant College and Fellowship Program supporting future scientists, engineers, and leaders." },
  { title: "Fall 2023 President's List", source: "UCCS Communique", category: "Academic Honors", description: "Tiana Schwarz was recognized on the Fall 2023 President's List at the University of Colorado Colorado Springs for achieving a 4.0 semester GPA in the College of Engineering and Applied Science.", url: "https://communique.uccs.edu/?p=153687" },
  { title: "Fall 2021 President's and Dean's Lists", source: "UCCS Communique", category: "Academic Honors", description: "UCCS published academic honors for the Fall 2021 semester. This article is one of several university announcements documenting Tiana Schwarz’s Dean’s List and President’s List recognitions throughout her Computer Science studies.", url: "https://communique.uccs.edu/?p=137114" },
  { title: "Fall 2019 President's and Dean's Lists", source: "UCCS Communique", category: "Academic Honors", description: "UCCS published academic honors for the Fall 2019 semester, part of the broader record of Dean’s List and President’s List distinctions Tiana Schwarz earned during her undergraduate studies.", url: "https://communique.uccs.edu/?p=118157" },
  { title: "Crux: 9 Photos That Capture the Power and Struggle of a Climb's Hardest Move", source: "Climbing Magazine · Chris Thai", category: "Climbing & Athletics", description: "Tiana Schwarz was featured in Climbing Magazine's Crux photo contest as an honorable mention in Chris Thai's photograph, Flo Storm Crux. The image captures Schwarz preparing for the dynamic crux of Flo Storm (V8) in Heaven's Gate near Eleven Mile Canyon, Colorado, where the defining move requires throwing to the next hold and cutting feet.", url: "https://www.climbing.com/culture-climbing/crux-winning-photo-summer-2026-contest/" },
  { title: "USA Climbing Competition Results & Rankings", source: "USAC Database · Athlete profile", category: "Climbing & Athletics", description: "USA Climbing collegiate competition record, including first-place finishes in the 2024 Collegiate National Boulder qualifier and final (Women's Intermediate), first place at the 2024 Collegiate divisional Boulder competition, and additional collegiate qualifying results. Athlete ID: 29690465. The linked database provides event-by-event rankings, including Boulder and Lead/Top Rope tabs.", url: "https://usac.climb8a.com/climber/29690465", sortDate: "2024-05-24" },
  { title: "2024 Collegiate National Championships", source: "USA Climbing", category: "Climbing & Athletics", description: "At her first Collegiate Nationals, delayed by multiple knee surgeries, Tiana Schwarz placed first in both qualifiers and finals for Bouldering and Sport Climbing in the Intermediate category at the 2024 USA Climbing Collegiate National Championships. As the inaugural year for the Intermediate division, her performance marked a meaningful return to competitive climbing.", url: "https://usaclimbing.org/news/2024-collegiate-national-championships-conclude-in-arizona/", sortDate: "2024-05-24" },
  { title: "Eagle Valley Shines at Weekend of Mixed Climbing Events", source: "Vail Daily", category: "Climbing & Athletics", description: "Tiana Schwarz of the University of Colorado Colorado Springs won the women’s lead/top-rope category at a weekend of mixed climbing events hosted by Eagle Climbing & Fitness.", url: "https://www.vaildaily.com/news/eagle-climbing-and-fitness-hosts-weekend-of-mixed-climbing-events-eagle-valley-middle-school-climber-tops-individual-leaderboard/" },
  { title: "SkyView Academy High School Track & Field Records", source: "Athletic.net", category: "Climbing & Athletics", description: "Tiana Schwarz is the current SkyView Academy record holder in the 400m, 800m, 4×400m relay, 4×800m relay, and SMR 800m relay, and ranks third all-time in the 200m, with primary focus on the 400m and 800m. Last updated August 2026.", url: "https://www.athletic.net/team/42708/track-and-field-outdoor/2026/team-records/f" },
  { title: "Great Southwest Classic Colorado Entry List", source: "MileSplit Colorado", category: "Climbing & Athletics", description: "Tiana Schwarz was selected to represent Colorado at the prestigious Great Southwest Track & Field Classic, an invite-only meet at the University of New Mexico that draws top high school athletes from across the nation. Competing in the 800m, she ran a 2:26.03 against elite competition in this nationally recognized multi-day event.", url: "https://co.milesplit.com/articles/155390/updated-great-southwest-entry-list-for-colorado" },
  { title: "Colorado Class 3A Volleyball Statistical Leaders", source: "Colorado Preps", category: "Climbing & Athletics", description: "At the Class 3A volleyball level in Colorado, Tiana Schwarz ranked seventh in digs with 368 total, placing her among the elite dig leaders in the state that Fall 2017 season.", url: "https://coloradopreps.com/class-3a-volleyball-statistical-leaders/" },
  { title: "Volleyball Players to Watch: SkyView Academy", source: "Colorado Community Media", category: "Climbing & Athletics", description: "Colorado Community Media featured Tiana Schwarz in coverage of SkyView Academy volleyball and the team's competitive development.", url: "https://www.coloradocommunitymedia.com/stories/volleyball-squads-work-in-ways-like-football-teams,253643/" },
  { title: "Colorado 3A Girls Track and Field State Meet Results 2015", source: "The Denver Post", category: "Climbing & Athletics", description: "Tiana Schwarz placed sixth in the 400m dash with a time of 1:00.04. In the 800m, despite suffering a fall mid-race that required immediate stitches, she pushed through to finish 16th, clocking a 64-second opening lap. She also anchored SkyView Academy's 4×800m relay team to a seventh-place finish, earning valuable points for the school.", url: "https://www.denverpost.com/2015/05/16/colorado-3a-girls-track-and-field-state-meet-results-2015/", sortDate: "2015-05-16" },
  { title: "Top Small-School Track Performances", source: "MileSplit Colorado", category: "Climbing & Athletics", description: "Coverage of Colorado small-school track and field performances during the 2015 season.", url: "https://co.milesplit.com/articles/151240/top-small-school-performances-of-the-past-week" },
  { title: "2016 Colorado State Track Championships", source: "MileSplit Colorado", category: "Climbing & Athletics", description: "Tiana Schwarz competed in the 2016 Colorado State Track and Field Championships as part of SkyView Academy's 4×800m relay team, which finished 14th in 10:43.30.", url: "https://co.milesplit.com/meets/220074-colorado-state-track-and-field-championships-2016/results/453815/raw" },
];

type CommunityItem = {
  title: string;
  category: string;
  dateLabel: string;
  organization?: string;
  description: string;
  sortDate?: string;
  url?: string;
  linkLabel?: string;
};

const communityItems: CommunityItem[] = [
  { title: "UCCS Scholarship Essay Review", category: "EDUCATION · VOLUNTEERING", dateLabel: "Date not specified", organization: "UCCS Alumni Volunteer Opportunities", description: "Volunteered to review scholarship application essays, supporting the evaluation of student submissions and access to educational opportunities.", url: "https://alumni.uccs.edu/get-involved/volunteer-opportunities", linkLabel: "UCCS volunteer opportunities ↗" },
  { title: "Outside Days 2026", category: "ADAPTIVE RECREATION", dateLabel: "May 30, 2026", sortDate: "2026-05-30", organization: "Adaptive Adventures · Westminster, Colorado", description: "Assisted adaptive athletes and para climbers at the climbing wall and information booth. Supported inclusive recreation and learned more about equipment considerations and accessibility barriers." },
  { title: "Pikes Peak Regional Science & Engineering Fair", category: "STEM OUTREACH", dateLabel: "February 2022", sortDate: "2022-02-01", organization: "Volunteer Judge · Colorado", description: "Reviewed more than 40 STEM projects by students in grades 6–12 from four Colorado counties, evaluated presentations, and offered feedback to encourage future scientists and engineers." },
  { title: "CU Medical Foot Clinic", category: "HEALTHCARE ACCESS", dateLabel: "February–June 2022", sortDate: "2022-06-01", organization: "Springs Rescue Mission · Colorado Springs", description: "Supported podiatric care for adults experiencing homelessness alongside medical professionals, including foot-health screening, patient education, and follow-up referrals." },
  { title: "Diversity & Inclusion Council", category: "HEALTH EQUITY", dateLabel: "February 2022–June 2023", sortDate: "2023-06-01", organization: "CommonSpirit Health / Centura Health", description: "Served on the Health Disparities Committee, contributing to discussions and initiatives focused on health equity and inclusive practices for staff and patients." },
  { title: "Assisted Living Community Project", category: "COMMUNITY DEVELOPMENT", dateLabel: "January–May 2018", sortDate: "2018-05-01", organization: "Big Idea Project · La Veta, Colorado", description: "Led a student team developing plans for an assisted living community space intended to address isolation among older adults, including project documentation and a video sharing residents' perspectives." },
  { title: "Alumni Ambassador", category: "AEROSPACE MENTORSHIP", dateLabel: "August 2024–Present", sortDate: "2026-10-27", organization: "Colorado Space Business Roundtable (CSBR) · Alumni Ambassador", description: "Support aerospace and technology networking, mentorship, career guidance, and outreach for students and early-career professionals." },
  { title: "Volunteering in Colorado Springs", category: "COMMUNITY RESOURCE", dateLabel: "Ongoing", sortDate: "2026-10-27", description: "I maintain a GitHub collection of local volunteer opportunities and organizations focused on homelessness, healthcare access, food insecurity, and older adults.", url: "https://github.com/track001/VolunteeringinCOS", linkLabel: "Explore volunteering resources ↗" },
  { title: "Women's Climb Nights", category: "CLIMBING COMMUNITY", dateLabel: "2026", sortDate: "2026-09-25", organization: "Springs Climbing Center · Colorado Springs", description: "Co-hosted two women's climbing nights that welcomed more than 60 participants across the events. Reserved the gym for these gatherings to help create a welcoming environment for climbing, connection, and community." },
  { title: "Community Food Pantry Support", category: "FOOD ACCESS", dateLabel: "Date not specified", organization: "Colorado Springs, Colorado", description: "Supported food pantry efforts serving underserved communities and improving access to essential food resources." },
];

type Timeframe = "All Time" | "Last 12 Months";
const dateValue = (value?: string) => value ? new Date(`${value}T12:00:00`).getTime() : -1;
const recentOnly = <T extends { sortDate?: string }>(items: T[], timeframe: Timeframe): T[] => {
  if (timeframe === "All Time") return items;
  const cutoff = new Date();
  cutoff.setFullYear(cutoff.getFullYear() - 1);
  return items.filter(item => item.sortDate && dateValue(item.sortDate) >= cutoff.getTime());
};
const newestFirst = <T extends { sortDate?: string }>(items: T[]): T[] =>
  [...items].sort((a, b) => dateValue(b.sortDate) - dateValue(a.sortDate));

function TimeframeButtons({ value, onChange }: { value: Timeframe; onChange: (value: Timeframe) => void }) {
  return <div className="recognition-filters" aria-label="Filter by time period">
    {(["All Time", "Last 12 Months"] as Timeframe[]).map(item =>
      <button key={item} type="button" className={value === item ? "selected" : ""} aria-pressed={value === item} onClick={() => onChange(item)}>{item}</button>
    )}
  </div>;
}

const partnerLogos = [
  { name: "The Denver Post", file: "denverpost.png", context: "Competition coverage" },
  { name: "USA Climbing", file: "usaclimbing-logo.png", context: "Competitions, coaching & routesetting" },
  { name: "Colorado Space Business Roundtable", file: "csbr.png", context: "Alumni ambassador" },
  { name: "The Scribe", file: "the-scribe.png", context: "University newspaper features" },
  { name: "Escape Climbing", file: "escape-climbing.png", context: "Escape Athlete · Athlete support" },
  { name: "Climbing Business Journal", file: "climbingbusinessjournal.png", context: "Climbing industry publication" },
  { name: "Climbing Magazine", file: "climbing-magazine.png", context: "Photography feature" },
  { name: "The Impact Driver Podcast", file: "impactdriver.png", context: "Invited guest · Routesetting podcast · Episode pending" },
  { name: "Colorado Space Grant Consortium (COSGC) · Scholarship recipient & research presenter", file: "csgc.jpeg", context: "Scholarship recipient · Research presenter" },
];

function PortfolioAdditions() {
  const [category, setCategory] = useState<"All" | RecognitionCategory>("All");
  const [certTime, setCertTime] = useState<Timeframe>("All Time");
  const [recognitionTime, setRecognitionTime] = useState<Timeframe>("All Time");
  const [communityTime, setCommunityTime] = useState<Timeframe>("All Time");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const toggleSection = (name: string) => setExpandedSections(current => ({ ...current, [name]: !current[name] }));
  const previewCount = 4;
  const categories: Array<"All" | RecognitionCategory> = ["All", "Writing & Media", "Academic Honors", "Climbing & Athletics"];
  const visibleCredentials = newestFirst(recentOnly(credentials, certTime));
  const datedRecognition = newestFirst(recentOnly(recognition.filter(item => category === "All" || item.category === category), recognitionTime));
  // The unfiltered landing view intentionally mixes writing, academic honors,
  // and climbing achievements instead of showing only the most recent dates.
  const featuredRecognitionTitles = [
    "Between Chalk and Code: Lessons from Climbing and Cyber",
    "Alumni Spotlight: Class of 2018",
    "2024 Collegiate National Championships",
    "2022–2023 Colorado Space Grant Consortium Institutional Scholarship",
  ];
  const visibleRecognition = category === "All" && recognitionTime === "All Time"
    ? [
        ...featuredRecognitionTitles.flatMap(title => datedRecognition.filter(item => item.title === title)),
        ...datedRecognition.filter(item => !featuredRecognitionTitles.includes(item.title)),
      ]
    : datedRecognition;
  const visibleCommunity = newestFirst(recentOnly(communityItems, communityTime));

  return <>
    <section className="portfolio-extra-section" id="certifications" style={{ overflowAnchor: "none" }}>
      <div className="section-label">CERTIFICATIONS & CREDENTIALS</div>
      <h2>Training, credentials & continued learning.</h2>
      <p className="extra-intro">Cybersecurity, competition routesetting, adaptive climbing, and professional development.</p>
      <TimeframeButtons value={certTime} onChange={setCertTime} />
      <div className="extra-grid">
        {(expandedSections.certifications ? visibleCredentials : visibleCredentials.slice(0, previewCount)).map(item => <article className="extra-card" key={item.title}>
          <span className="extra-kicker">{item.issuer} · {item.date}</span>
          <h3>{item.title}</h3><p>{item.detail}</p>
          {item.validity && <span className="extra-footnote">{item.validity}</span>}
        </article>)}
      </div>
      {visibleCredentials.length > previewCount && (
        <button className="section-expand-button" type="button"
          aria-expanded={Boolean(expandedSections.certifications)}
          onClick={() => toggleSection("certifications")}>
          {expandedSections.certifications ? "Show fewer" : `Show all ${visibleCredentials.length} entries`}
          <span aria-hidden="true">{expandedSections.certifications ? " ↑" : " ↓"}</span>
        </button>
      )}
      {visibleCredentials.length === 0 && <p className="extra-intro">No dated credentials in this timeframe.</p>}
    </section>
    <section className="portfolio-extra-section" id="recognition" style={{ overflowAnchor: "none" }}>
      <div className="section-label">PUBLICATIONS & RECOGNITION</div>
      <h2>Writing, research & milestones.</h2>
      <p className="extra-intro">Published writing, media features, academic honors, and competition results.</p>
      <div className="recognition-filters" aria-label="Filter by category">
        {categories.map(item => <button key={item} type="button" className={category === item ? "selected" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <TimeframeButtons value={recognitionTime} onChange={setRecognitionTime} />
      <div className="extra-grid">
        {(expandedSections.recognition ? visibleRecognition : visibleRecognition.slice(0, previewCount)).map(item => <article className="extra-card" key={item.title}>
          <span className="extra-kicker">{item.category} · {item.source}</span>
          <h3>{item.title}</h3><p>{item.description}</p>
          {item.url && <a className="extra-link" href={item.url} target="_blank" rel="noopener noreferrer">Read source ↗</a>}
        </article>)}
      </div>
      {visibleRecognition.length > previewCount && (
        <button className="section-expand-button" type="button"
          aria-expanded={Boolean(expandedSections.recognition)}
          onClick={() => toggleSection("recognition")}>
          {expandedSections.recognition ? "Show fewer" : `Show all ${visibleRecognition.length} entries`}
          <span aria-hidden="true">{expandedSections.recognition ? " ↑" : " ↓"}</span>
        </button>
      )}
      {visibleRecognition.length === 0 && <p className="extra-intro">No dated recognition in this timeframe. Undated features remain under All Time.</p>}
    </section>
    <section className="portfolio-extra-section" id="community" style={{ overflowAnchor: "none" }}>
      <div className="section-label">COMMUNITY INVOLVEMENT</div>
      <h2>Service, access & community.</h2>
      <p className="extra-intro">Supporting local food access, STEM education, healthcare access, and inclusive recreation.</p>
      <TimeframeButtons value={communityTime} onChange={setCommunityTime} />
      <div className="extra-grid">
        {(expandedSections.community ? visibleCommunity : visibleCommunity.slice(0, previewCount)).map(item => <article className="extra-card" key={item.title}>
          <span className="extra-kicker">{item.category} · {item.dateLabel}</span>
          <h3>{item.title}</h3>
          {item.organization && <p className="extra-org">{item.organization}</p>}
          <p>{item.description}</p>
          {item.url && <a className="extra-link" href={item.url} target="_blank" rel="noopener noreferrer">{item.linkLabel || "Learn more ↗"}</a>}
        </article>)}
      </div>
      {visibleCommunity.length > previewCount && (
        <button className="section-expand-button" type="button"
          aria-expanded={Boolean(expandedSections.community)}
          onClick={() => toggleSection("community")}>
          {expandedSections.community ? "Show fewer" : `Show all ${visibleCommunity.length} entries`}
          <span aria-hidden="true">{expandedSections.community ? " ↑" : " ↓"}</span>
        </button>
      )}
      {visibleCommunity.length === 0 && <p className="extra-intro">No dated community activities in this timeframe.</p>}
    </section>
  </>;
}

export default function App() {
  const [openTimelineItem, setOpenTimelineItem] = useState<string | null>(null);
  const [showFullTimeline, setShowFullTimeline] = useState(false);

  const toggleTimelineItem = (id: string) => {
    setOpenTimelineItem((current) => (current === id ? null : id));
  };

  return (
    <div className="site">

        <style>{`

          .section-expand-button{display:block;width:fit-content;max-width:100%;margin:25px auto 4px;padding:13px 22px;border:1px solid var(--red-bright,#e97759);border-radius:30px;background:rgba(40,25,23,.75);color:var(--ivory,#f3e9e1);font:inherit;font-size:13px;font-weight:600;cursor:pointer;transition:background .2s,border-color .2s}
          .section-expand-button:hover{background:rgba(100,44,34,.55)}
          .section-expand-button:focus-visible{outline:2px solid var(--amber,#e7b17a);outline-offset:3px}
          .organization-logo-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin:24px 0 45px}
          .organization-logo-card{min-width:0;display:flex;flex-direction:column;align-items:center;text-align:center;gap:9px;padding:20px 12px;border:1px solid var(--border,#40302c);background:rgba(27,21,20,.65);border-radius:6px}
          .organization-logo-card img{display:block;width:100%;height:85px;object-fit:contain;background:#fff;border-radius:3px;padding:10px;box-sizing:border-box}
          .organization-logo-card strong{color:var(--ivory,#eee0d8);font-size:13px;line-height:1.4}
          .organization-logo-card span{color:var(--muted,#b0a7a0);font-size:11px;line-height:1.5}
          .portfolio-extra-section{overflow-anchor:none}
          @media(max-width:900px){.organization-logo-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
          @media(max-width:600px){.organization-logo-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.organization-logo-card{padding:12px 8px}.organization-logo-card img{height:68px;padding:6px}.recognition-filters button{font-size:12px;min-height:40px}.extra-grid{grid-template-columns:minmax(0,1fr)!important}.portfolio-extra-section h2{overflow-wrap:break-word}}
          .associations-list { display:flex;flex-wrap:wrap;gap:10px;margin:22px 0 40px; }
          .association-pill { display:inline-block;padding:10px 14px;border:1px solid var(--border, #40302c);border-radius:999px;color:var(--ivory,#eee0d8);font-size:13px;line-height:1.5;background:rgba(36,25,23,.65); }
          @media(max-width:800px){
            .nav { flex-wrap:wrap !important; gap:12px !important; }
            .nav-identity { min-width:0 !important; }
            .nav-contact { flex-wrap:wrap !important; gap:5px !important; overflow-wrap:anywhere; }
            .nav-links { width:100% !important;display:flex !important;flex-wrap:wrap !important;justify-content:flex-start !important;gap:10px !important; }
            .nav-links a { font-size:12px !important;white-space:nowrap; }
            .hero { grid-template-columns:1fr !important; }
            .hero-copy, .hero-photo-wrap { min-width:0 !important; }
            .project-grid,.resume-preview,.extra-grid { grid-template-columns:1fr !important; }
            .portfolio-extra-section { width:calc(100% - 32px) !important; }
            .extra-card { min-width:0 !important;overflow-wrap:anywhere; }
            .extra-card h3 { font-size:clamp(21px,5vw,27px) !important; }
            .recognition-filters { gap:8px !important; }
            .recognition-filters button { white-space:normal !important; }
            .timeline-item { min-width:0 !important;overflow-wrap:anywhere; }
          }
          @media(max-width:480px){
            .nav { padding-left:16px !important;padding-right:16px !important; }
            .nav-contact { font-size:11px !important; }
            .hero h1 { font-size:clamp(36px,10vw,56px) !important; }
            .extra-card { padding:20px !important; }
            .association-pill { font-size:12px; }
          }
        `}</style>
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
          <a href="#resumes">Résumés</a>
          <span>|</span>
          <a href="#experience">Experience</a>
          <span>|</span>
          <a href="#recognition">Recognition</a>
          <span>|</span>
          <a href="#community">Community</a>
          <span>|</span>
          <a href="#about">About</a>
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
            {(showFullTimeline ? timeline : timeline.slice(0, 3)).map((item) => {
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
          {timeline.length > 3 && (
            <button className="section-expand-button" type="button"
              aria-expanded={showFullTimeline}
              onClick={() => setShowFullTimeline(current => !current)}>
              {showFullTimeline ? "Show fewer experiences" : `Show all ${timeline.length} timeline entries`}
              <span aria-hidden="true">{showFullTimeline ? " ↑" : " ↓"}</span>
            </button>
          )}
        </section>

        <PortfolioAdditions />

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section className="coming-section" id="about">
          <div className="section-label">ABOUT</div>

          <h2>A little more about me.</h2>

          <div className="about-copy">
            <p>
              I studied computer science at UCCS and now work in cyber mission analysis. I enjoy the technical side of my work, especially figuring out how systems connect, troubleshooting problems, and making complicated information easier to use.
            </p>
            <p>
              My career has given me the opportunities to diverge across multiple paths of interest, from engineering and cybersecurity to healthcare, research, and climbing. I like being able to bring what I learn in one area into something completely different.
            </p>
            <p>
              Outside of work, I'm usually climbing, routesetting, coaching, or working on a project I thought would be fun to build. I care a lot about making climbing more accessible and creating opportunities for people to try something new.
            </p>
            <p>
              This site is a place to keep track of the things I've built, the communities I've been part of, and the projects I want to keep improving.
            </p>
          </div>
        </section>

        <section className="portfolio-extra-section" id="associations" aria-labelledby="associations-heading">
          <div className="section-label">ASSOCIATIONS & ORGANIZATIONS</div>
          <h2 id="associations-heading">Organizations I've been part of.</h2>
          <p className="extra-intro">A selection of academic, professional, athletic, and community organizations I've participated in, supported, or helped lead.</p>
          <div className="associations-list">
            {[
              "Aerospace States Association (ASA)",
              "AMTA Mock Trial · Award Recipient",
              "American Institute of Aeronautics and Astronautics (AIAA)",
              "Asian Vibes in Denver (AVID)",
              "Centura Diversity & Inclusion Council",
              "Colorado Space Business Roundtable (CSBR)",
              "Colorado Space Grant Consortium (COSGC) · Scholarship recipient & research presenter",
              "Fellowship of Christian Athletes (FCA)",
              "Phi Alpha Delta (P.A.D.)",
              "Springs Rescue Mission · Volunteer",
              "Society of Women Engineers (SWE)",
              "UCCS Pre-Health Society",
              "UCCS Pre-Law Society",
              "UCCS Climbing Club · Founder & President (USA Climbing Collegiate)",
              "USA Climbing · Athlete, Coach & Routesetter",
              "Escape Climbing · Escape Athlete",
              "The Denver Post · Featured in competition coverage",
              "The Scribe · Featured in university news",
              "Climbing Magazine · Featured climber",
              "Climbing Business Journal · Routesetting podcast invitation",
              "The Impact Driver Podcast · Invited routesetting guest (upcoming)",
            ].map((name) => <span className="association-pill" key={name}>{name}</span>)}
          </div>
        </section>

        <section className="portfolio-extra-section" id="featured-organizations" aria-labelledby="featured-organizations-heading">
          <div className="section-label">PUBLICATIONS & ORGANIZATIONS</div>
          <h2 id="featured-organizations-heading">Featured in, involved with & connected to.</h2>
          <p className="extra-intro">Selected publications, climbing organizations, and professional connections. Each label identifies the relationship; logos do not imply sponsorship or endorsement.</p>
          <div className="organization-logo-grid">
            {partnerLogos.map(item => <div className="organization-logo-card" key={item.file}>
              <img src={assetPath(`/images/${item.file}`)} alt={`${item.name} logo`} loading="lazy" style={item.file === "impactdriver.png" ? { background: "#080808", padding: "8px" } : undefined} />
              <strong>{item.name}</strong>
              <span>{item.context}</span>
            </div>)}
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
