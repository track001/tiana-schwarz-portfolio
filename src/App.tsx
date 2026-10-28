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
      "The A.R.E.S. Project explored wearable inertial measurement units (IMUs) for tracking human movement and evaluating skeletal loading during off-planet operations. Our team built and tested a multi-sensor Arduino system and used MATLAB for motion analysis. We presented the research at the Colorado Space Grant Consortium and received an award recognizing the project.",
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
      assetPath("/images/csogc-present.jpeg"),
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
    organization: "PACIFIC TECHNOLOGIES & SOLUTIONS / GOLDBELT",
    title: "MRT-C Mission Analyst",
    location: "Colorado Springs, CO",
    summary:
      "Cyber mission analyst supporting the U.S. Department of Defense (DoD), specifically Combat Forces Command (CFC), through cyber mission assurance, cyber terrain assessments, and operational risk analysis.",
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
      "Cybersecurity test and evaluation supporting DoD MILSATCOM (Military Satellite Communications) systems, which provide secure, resilient satellite connectivity for military operations when terrestrial networks are unavailable or insufficient.",
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
  images?: string[];
};

const credentials: Credential[] = [
  { title: "CompTIA Security+ (SY0-601)", issuer: "CompTIA", date: "May 29, 2024", validity: "Valid through May 29, 2027", detail: "Tiana Schwarz earned the CompTIA Security+ (SY0-601) certification, validating foundational knowledge of threats, vulnerabilities, security architecture, security operations, and risk management. She is currently working through CompTIA CertMaster continuing education renewal materials to renew the certification before its May 29, 2027 expiration; renewal is in progress, not yet completed.", sortDate: "2024-05-29" },
  { title: "Level 2 Youth Coach", issuer: "USA Climbing", date: "November 2023", validity: "Membership through August 14, 2027", detail: "USA Climbing Level 2 Youth Coach with experience developing youth athletes, guiding structured practices, supporting competition preparation, and fostering a positive team environment.", sortDate: "2023-11-01" },
  { title: "Level 1 Routesetter", issuer: "USA Climbing", date: "July 12, 2026", validity: "Routesetter membership through July 9, 2027", detail: "With support from the Amy Stone Project, Tiana Schwarz completed USA Climbing Level 1 Routesetter training at First Ascent Block 37 in Chicago, Illinois, developing skills in movement design, route development, setting practices, and competition routesetting.", sortDate: "2026-07-12", images: ["l1-part1.jpg", "l1-part2.jpg", "l1-part3.jpg"] },
  { title: "Para Routesetting", issuer: "USA Climbing", date: "April 17, 2026", detail: "Tiana Schwarz completed a three-day USA Climbing Para Routesetting course focused on making climbing accessible to athletes with a wide range of physical, visual, and neurological impairments. Para routesetting adapts movement, hold selection, reach, body positioning, route progression, and safety considerations to different functional abilities without removing meaningful challenge. Having experienced multiple serious knee injuries and three knee surgeries involving ACL, PCL, and meniscus repairs during her climbing career, this work is especially personal to her: inclusive setting can help more people find a path into climbing and continue participating after major physical setbacks.", sortDate: "2026-04-17", images: ["parasetting-1.jpg", "parasetting-2.jpg"] },
  { title: "CPR / AED / First Aid", issuer: "National CPR Foundation", date: "August 13, 2026", validity: "Renewal August 13, 2028", detail: "Tiana Schwarz completed CPR, AED, and First Aid training covering emergency response, lifesaving techniques, and basic first aid procedures.", sortDate: "2026-08-13" },
  { title: "Cyber Security Analyst Virtual Experience", issuer: "Telstra / Forage", date: "July 10, 2023", detail: "Tiana Schwarz completed the Telstra Cyber Security Analyst program, gaining hands-on experience in malware attack response, firewall rule creation, Python-based mitigation, and incident post-mortem documentation.", sortDate: "2023-07-10" },
  { title: "SketchUp Fundamentals", issuer: "SketchUp", date: "Date not specified", detail: "Tiana Schwarz earned the SketchUp Fundamentals (Desktop) certification, validating skills in precision modeling, texturing, and scene creation using the desktop version of SketchUp. The certification confirms her ability to navigate the full toolset and produce cross-platform visualizations." },
];

