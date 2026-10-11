export const profile = {
  name: "Chi Ho Ngan",
  handle: "chi_ho_ngan",
  host: "hkust",
  tagline: "firmware · pentesting · formula student",
  location: "Hong Kong",
  about:
    "Computer engineering student at HKUST. I lead the software subteam at HKUST Red Bird Racing, write bare-metal firmware for our Formula Student car, and spent the summer breaking web apps and Wi-Fi networks as a cyber security intern.",
  email: "nganchihon@gmail.com",
  github: "https://github.com/nganchiho",
  githubUser: "nganchiho",
  instagram: "chiho_whichis_apparently_taken",
  casualAbout:
    "Hey, I'm Chi Ho. I write code for race cars, lift, climb, shoot arrows and airsoft, grind LeetCode, and spend too long perfecting Claude prompts. Somehow I'm still asleep by 10.",
};

export const now = {
  updated: "Oct 2026",
  items: [
    { label: "building", text: "DASH, the driver dashboard for Red Bird Racing's Formula Student car", href: "/projects/dash/" },
  ],
};

export const hobbies = [
  { name: "airsoft", note: "weekend skirmishes" },
  { name: "archery", note: "aim, breathe, release" },
  { name: "claude prompting", note: "rewriting one prompt ten times until it's just right" },
  { name: "coding", note: "side projects, always committed before bedtime" },
  { name: "cooking", note: "fuel for everything else on this list" },
  { name: "gaming", note: "the off switch" },
  { name: "gym", note: "lifting, and not skipping leg day" },
  { name: "leetcode", note: "keeping the problem-solving muscles warm" },
  { name: "photography", note: "cars, people, and the occasional LCD" },
  { name: "rock climbing", note: "problem solving, but vertical" },
];

export const interests = [
  { name: "aviation", note: "anything with wings and an engine" },
  { name: "motorsports", note: "the reason I write firmware for race cars" },
  { name: "music", note: "always on while coding" },
];

export const topStatus = "healthiest engineer on the team: lights out at 22:00, every night";

export const top = [
  { pid: 1, user: "chiho", cpu: "64.2", mem: "38.0", time: "∞", cmd: "coding --until 21:59" },
  { pid: 42, user: "chiho", cpu: "21.7", mem: "12.4", time: "2h/day", cmd: "gym --no-skip-leg-day" },
  { pid: 200, user: "chiho", cpu: "18.3", mem: "6.1", time: "often", cmd: "leetcode --grind" },
  { pid: 256, user: "chiho", cpu: "15.9", mem: "9.8", time: "lots", cmd: "claude --prompt" },
  { pid: 404, user: "root", cpu: "99.9", mem: "0.5", time: "always", cmd: "caffeine.d --daemon" },
  { pid: 1337, user: "chiho", cpu: "100.0", mem: "0.0", time: "8h", cmd: "sleep --at 22:00" },
];

export const photos = [
  {
    src: "/photos/dash-wheel.jpg",
    alt: "DASH LCD mounted on the steering wheel of the Formula Student car",
    caption: "dash-wheel.jpg · DASH live on the steering wheel",
  },
  {
    src: "/photos/dash-lcd.jpg",
    alt: "Close-up of a blue 20×4 character LCD showing large pixel digits",
    caption: "dash-lcd.jpg · DASH up close, one 5×8 cell at a time",
  },
];

export const education = [
  {
    school: "Hong Kong University of Science and Technology",
    degree: "BEng in Computer Engineering",
    period: "2025 – present",
  },
  {
    school: "Stewards Pooi Kei College",
    degree: "International A-Levels: Biology, Chemistry, Mathematics",
    period: "2023 – 2025",
  },
];

