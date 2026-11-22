/*
  Update this file whenever you add a role, project, or skill.
  Project links can point to GitHub, a live demo, or a future case-study page.
*/

window.PORTFOLIO = {
  profile: {
    name: "Zakary Miles",
    role: "Computer Science · Software · Robotics",
    intro:
      "Computer Science student building full-stack software, data systems, and autonomous hardware.",
    about:
      "I’m a Computer Science student at the University of California, Santa Cruz, graduating in June 2027. I enjoy moving between software and hardware—building reliable backend systems, useful interfaces, data pipelines, and autonomous machines.",
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
      summary:
        "Current Data Operations Lead for robotics; previously Data Operator for Robotics & AI Data Collection in October 2026.",
      details: [
        "Perform quality assurance on captured sessions and re-collect demonstrations that do not meet task requirements.",
        "Maintain accurate session records and identify hardware, software, and data-collection issues.",
        "Support robotics engineers and researchers developing spatial-computing and embodied-AI systems.",
      ],
    },
    {
      company: "Stealth AI Startup",
      role: "Software Engineer Intern",
      period: "May 2026 — Aug 2026",
      location: "San Francisco Bay Area, CA · On-site",
      summary:
        "Built full-stack features, scalable data infrastructure, and production service-layer APIs for a multi-tenant AI platform.",
      details: [
        "Developed and validated APIs supporting 100+ concurrent requests.",
        "Added 80+ integration tests covering persistence, retrieval, AI workflows, permissions, and tenant isolation.",
      ],
    },
    {
      company: "Smith Denison Construction / Laborers Local 304",
      role: "Underground Electrical Utility",
      period: "May 2021 — Sep 2021",
      location: "Bay Area, CA",
      summary:
        "Installed underground conduit and electrical systems from utility blueprints and conduit plans.",
      details: [
        "Measured, cut, assembled, and aligned electrical pipe.",
        "Performed wire splicing, cable preparation, and electrical wiring installation.",
      ],
    },
  ],

  projects: {
    software: [
      {
        title: "Xcelsior",
        subtitle: "Job market intelligence platform",
        stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker"],
        description:
          "A full-stack platform analyzing 15,000+ public job listings to surface in-demand programming languages and technologies.",
        details: [
          "Job search, analytics, authentication, saved jobs, candidate profiles, resume skill extraction, and job-match scoring.",
          "Data pipelines for technology extraction, title normalization, salary analysis, caching, and duplicate detection.",
        ],
        link: "#",
        linkLabel: "Case study coming soon",
      },
      {
        title: "MediaFlow",
        subtitle: "Media processing workspace",
        stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "FFmpeg"],
        description:
          "A full-stack media workspace supporting file conversion, temporary browser sessions, and persistent user workspaces.",
        details: [
          "Authentication, workspace ownership, folders, uploads, and conversion workflows.",
          "Asynchronous jobs with retries, cancellation, progress tracking, failure recovery, and S3-compatible storage.",
        ],
        link: "#",
        linkLabel: "Case study coming soon",
      },
    ],
    hardware: [
      {
        title: "Roombi",
        subtitle: "Autonomous robotic vacuum",
        stack: ["Arduino", "C++", "Tinkercad", "3D Printing", "Lidar", "DC Motors"],
        description:
          "A four-wheel autonomous vacuum integrating a microcontroller, distance sensors, DC motors, and a fan-powered suction system.",
        details: [
          "Designed custom mechanical parts in Tinkercad and fabricated them through 3D printing.",
          "Programmed obstacle avoidance and differential motor control while integrating power distribution and motor drivers.",
        ],
        link: "#",
        linkLabel: "Build notes coming soon",
      },
    ],
  },

  skills: [
    {
      label: "Languages",
      items: "Python, TypeScript, JavaScript, SQL, C/C++, HTML, CSS",
    },
    {
      label: "Software",
      items: "React, FastAPI, Node.js, Express, SQLAlchemy, REST APIs, CI/CD",
    },
    {
      label: "Infrastructure",
      items: "AWS, Docker, Kubernetes, GitHub Actions, PostgreSQL, Redis",
    },
    {
      label: "Hardware",
      items: "CAD, 3D printing, electrical wiring, soldering, sensors, mechanical assembly",
    },
  ],
};