type RecognitionCategory = "Writing & Media" | "Academic Honors" | "Climbing & Athletics";
type Recognition = {
  images?: string[];
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
  { title: "AMTA Mock Trial · Outstanding Witness", source: "American Mock Trial Association · February 2022", category: "Academic Honors", sortDate: "2022-02-01", description: "Recognized as an Outstanding Witness through AMTA’s ballot process in February 2022. AMTA-certified judges scored her 8/10 for Direct Examination and 9/10 for Cross Examination. The role required memorization, familiarity with courtroom proceedings and terminology, and effective communication with attorney roles." },
  { title: "Between Chalk and Code: Lessons from Climbing and Cyber", source: "Reinvented Magazine · ellianysplese · June 30, 2026", category: "Writing & Media", sortDate: "2026-06-30", description: "Tiana Schwarz authored an article exploring how climbing has shaped her approach to cybersecurity, problem-solving, perseverance, and learning through difficult challenges.", url: "https://www.reinventedmagazine.com/post/between-chalk-and-code-lessons-from-climbing-and-cyber", images: ["betweenchalkandcode.png"] },
  { title: "Climbing Club Gains Popularity in Its First Semester", source: "The Scribe · Paul Czarnecki · September 7, 2022", category: "Climbing & Athletics", description: "Tiana Schwarz founded and served as president of this iteration of the UCCS Climbing Club, partnering with the on-campus SOLE recreation center and Springs Climbing Center to make climbing more accessible to college students. The club welcomed both recreational and competitive climbers while representing UCCS in USA Climbing Collegiate competitions.", url: "https://scribe.uccs.edu/climbing-club-gains-popularity-in-its-first-semester/" , sortDate: "2022-09-07" },
  { title: "Springs Climbing Center Continues to Push Students to Greater Heights", source: "The Scribe · Taylor B · November 27, 2020", category: "Climbing & Athletics", description: "Tiana Schwarz was featured in The Scribe, the University of Colorado Colorado Springs student newspaper, in its coverage of Springs Climbing Center and the local student climbing community.", url: "https://scribe.uccs.edu/springs-climbing-center-continues-to-push-students-to-greater-heights/" , sortDate: "2020-11-27" },
  { title: "The Impact Driver Podcast · Upcoming Guest", source: "The Impact Driver · Climbing Business Journal · Upcoming / Not Yet Published", category: "Writing & Media", description: "Tiana Schwarz has been invited to appear on The Impact Driver Podcast, a Climbing Business Journal podcast focused on routesetting and the people, ideas, and challenges shaping the routesetting industry. The planned conversation will draw on her experience as a routesetter and climbing coach. Once released, the episode is expected to be available in audio on Apple Podcasts, Spotify, and Podbean, with a video version on YouTube and a written transcript. Recording and publication details are pending." },
  { title: "UCCS A.R.E.S. Project Wins Space Grant Prize", source: "The Scribe · SCRIBEADMIN · May 2, 2022", category: "Academic Honors", description: "Tiana Schwarz and the UCCS A.R.E.S. Project team presented their research on wearable inertial measurement units (IMUs) at the Colorado Space Grant Consortium and received an award for their work. The project investigated how wearable sensors could measure movement and help study physical conditions during space operations.", url: "https://scribe.uccs.edu/uccs-ares-project-wins-prize-from-colorado-space-grant-consortium/" , sortDate: "2022-05-02" },
  { title: "Alumni Spotlight: Class of 2018", source: "SkyView Academy · November 4, 2025", category: "Academic Honors", description: "SkyView Academy featured alumna Tiana Schwarz (Class of 2018), highlighting her academic journey, professional work in cybersecurity, and continued involvement in climbing and community activities.", url: "https://www.skyviewacademy.org/p/~board/alumni/post/alumni-spotlight-tiana-schwarz-class-of-2018", sortDate: "2025-11-04" },
  { title: "2022–2023 Colorado Space Grant Consortium Institutional Scholarship", source: "Colorado Space Grant Consortium", category: "Academic Honors", sortDate: "2022-08-01", description: "Tiana Schwarz was selected for the 2022–2023 Colorado Space Grant Consortium Institutional Scholarship, part of NASA's National Space Grant College and Fellowship Program supporting future scientists, engineers, and leaders." },
  { title: "Fall 2023 President's List", source: "UCCS Communique", category: "Academic Honors", description: "Tiana Schwarz was recognized on the Fall 2023 President's List at the University of Colorado Colorado Springs for achieving a 4.0 semester GPA in the College of Engineering and Applied Science.", url: "https://communique.uccs.edu/?p=153687" },
  { title: "Fall 2021 President's and Dean's Lists", source: "UCCS Communique", category: "Academic Honors", description: "UCCS published academic honors for the Fall 2021 semester. This article is one of several university announcements documenting Tiana Schwarz’s Dean’s List and President’s List recognitions throughout her Computer Science studies.", url: "https://communique.uccs.edu/?p=137114" },
  { title: "Fall 2019 President's and Dean's Lists", source: "UCCS Communique", category: "Academic Honors", description: "UCCS published academic honors for the Fall 2019 semester, part of the broader record of Dean’s List and President’s List distinctions Tiana Schwarz earned during her undergraduate studies.", url: "https://communique.uccs.edu/?p=118157" },
  { title: "Crux: 9 Photos That Capture the Power and Struggle of a Climb's Hardest Move", source: "Climbing Magazine · Chris Thai · August 31, 2026", category: "Climbing & Athletics", sortDate: "2026-08-31", description: "Tiana Schwarz was featured in Climbing Magazine's Crux photo contest as an honorable mention in Chris Thai's photograph, Flo Storm Crux. The image captures Schwarz preparing for the dynamic crux of Flo Storm (V8) in Heaven's Gate near Eleven Mile Canyon, Colorado, where the defining move requires throwing to the next hold and cutting feet.", url: "https://www.climbing.com/culture-climbing/crux-winning-photo-summer-2026-contest/" },
  { title: "USA Climbing Competition Results & Rankings", source: "USAC Database · Athlete profile", category: "Climbing & Athletics", description: "USA Climbing collegiate competition record, including first-place finishes in the 2024 Collegiate National Boulder qualifier and final (Women's Intermediate), first place at the 2024 Collegiate divisional Boulder competition, and additional collegiate qualifying results. Athlete ID: 29690465. The linked database provides event-by-event rankings, including Boulder and Lead/Top Rope tabs.", url: "https://usac.climb8a.com/climber/29690465", sortDate: "2024-05-24" },
  { title: "2024 Collegiate National Championships · May 28, 2024", source: "USA Climbing · May 28, 2024", category: "Climbing & Athletics", description: "At her first Collegiate Nationals, delayed by multiple knee surgeries, Tiana Schwarz placed first in both qualifiers and finals for Bouldering and Sport Climbing in the Intermediate category at the 2024 USA Climbing Collegiate National Championships. As the inaugural year for the Intermediate division, her performance marked a meaningful return to competitive climbing.", url: "https://usaclimbing.org/news/2024-collegiate-national-championships-conclude-in-arizona/", sortDate: "2024-05-28", images: ["2024-championships.jpg"] },
  { title: "Eagle Valley Shines at Weekend of Mixed Climbing Events", source: "Vail Daily · Veronica Kuffel · December 7, 2023", category: "Climbing & Athletics", description: "Tiana Schwarz of the University of Colorado Colorado Springs won the women’s lead/top-rope category at a weekend of mixed climbing events hosted by Eagle Climbing & Fitness.", url: "https://www.vaildaily.com/news/eagle-climbing-and-fitness-hosts-weekend-of-mixed-climbing-events-eagle-valley-middle-school-climber-tops-individual-leaderboard/" , sortDate: "2023-12-07" },
  { title: "SkyView Academy High School Track & Field Records", source: "Athletic.net", category: "Climbing & Athletics", description: "Tiana Schwarz is the current SkyView Academy record holder in the 400m, 800m, 4×400m relay, 4×800m relay, and SMR 800m relay, and ranks third all-time in the 200m, with primary focus on the 400m and 800m. Last updated August 2026.", url: "https://www.athletic.net/team/42708/track-and-field-outdoor/2026/team-records/f" },
  { title: "Great Southwest Classic Colorado Entry List", source: "MileSplit Colorado · Alan Versaw · May 27, 2015", category: "Climbing & Athletics", description: "Tiana Schwarz was selected to represent Colorado at the prestigious Great Southwest Track & Field Classic, an invite-only meet at the University of New Mexico that draws top high school athletes from across the nation. Competing in the 800m, she ran a 2:26.03 against elite competition in this nationally recognized multi-day event.", url: "https://co.milesplit.com/articles/155390/updated-great-southwest-entry-list-for-colorado" , sortDate: "2015-05-27" },
  { title: "Colorado Class 3A Volleyball Statistical Leaders", source: "Colorado Preps", category: "Climbing & Athletics", description: "At the Class 3A volleyball level in Colorado, Tiana Schwarz ranked seventh in digs with 368 total, placing her among the elite dig leaders in the state that Fall 2017 season.", url: "https://coloradopreps.com/class-3a-volleyball-statistical-leaders/" },
  { title: "Volleyball Players to Watch: SkyView Academy", source: "Colorado Community Media", category: "Climbing & Athletics", description: "Colorado Community Media featured Tiana Schwarz in coverage of SkyView Academy volleyball and the team's competitive development.", url: "https://www.coloradocommunitymedia.com/stories/volleyball-squads-work-in-ways-like-football-teams,253643/" },
  { title: "Colorado 3A Girls Track and Field State Meet Results 2015", source: "The Denver Post · May 16, 2015", category: "Climbing & Athletics", description: "Tiana Schwarz placed sixth in the 400m dash with a time of 1:00.04. In the 800m, despite suffering a fall mid-race that required immediate stitches, she pushed through to finish 16th, clocking a 64-second opening lap. She also anchored SkyView Academy's 4×800m relay team to a seventh-place finish, earning valuable points for the school.", url: "https://www.denverpost.com/2015/05/16/colorado-3a-girls-track-and-field-state-meet-results-2015/", sortDate: "2015-05-16" },
  { title: "Top Small-School Track Performances", source: "MileSplit Colorado · Alan Versaw · April 13, 2015", category: "Climbing & Athletics", description: "Coverage of Colorado small-school track and field performances during the 2015 season.", url: "https://co.milesplit.com/articles/151240/top-small-school-performances-of-the-past-week" , sortDate: "2015-04-13" },
  { title: "2016 Colorado State Track Championships", source: "MileSplit Colorado", category: "Climbing & Athletics", description: "Tiana Schwarz competed in the 2016 Colorado State Track and Field Championships as part of SkyView Academy's 4×800m relay team, which finished 14th in 10:43.30.", url: "https://co.milesplit.com/meets/220074-colorado-state-track-and-field-championships-2016/results/453815/raw" },
];