export const experience = [
  {
    org: "HKUST Red Bird Racing (EVRT)",
    role: "Software subteam PIC",
    period: "Sep 2026 – present",
    points: [
      "Lead the software subteam: roadmaps, task allocation, and the team website.",
      "Work with cross-functional leads on reliable real-time data monitoring and communication.",
    ],
  },
  {
    org: "Alpacian Limited",
    role: "Cyber security intern",
    period: "Jun 2026 – Aug 2026",
    points: [
      "Led a digital forensics project, coordinating task distribution and client communication.",
      "Web app pentesting with Burp Suite, Nmap, and OWASP ZAP, uncovering XSS flaws.",
      "Wi-Fi penetration testing on WPA2/WPA3 enterprise networks.",
      "Wrote digital forensics SOPs so the team can run engagements independently.",
    ],
  },
  {
    org: "HKUST Red Bird Racing (EVRT)",
    role: "Software and electrical subteam member",
    period: "Sep 2025 – Aug 2026",
    points: [
      "Programmed and debugged the Vehicle Control Unit (VCU) firmware in C++, handling CAN bus communication with other vehicle systems.",
    ],
  },
  {
    org: "2Fi Business Solution",
    role: "Project management intern",
    period: "Aug 2023",
    points: [
      "Audited project deliverables against HTML/CSS standards for cross-browser compatibility.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  year: string;
  stack: string[];
  summary: string;
  sections: { heading: string; body: string[] }[];
  images?: { src: string; alt: string; caption: string; wide?: boolean }[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "dash",
    name: "Formula Student dashboard (DASH)",
    year: "2026",
    stack: ["C++", "AVR", "CAN", "I2C", "KiCad"],
    summary:
      "Bare-metal firmware for an ATmega328P that decodes multi-bus CAN telemetry and drives the driver's 20×4 LCD.",
    images: [
      {
        src: "/photos/dash-wheel.jpg",
        alt: "DASH LCD mounted on the steering wheel showing speed, RPM, throttle, VCU warnings, and odometer",
        caption: "on the wheel: speed, RPM, throttle, VCU warnings, and odometer",
      },
      {
        src: "/photos/dash-lcd.jpg",
        alt: "Close-up of the DASH 20×4 character LCD showing large pixel digits",
        caption: "the 20×4 LCD, close enough to count pixels",
      },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "DASH sits in the cockpit and turns raw CAN traffic from several buses into something a driver can read at speed. Telemetry is decoded on an ATmega328P and shown across four selectable pages on a 20×4 character LCD.",
        ],
      },
      {
        heading: "Hardware",
        body: [
          "The board carries three CAN transceivers for the car's separate buses, a microSD slot for logging, onboard power regulation, and an ISP header for flashing the ATmega328P.",
        ],
      },
      {
        heading: "Keeping CAN reception fast",
        body: [
          "The LCD was ported onto a teammate's interrupt-driven I2C driver, so display writes no longer block the main loop.",
          "A CRC-based redraw cache skips writes for lines that haven't changed, which keeps display updates from ever stalling CAN reception.",
        ],
      },
      {
        heading: "Reliability features",
        body: [
          "SD-card logging of CAN traffic for post-run analysis.",
          "Odometer saved to CRC-checked EEPROM on power failure, so distance survives a hard shutdown.",
          "Watchdog recovery if the firmware ever hangs on track.",
        ],
      },
    ],
  },
  {
    slug: "recruit-portal",
    name: "Red Bird Racing recruitment and training portal",
    year: "2026",
    stack: ["PHP", "MySQL", "JavaScript", "Docker"],
    summary:
      "The platform that took 150+ applicants from application to decision, and now trains 100+ new members.",
    sections: [
      {
        heading: "What it does",
        body: [
          "HKUST's Formula Student team recruits every year. This portal handles the whole pipeline: applications, interview scheduling, and decision emails for 150+ applicants, followed by a training portal for the people who join.",
        ],
      },
      {
        heading: "Backend",
        body: [
          "MySQL schema and PHP REST endpoints behind university SSO.",
          "Google Drive API integration for applicant documents, and SMTP bulk email for decisions.",
          "Containerised with Docker.",
        ],
      },
      {
        heading: "Scheduling and training",
        body: [
          "Drag-and-drop interview scheduler with server-side conflict validation.",
          "Training portal tracking attendance, homework, and a leaderboard for 100+ trainees.",
        ],
      },
    ],
  },
  {
    slug: "hkcert-ctf",
    name: "HKCERT CTF",
    year: "2024",
    stack: ["Web security", "Linux"],
    summary:
      "Team-based capture-the-flag covering web vulnerabilities and prompt injection.",
    sections: [
      {
        heading: "The competition",
        body: [
          "Solved security challenges involving web vulnerabilities and prompt injection as part of a team.",
        ],
      },
      {
        heading: "My role",
        body: [
          "Led task distribution and strategy, matching challenges to teammates' strengths to work through multi-stage puzzles.",
        ],
      },
    ],
  },
];

export const skills = {
  languages: ["C++", "C", "Python", "PHP", "JavaScript", "SQL", "HTML/CSS"],
  embedded: ["Embedded C++", "AVR", "CAN bus", "PCB design (KiCad)"],
  security: ["Burp Suite", "Nmap", "OWASP ZAP", "Wi-Fi pentesting", "Digital forensics"],
  ai: ["Prompt engineering", "Claude", "Claude Code", "Gemini", "GitHub Copilot"],
  practice: ["LeetCode"],
  tools: ["Git", "GitHub", "Linux shell", "Docker", "Arduino IDE", "PyCharm"],
};
