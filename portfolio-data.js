/*
  Update this file whenever you add a role, project, or skill.
  Project links can point to GitHub, a live demo, or a future case-study page.
*/

window.PORTFOLIO = {
  profile: {
    name: "Zakary Miles",
    intro: "Computer Science at University of California, Santa Cruz",
    about:
      "Just a computer science student who should’ve been a mechanic.\n\nI grew up tearing down engines, swapping motors, and welding diffs with my friends so we could go drifting on the backroads, but building PCs and playing video games is what got me into engineering.\n\nSince then, I’ve developed and refined my software skills while also picking up extra mechanical and technical skills along the way.",
    email: "zjmiles01@gmail.com",
    linkedin: "https://linkedin.com/in/zakarymiles",
    github: "https://github.com/zjmiles01",
  },

  work: [
    {
      company: "Meta",
      role: "Data Operations Lead · Robotics",
      period: "Oct 2026 — Present",
      location: "Menlo Park, CA · On-site",
      summary: "Promoted from Data Operator.",
      details: [],
    },
    {
      company: "Meta",
      role: "Data Operator · Robotics & AI Data Collection",
      period: "Oct 2026",
      location: "Menlo Park, CA · On-site",
      details: [
        "Reviewed recorded robotics demonstrations against task requirements and repeated captures that fell short.",
        "Documented hardware, software, and data-collection issues in session records for robotics engineers and researchers.",
      ],
    },
    {
      company: "Stealth AI Startup",
      role: "Software Engineer Intern",
      period: "May 2026 — Aug 2026",
      location: "San Francisco Bay Area, CA · On-site",
      details: [
        "Built and validated service APIs supporting 100+ concurrent requests on a multi-tenant AI platform.",
        "Added 80+ integration tests for data persistence, retrieval, AI workflows, permissions, and tenant isolation.",
      ],
    },
    {
      company: "Smith Denison Construction / Laborers Local 304",
      role: "Underground Electrical Utility",
      period: "May 2021 — Sep 2021",
      location: "Bay Area, CA",
      details: [
        "Read utility blueprints to lay out conduit routes, then measured, cut, and aligned pipe for underground electrical systems.",
        "Prepared cables, spliced wires, and installed wiring in underground conduit.",
      ],
    },
  ],

  projects: {
    software: [
      {
        title: "Xcelsior",
        subtitle: "Job market intelligence platform",
        image: "project-assets/xcelsior/homepage.webp",
        imageAlt: "Xcelsior’s homepage showing the top skills in its job-posting snapshot.",
        stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker"],
        description:
          "I built Xcelsior so a student can start with a question like “Which skills do backend jobs ask for?” and follow the answer back to the postings behind it.",
        details: [
          "Built and deployed a job market platform that extracted skills and salary data from a corpus of 15,000+ public postings.",
          "Developed a resume matcher that shows which required and preferred skills contributed to each job’s score.",
        ],
        link: "#report-xcelsior",
        linkLabel: "View Xcelsior report",
      },
      {
        title: "MediaFlow",
        subtitle: "Media processing workspace",
        image: "project-assets/mediaflow/homepage.webp",
        imageAlt: "MediaFlow homepage with Single File, Temporary Workspace, and Workspaces above the Quick Convert form.",
        stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "FFmpeg"],
        description:
          "I built MediaFlow to handle both a one-off file conversion and a whole folder of work. The browser can follow each job while a separate worker converts the file.",
        details: [
          "Built a file conversion workspace with 48 input formats and 437 supported conversion pairs.",
          "Separated conversion workers from the API and used a PostgreSQL queue to track progress, handle cancellation, and retry interrupted jobs.",
        ],
        link: "#report-mediaflow",
        linkLabel: "View MediaFlow report",
      },
    ],
    hardware: [
      {
        title: "2015 Subaru WRX STI front aero",
        subtitle: "Front splitter and stacked canards",
        stack: ["SOLIDWORKS CAD", "Flow Simulation", "ABS fabrication"],
        image: "project-assets/sti-aero/installed.webp",
        imageAlt: "Front three-quarter view of my STI with the ABS splitter and stacked bumper canards installed.",
        description:
          "I was getting my 2015 Subaru WRX STI ready for the track, so I decided to design and build my own front aero. I modeled the look I wanted in SolidWorks, with a wide splitter and two sharp, Varis-inspired canards at each corner. Then I used Flow Simulation to see how much front downforce I could gain with that shape and what it would cost in drag.",
        details: [
          "Compared three configurations at 70 mph. The splitter and endplates added about 99 N of front downforce in the model. Adding the canards changed front loading by less than 1 N.",
          "Cut the ABS from the CAD dimensions with a rotary cutter, then trimmed and sanded the edges during test fits on my bumper.",
        ],
        link: "#report-sti-aero",
        linkLabel: "View STI aero report",
      },
      {
        title: "DUM-E",
        subtitle: "Three-axis desk robot · Digital prototype",
        stack: ["Autodesk Fusion", "Mechanical design", "Embedded controls"],
        image: "reports/dum-e/assembled.webp",
        imageAlt: "The saved DUM-E CAD assembly with the long arm parked above its low base.",
        description:
          "I designed a three-axis desk robot around a 425 mm reach. A geared turntable sets the direction, a belt-driven shoulder lifts the arm, and a servo tilts the sensor head. The hardest clearance problem appeared when the arm was low and the head tilted toward the desk.",
        details: [
          "Modeled a three-axis desktop robot in Fusion 360 for a 425 mm reach, with a belt-driven shoulder and a servo-driven sensor head.",
          "Revised the lower tilt limit from −60° to −30° to clear the desk. The assembly passed 142 digital checks, with three physical checks pending.",
        ],
        link: "#report-dum-e",
        linkLabel: "View DUM-E report",
      },
      {
        title: "Campus trolley bike rack",
        subtitle: "Solo mechanical design study",
        stack: ["SOLIDWORKS", "Finite element analysis", "Machine design"],
        image: "project-assets/bike-rack/assembly.jpg",
        imageAlt: "SOLIDWORKS model of the two tire channels and curved support, with weld locations marked in red.",
        description:
          "I designed a rear-mounted carrier for two adult bicycles on a campus trolley. Two tire channels carry the wheel loads into a welded stainless frame. I checked bending at the vehicle mount by hand, then compared that estimate with a finite element model of the assembly.",
        details: [
          "Designed a two-bicycle carrier in SOLIDWORKS and checked mounting stress under a 110 lbf payload using beam calculations and finite element analysis.",
          "The SOLIDWORKS model put the empty rack at 279 lb. With both bicycles, the mount would carry about 389 lbf at rest.",
        ],
        link: "#report-bike-rack",
        linkLabel: "View bike rack report",
      },
    ],
  },

  skills: [
    {
      label: "Software",
      items: [
        "Python, C/C++, TypeScript, SQL",
        "FastAPI, React, PostgreSQL, Docker, Git, Linux",
      ],
    },
    {
      label: "Mechanical / Hardware",
      items: [
        "Fusion 360, SOLIDWORKS, mechanical analysis, reverse engineering, fabrication, 3D printing, PC assembly",
        "Firmware integration, sensor integration, hardware debugging, soldering, PCB repair, component replacement",
      ],
    },
  ],
};