type CommunityItem = {
  images?: string[];
  links?: { label: string; url: string }[];
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
  { title: "Assisted Living Community Project", category: "COMMUNITY DEVELOPMENT", dateLabel: "January–May 2018", sortDate: "2018-05-01", organization: "Big Idea Project · La Veta, Colorado · The World Journal, March 29, 2018 · Courtesy Beckie Ferrell", url: "https://worldjournalnewspaper.com/la-veta-village-gifted-again-with-youth/", linkLabel: "Read World Journal feature ↗", description: "Participated in SkyView Academy’s Big Idea Project at La Veta Village, helping interview four senior residents about their lives, restore a garden, and clean and remove demolition debris to prepare the community space for future events. The team documented residents’ stories through video and a book, and its service was featured in The World Journal on March 29, 2018." },
  { title: "Alumni Ambassador", category: "AEROSPACE MENTORSHIP", dateLabel: "August 2024–Present", sortDate: "2026-10-27", organization: "Colorado Space Business Roundtable (CSBR) · Alumni Ambassador", description: "Support aerospace and technology networking, mentorship, career guidance, and outreach for students and early-career professionals." },
  { title: "Volunteering in Colorado Springs", category: "COMMUNITY RESOURCE", dateLabel: "Ongoing", sortDate: "2026-10-27", description: "I maintain a GitHub collection of local volunteer opportunities and organizations focused on homelessness, healthcare access, food insecurity, and older adults.", url: "https://github.com/track001/VolunteeringinCOS", linkLabel: "Explore volunteering resources ↗" },
  { title: "Women's Climb Night · Fall Edition", category: "CLIMBING COMMUNITY", dateLabel: "September 26, 2026", sortDate: "2026-09-26", organization: "Springs Climbing Center · Colorado Springs", description: "Co-hosted a reserved-gym women's climbing event focused on connection, mentorship, and community. Across both editions, more than 60 women participated.", images: ["2womenclimbnight-part1.jpg", "2womenclimbnight-part2.jpg", "2womenclimbnight-part3.jpg", "2womenclimbnight-part4.jpg"], links: [{ label: "Fall Edition · Photo album ↗", url: "https://photos.app.goo.gl/rgmw6X1LwNFdekPc9" }] },
  { title: "Women's Climb Night · Galentine's Edition", category: "CLIMBING COMMUNITY", dateLabel: "February 13, 2026", sortDate: "2026-02-13", organization: "Springs Climbing Center · Colorado Springs", description: "Co-hosted a Galentine's climbing night, creating a welcoming, reserved-gym space for women to climb together and build community.", images: ["1womenclimbnight-part1.jpg", "1womenclimbnight-part2.jpg", "1womenclimbnight-part3.jpg", "1womenclimbnight-part4.jpg"], links: [{ label: "Galentine's Edition · Photo album ↗", url: "https://photos.app.goo.gl/5CsNSrwEaoYZDmaWA" }] },
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
  { name: "The Denver Post", file: "denverpost.png", context: "State track championship coverage", url: "https://www.denverpost.com/2015/05/16/colorado-3a-girls-track-and-field-state-meet-results-2015/" },
  { name: "USA Climbing", file: "usaclimbing-logo.png", context: "Collegiate national championships, coaching & routesetting", url: "https://usaclimbing.org/news/2024-collegiate-national-championships-conclude-in-arizona/" },
  { name: "Colorado Space Business Roundtable", file: "csbr.png", context: "Alumni ambassador", url: "https://coloradosbr.org/" },
  { name: "The Scribe", file: "the-scribe.png", context: "UCCS student newspaper · A.R.E.S. research feature", url: "https://scribe.uccs.edu/uccs-ares-project-wins-prize-from-colorado-space-grant-consortium/" },
  { name: "Escape Climbing", file: "escape-climbing.png", context: "Escape Athlete · Athlete support", url: "https://www.instagram.com/p/DPmgpBWktGs/?psln=MWJ5aDg1aXVrM2dxYQ==" },
  { name: "Climbing Business Journal", file: "climbingbusinessjournal.png", context: "Upcoming Impact Driver routesetting podcast · Pending" },
  { name: "Climbing Magazine", file: "climbing-magazine.png", context: "Featured climber · Chris Thai photo honorable mention", url: "https://www.climbing.com/culture-climbing/crux-winning-photo-summer-2026-contest/" },
  { name: "The Impact Driver Podcast", file: "impactdriver.png", context: "Invited guest · Routesetting podcast · Episode pending" },
  { name: "Colorado Space Grant Consortium (COSGC)", file: "csgc.jpeg", context: "Scholarship recipient · A.R.E.S. research presenter", url: "https://scribe.uccs.edu/uccs-ares-project-wins-prize-from-colorado-space-grant-consortium/" },
];

function MiniPhotoSlides({ images, label }: { images?: string[]; label: string }) {
  const [index, setIndex] = useState(0);
  if (!images?.length) return null;
  return (
    <div className="mini-photo-slides" aria-label={`${label} photo gallery`}>
      <img src={assetPath(`/images/${images[index % images.length]}`)} alt={`${label}, photo ${index % images.length + 1} of ${images.length}`} loading="lazy" />
      {images.length > 1 && <div className="mini-photo-controls">
        <button type="button" onClick={() => setIndex(i => (i - 1 + images.length) % images.length)} aria-label={`Previous ${label} photo`}>‹</button>
        <span>{index % images.length + 1} / {images.length}</span>
        <button type="button" onClick={() => setIndex(i => (i + 1) % images.length)} aria-label={`Next ${label} photo`}>›</button>
      </div>}
    </div>
  );
}

function PortfolioAdditions() {
  const [category, setCategory] = useState<"All" | RecognitionCategory>("All");
  const [certTime, setCertTime] = useState<Timeframe>("All Time");
  const [recognitionTime, setRecognitionTime] = useState<Timeframe>("All Time");
  const [communityTime, setCommunityTime] = useState<Timeframe>("All Time");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const toggleSection = (name: string) => setExpandedSections(current => ({ ...current, [name]: !current[name] }));
  const previewCount = 4;
  const categories: Array<"All" | RecognitionCategory> = ["All", "Writing & Media", "Academic Honors", "Climbing & Athletics"];
  const visibleCredentials = [...recentOnly(credentials, certTime)].sort((a, b) => { const order = ["CompTIA Security+ (SY0-601)", "CPR / AED / First Aid", "Level 1 Routesetter", "Para Routesetting", "Level 2 Youth Coach"]; const ai = order.indexOf(a.title); const bi = order.indexOf(b.title); return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi); });
  const datedRecognition = newestFirst(recentOnly(recognition.filter(item => category === "All" || item.category === category), recognitionTime));
  // The unfiltered landing view intentionally mixes writing, academic honors,
  // and climbing achievements instead of showing only the most recent dates.
  const featuredRecognitionTitles = [
    "Alumni Spotlight: Class of 2018",
    "2022–2023 Colorado Space Grant Consortium Institutional Scholarship",
    "Between Chalk and Code: Lessons from Climbing and Cyber",
    "2024 Collegiate National Championships · May 28, 2024",
  ];
  const visibleRecognition = category === "All" && recognitionTime === "All Time"
    ? [
        ...featuredRecognitionTitles.flatMap(title => datedRecognition.filter(item => item.title === title)),
        ...datedRecognition.filter(item => !featuredRecognitionTitles.includes(item.title)),
      ]
    : datedRecognition;
  const communitySorted = newestFirst(recentOnly(communityItems, communityTime));
  const womensNightTitles = ["Women's Climb Night · Fall Edition", "Women's Climb Night · Galentine's Edition"];
  const visibleCommunity = [
    ...womensNightTitles.flatMap(title => communitySorted.filter(item => item.title === title)),
    ...communitySorted.filter(item => !womensNightTitles.includes(item.title)),
  ];

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
          <MiniPhotoSlides images={item.images} label={item.title} />
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
          <MiniPhotoSlides images={item.images} label={item.title} />
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

          <MiniPhotoSlides images={item.images} label={item.title} />
          {item.links?.map(link => <a key={link.url} className="extra-link" href={link.url} target="_blank" rel="noopener noreferrer" style={{display:"block",marginTop:8}}>{link.label}</a>)}
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

type CompetitionResult = { date: string; name: string; location: string; qualifiers: string; finals: string; note?: string; url?: string };
const climbingCompetitions: CompetitionResult[] = [
  { date: "October 6, 2026", name: "Board Battles · Qualifiers", location: "The Spot Denver · Denver, CO", qualifiers: "Results not provided", finals: "Scheduled for early 2027", note: "Qualifier event held October 6, 2026; finals expected in early 2027" },
  { date: "August 29, 2026", name: "BFL 6", location: "Longmont Climbing Collective · Longmont, CO", qualifiers: "1st", finals: "6th", note: "", url: "https://www.youtube.com/watch?v=nO47bFLzbH0" },
  { date: "August 7, 2026", name: "Campus Comp", location: "The Campus Boulder · Boulder, CO", qualifiers: "3rd overall", finals: "No separate finals", note: "Overall result determined by qualifiers" },
  { date: "May 9, 2026", name: "Heart & Soul", location: "Denver Bouldering Club · Denver, CO", qualifiers: "Outside top 6", finals: "Did not qualify", note: "Only the top six advanced; remaining qualifying results were not published" },
  { date: "January 31, 2026", name: "New Year's Resolution (NYR) Competition", location: "Black Rock Bouldering Gym · Phoenix, AZ", qualifiers: "4th", finals: "Not recorded", note: "" },
  { date: "December 6, 2025", name: "Pure Pressure", location: "Pure Bouldering · Colorado Springs, CO", qualifiers: "1st", finals: "1st" },
  { date: "November 7, 2025", name: "Seattle BoulderFest", location: "Seattle Bouldering Project · Seattle, WA", qualifiers: "8th", finals: "Did not qualify", note: "Top six advanced to finals" },
  { date: "September 28, 2025", name: "CityROCK Rock and Rock", location: "CityROCK · Colorado Springs, CO", qualifiers: "6th", finals: "5th" },
  { date: "September 25, 2025", name: "Minneapolis BoulderFest", location: "Minneapolis, MN · gym TBD", qualifiers: "4th", finals: "5th" },
  { date: "September 13, 2025", name: "Heart of Stone", location: "Loveland Climbing Collective · Loveland, CO", qualifiers: "8th", finals: "Did not qualify" },
  { date: "August 2, 2025", name: "Hotter Than Chicken (HTC)", location: "Climb Kraft · Nashville, TN", qualifiers: "2nd", finals: "3rd" },
  { date: "May 17, 2025", name: "SCC Community Comp", location: "Springs Climbing Center · Colorado Springs, CO", qualifiers: "Not available", finals: "3rd overall", note: "Overall placement recorded; qualifier placement not provided" },
  { date: "May 3, 2025", name: "Clash for the Cash", location: "The Crag TN · Franklin, TN", qualifiers: "Not available", finals: "Did not compete", note: "Qualified for finals but did not attend due to graduation" },
  { date: "October 26, 2024", name: "Bouldergeist", location: "Canyons · Texas", qualifiers: "2nd", finals: "1st" },
  { date: "May 28, 2024", name: "USA Climbing Collegiate Nationals · Boulder · Women's Intermediate", location: "Arizona · USA Climbing", qualifiers: "1st", finals: "1st", url: "https://usac.climb8a.com/climber/29690465" },
  { date: "May 28, 2024", name: "USA Climbing Collegiate Nationals · Lead / Top Rope · Women's Intermediate", location: "Arizona · USA Climbing", qualifiers: "1st", finals: "1st", url: "https://usac.climb8a.com/climber/29690465" },
  { date: "April 19, 2024", name: "SCC Community Dyno Competition", location: "Springs Climbing Center · Colorado Springs, CO", qualifiers: "Not available", finals: "3rd overall" },
  { date: "2024 · date TBD", name: "BIPOC", location: "Gym / location TBD", qualifiers: "1st", finals: "1st" },
  { date: "2024 · date TBD", name: "USA Climbing Collegiate Divisional · Boulder", location: "Gym / location TBD", qualifiers: "Not available", finals: "1st", url: "https://usac.climb8a.com/climber/29690465" },
  { date: "2024 · date TBD", name: "USA Climbing Collegiate Divisional · Lead / Top Rope", location: "Gym / location TBD", qualifiers: "Not available", finals: "Not available", url: "https://usac.climb8a.com/climber/29690465" },
  { date: "September 3, 2023", name: "BFL 4", location: "BFL Gym · Denver, CO", qualifiers: "Not available", finals: "Not available", url: "https://bflclimbing.com/?venue=bfl3" },
  { date: "2023 · date TBD", name: "BIPOC", location: "Gym / location TBD", qualifiers: "1st", finals: "1st" },
];

const competitionDateOrder = (date: string): number => {
  const exact = Date.parse(date);
  if (Number.isFinite(exact)) return exact;
  const year = date.match(/\b20\d{2}\b/);
  return year ? new Date(Number(year[0]), 0, 1).getTime() : 0;
};
const competitionsNewestFirst = [...climbingCompetitions].sort((a, b) => competitionDateOrder(b.date) - competitionDateOrder(a.date));

export default function App() {
  const [openTimelineItem, setOpenTimelineItem] = useState<string | null>(null);
  const [showFullTimeline, setShowFullTimeline] = useState(false);
  const [showAllOrganizations, setShowAllOrganizations] = useState(false);

  const toggleTimelineItem = (id: string) => {
    setOpenTimelineItem((current) => (current === id ? null : id));
  };

  return (
    <div className="site">

        <style>{`

          .mini-photo-slides{margin:18px auto 12px;width:min(100%,520px);max-width:100%;overflow:hidden;border-radius:7px;border:1px solid rgba(240,158,109,.22);background:#161313}
          .mini-photo-slides img{display:block;width:100%;height:clamp(220px,30vw,340px);object-fit:contain;object-position:center;background:#171414}
          .mini-photo-controls{display:flex;justify-content:center;align-items:center;gap:18px;padding:8px;color:#eadbd0;font-size:12px}
          .mini-photo-controls button{cursor:pointer;border:1px solid rgba(240,158,109,.5);border-radius:5px;background:rgba(56,35,29,.8);color:#ffe1c8;font-size:24px;width:36px;height:30px;line-height:22px}
          .mini-photo-controls button:hover{background:rgba(134,70,46,.75)}
          .competition-disclosure{margin:24px 0 36px;border:1px solid rgba(240,158,109,.3);border-radius:8px;background:rgba(22,16,16,.8);overflow:hidden}
          .competition-disclosure summary{padding:19px 22px;cursor:pointer;font-weight:650;color:#f0c7a9}
          .competition-disclosure summary:hover{background:rgba(240,158,109,.08)}
          .competition-table-wrap{overflow-x:auto}
          .competition-table{width:100%;border-collapse:collapse;min-width:710px;font-size:13px}
          .competition-table th,.competition-table td{padding:12px 14px;border-top:1px solid rgba(240,158,109,.17);text-align:left;vertical-align:top}
          .competition-table th{color:#f2c5a2;background:rgba(240,158,109,.06);font-size:12px}
          .competition-table td{color:#ded2ca}
          .competition-table td strong{display:block;color:#f3e8e0;font-weight:600}
          .competition-missing{background:#ffe173;color:#382900;border-radius:3px;padding:2px 5px;font-weight:700;display:inline-block}
          .competition-table td small{display:block;margin-top:5px;color:#ad9c92;line-height:1.5}
          .competition-table td a{display:inline-block;margin-top:5px;color:#eeb285}
          .section-expand-button{display:block;width:fit-content;max-width:100%;margin:25px auto 4px;padding:13px 22px;border:1px solid var(--red-bright,#e97759);border-radius:30px;background:rgba(40,25,23,.75);color:var(--ivory,#f3e9e1);font:inherit;font-size:13px;font-weight:600;cursor:pointer;transition:background .2s,border-color .2s}
          .section-expand-button:hover{background:rgba(100,44,34,.55)}
          .section-expand-button:focus-visible{outline:2px solid var(--amber,#e7b17a);outline-offset:3px}
          .organization-logo-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin:24px 0 45px}
          .organization-logo-card{min-width:0;display:flex;flex-direction:column;align-items:center;text-align:center;gap:9px;padding:20px 12px;border:1px solid var(--border,#40302c);background:rgba(27,21,20,.65);border-radius:6px}
          .organization-logo-link{text-decoration:none;cursor:pointer;transition:transform .2s ease,border-color .2s ease}
          .organization-logo-link:hover{transform:translateY(-3px);border-color:var(--red-bright,#e97759)}
          .organization-logo-link:focus-visible{outline:2px solid var(--amber,#e7b17a);outline-offset:3px}
          .organization-link-hint{margin-top:auto;color:var(--red-bright,#e97759)!important;font-weight:600}
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
            .extra-card h3 { font-size:clamp(19px,4vw,23px) !important; line-height:1.25; }
            .recognition-filters { gap:8px !important; }
            .recognition-filters button { white-space:normal !important; }
            .timeline-item { min-width:0 !important;overflow-wrap:anywhere; }
          }
          /* Restore compact typography without altering the established desktop design. */
          .extra-card h3 { font-size:clamp(20px,2vw,24px); line-height:1.25; }
          .extra-card p, .extra-card li { font-size:14px; line-height:1.65; }
          .portfolio-extra-section { max-width:100%; }
          .resume-preview iframe { max-width:100%; }
          .project-image-wrap, .project-card { min-width:0; }
          @media(max-width:800px){
            .extra-card h3 { font-size:clamp(19px,4vw,23px) !important; }
            .extra-card p, .extra-card li { font-size:14px; }
            .mini-photo-slides img { height:clamp(180px,48vw,300px); }
            .competition-table-wrap { -webkit-overflow-scrolling:touch; }
          }
          @media(max-width:480px){
            .nav { padding-left:16px !important;padding-right:16px !important; }
            .nav-contact { font-size:11px !important; }
            .hero h1 { font-size:clamp(34px,9vw,48px) !important; }
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
              <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "clamp(16px, 1.7vw, 20px)", margin: "0 0 8px" }}>
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

          {/* Crescent sits just outside the portrait rim, like a cradle. */}
          <style>{`
            .hero-photo-wrap { isolation: isolate; overflow: visible; }
            .hero-photo-wrap::after {
              content: "";
              position: absolute;
              width: 264px;
              height: 264px;
              top: -13px;
              left: 50%;
              transform: translateX(-50%) rotate(-12deg);
              border-radius: 50%;
              box-shadow: 23px 8px 0 -7px rgba(223, 163, 108, 0.70),
                          29px 10px 25px -14px rgba(223, 101, 78, 0.28);
              pointer-events: none;
              z-index: 0;
            }
            .hero-photo-wrap .hero-photo { position: relative; z-index: 1; }
            .hero-photo-wrap .hero-status { position: relative; z-index: 1; }
            .space-background::before { display: none; }
            @media (max-width: 700px) {
              .hero-photo-wrap::after { width: 196px; height: 196px; top: -9px; box-shadow: 17px 6px 0 -5px rgba(223,163,108,.70), 22px 8px 19px -12px rgba(223,101,78,.28); }
            }
          `}</style>
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
                <div style={{marginTop:18, border:"1px solid rgba(240,158,109,.25)", borderRadius:8, overflow:"hidden", background:"#fff"}}>
                  <iframe src={`${resume.file}#toolbar=0&navpanes=0&view=FitH`} title={`${resume.title} PDF preview`} loading="lazy" style={{width:"100%",height:430,border:0,display:"block"}} />
                </div>
                <p style={{fontSize:12,opacity:.7}}>PDF preview. Use View Résumé if your browser does not display embedded PDFs.</p>
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
              Outside of work, I'm usually climbing, routesetting, coaching, or working on a project I thought would be fun to build. I'm passionate about mentorship and routesetting, and about making climbing more accessible to others. I've climbed up to V11, flashed multiple V10s, and am a board climber at heart. I love creating opportunities for people to try something new and grow through climbing. Being featured in Tension Climbing’s Board Report meant a lot to me, especially because the board climbing community is something I hold dearly.
            </p>
            <p>
              I proactively seek opportunities to learn from routesetters and other setting teams through clinics, commercial setting, and competitions. In July 2026, I set commercially at First Ascent Block 37 in Chicago while learning from routesetter Brit Booth. I have also learned from Holly Chen at The Spot Denver and set a citizens' boulder for the Death Moth competition in January 2026. Brad Weaver, an Olympic and IFSC (now World Climbing) competition routesetter, has generously offered guidance as I begin my routesetting journey. I'm deeply appreciative of his support, the knowledge shared by other setters, and the continued encouragement and experience of my home gym's routesetting team.
            </p>
            <p>
              You can see the <a href="https://www.instagram.com/p/DbGk6XglvJX/?img_index=6&amp;xtok=MTh3N2dyaHp3ZHpwZw==" target="_blank" rel="noopener noreferrer">Tension Climbing Board Report feature ↗</a>. This site is a place to keep track of the things I've built, the communities I've been part of, and the projects I want to keep improving.
            </p>
          </div>
          <div style={{marginTop:28}}>
            <h3 style={{fontSize:"1.1rem",marginBottom:8}}>Climbing, coaching & routesetting</h3>
            <MiniPhotoSlides label="Climbing, coaching and routesetting" images={[
              "aboutme-climbing1-.jpg", "aboutme-climbing2-.jpg", "aboutme-climbing-3.jpg",
              "aboutme-routesetting-3.jpg", "about me setting 1.jpg", "about me setting 2.jpg",
              "2026-07-15+BoardReport.jpg", "2026-08-31-climbing-magazine.jpg"
            ]} />
          </div>
        </section>

        <section className="portfolio-extra-section" id="associations" aria-labelledby="associations-heading">
          <div className="section-label">ASSOCIATIONS & ORGANIZATIONS</div>
          <h2 id="associations-heading">Organizations I've been part of.</h2>
          <p className="extra-intro">A selection of academic, professional, athletic, and community organizations I've participated in, supported, or helped lead.</p>
          <div className="associations-list">
            {[
              "UCCS Climbing Club · Founder & President",
              "USA Climbing · Athlete, Coach & Routesetter",
              "Escape Climbing · Escape Athlete",
              "Society of Women Engineers (SWE)",
              "Colorado Space Business Roundtable (CSBR) · Alumni Ambassador",
              ...(showAllOrganizations ? [
                "Aerospace States Association (ASA)", "AMTA Mock Trial · Outstanding Witness", "American Institute of Aeronautics and Astronautics (AIAA)", "Asian Vibes in Denver (AVID)", "Centura Diversity & Inclusion Council", "Colorado Space Grant Consortium (COSGC)", "Fellowship of Christian Athletes (FCA)", "Phi Alpha Delta (P.A.D.)", "Springs Rescue Mission · Volunteer", "UCCS Pre-Health Society", "UCCS Pre-Law Society"
              ] : []),
            ].map((name) => <span className="association-pill" key={name}>{name}</span>)}
          </div>
          <button className="section-expand-button" type="button" onClick={() => setShowAllOrganizations(v => !v)}>{showAllOrganizations ? "Show fewer organizations" : "Show all organizations"}</button>
        </section>


        <section className="portfolio-extra-section" id="climbing-competitions" aria-labelledby="competitions-heading">
          <div className="section-label">CLIMBING COMPETITIONS</div>
          <h2 id="competitions-heading">Competition results & placements.</h2>
          <p className="extra-intro">A developing record of collegiate and open competitions. I am adding more dates, locations, and placements as I gather them.</p>
          <div className="extra-grid" style={{margin:"22px 0 28px"}}>
            <div><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Heart and Soul · 2025</h3><MiniPhotoSlides label="Heart and Soul 2025" images={["heart and soul 2025.jpg"]} /></div>
            <div><h3 style={{fontSize:"1.1rem",marginBottom:8}}>BFL6 · 2026</h3><MiniPhotoSlides label="BFL6 2026" images={["BFL 2026.jpg"]} /></div>
          </div>
          <div style={{margin:"22px 0 28px"}}>
            <h3 style={{fontSize:"1.1rem",marginBottom:8}}>Competition photo highlights</h3>
            <p className="extra-intro">Selected images from competitions and climbing events.</p>
            <MiniPhotoSlides label="Competition highlights" images={[
              "2025-09-25+MBP-1.jpg", "2025-09-25+MBP-2.jpg", "2025-09-25+MBP-3.jpg",
              "2025-12-06+purepressure-1.jpg", "2025-12-06+purepressure-2.jpg", "2025-12-06+purepressure-3.jpg",
              "2026-01-31-NYR-Arizona.jpg", "2025-08-02+HTC-1.jpg", "2025-08-02+HTC-3.jpg", "2025-08-02+HTC-4.jpg"
            ]} />
          </div>
          <details className="competition-disclosure">
            <summary>View competition results ({climbingCompetitions.length})</summary>
            <p style={{padding:"0 20px",fontSize:13,opacity:.8}}>I’m continuing to add competition details as I gather dates, locations, and placements. Yellow highlights identify dates, locations, or placements I am still gathering.</p>
            <div className="competition-table-wrap">
              <table className="competition-table">
                <thead><tr><th>Date</th><th>Competition</th><th>Gym / Location</th><th>Qualifiers</th><th>Finals</th></tr></thead>
                <tbody>{competitionsNewestFirst.map((event, index) => <tr key={`${event.name}-${index}`}>
                  <td>{/TBD|Date TBD|date TBD|month TBD/i.test(event.date) ? <span className="competition-missing">{event.date}</span> : event.date}</td><td><strong>{event.name}</strong>{event.note && <small>{event.note}</small>}{event.url && <a href={event.url} target="_blank" rel="noopener noreferrer">Results ↗</a>}</td>
                  <td>{/TBD|location TBD|gym TBD/i.test(event.location) ? <span className="competition-missing">{event.location}</span> : event.location}</td><td>{/TBD|Not available|Results not provided/i.test(event.qualifiers) ? <span className="competition-missing">{event.qualifiers}</span> : event.qualifiers}</td><td>{/TBD|Not available/i.test(event.finals) ? <span className="competition-missing">{event.finals}</span> : event.finals}</td>
                </tr>)}</tbody>
              </table>
            </div>
          </details>
        </section>

        <section className="portfolio-extra-section" id="featured-organizations" aria-labelledby="featured-organizations-heading">
          <div className="section-label">PUBLICATIONS & ORGANIZATIONS</div>
          <h2 id="featured-organizations-heading">Featured in, involved with & connected to.</h2>
          <p className="extra-intro">Selected publications, climbing organizations, and professional connections. Select a logo to read the related coverage or visit the organization. Podcast links will be added after publication. Each label identifies the relationship; logos do not imply endorsement.</p>
          <div className="organization-logo-grid">
            {partnerLogos.map(item => {
              const content = <>
                <img src={assetPath(`/images/${item.file}`)} alt={`${item.name} logo`} loading="lazy" style={["impactdriver.png", "escape-climbing.png"].includes(item.file) ? { background: "#080808", padding: "8px", objectFit: "contain" } : undefined} />
                <strong>{item.name}</strong>
                <span>{item.context}</span>
                {item.url && <span className="organization-link-hint">View article or organization ↗</span>}
              </>;
              return item.url ? (
                <a className="organization-logo-card organization-logo-link" key={item.file} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.name}: ${item.context}`}>
                  {content}
                </a>
              ) : (
                <div className="organization-logo-card" key={item.file}>{content}</div>
              );
            })}
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
