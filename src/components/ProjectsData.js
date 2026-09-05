// import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoPython } from "react-icons/bi";
// import image2048 from '../assets/Images/Pics/2048.png';
// import hand from '../assets/Images/Pics/hand2.png';

// const ProjectsData = [
//   {
//     id: "1",
//     name: "Hand Gesture Media Player",
//     image: hand,
//     icons: [BiLogoPython],
//     description: "This is a media player, where we can handle controls using hand gestures.",
//     github: "https://github.com/Haricharhan/Controlling-Media-player-Using-Hand-Gesture/tree/main",
//   },
//   {
//     id: "2",
//     name: "2048-Game",
//     image: image2048,
//     icons: [BiLogoHtml5, BiLogoCss3, BiLogoJavascript],
//     description: "A fun and interactive browser-based 2048 puzzle game built with HTML, CSS, and JavaScript. Challenge yourself to combine tiles and reach the 2048 tile!",
//     github: "https://github.com/Haricharhan/2048-Game",
//     demo: "https://haricharhan-2048game.netlify.app",
//   },
// ];
import { BiLogoPython } from "react-icons/bi";
import { SiMysql, SiPowerbi, SiGithub } from "react-icons/si";

// Images (add these)
import mlDrift from "../assets/Images/Pics/Dashboard_preview-1st-slide.png";
import blinkit from "../assets/Images/Pics/blinkit.png";
import bike from "../assets/Images/Pics/over-all.png";
import autoGit from "../assets/Images/Pics/Auto_1.png";

const ProjectsData = [
  {
    id: "1",
    name: "MLDrift Monitor – ML Monitoring System",
    image: mlDrift,
    images: [ 
        mlDrift,
        require("../assets/Images/Pics/Dashbboard_Preview-2nd-slide.png"),
    ],
    icons: [BiLogoPython],
    description:
      "Built an end-to-end machine learning monitoring system to detect feature and prediction drift using KS tests and Population Stability Index (PSI). Generated automated drift reports with visualization and alert mechanisms to ensure model reliability.",
    summary: "An MLOps-focused dashboard for monitoring feature and prediction drift before it affects model reliability.",
    stack: ["Python", "KS test", "PSI", "Streamlit", "MLOps"],
    highlights: [
      "Compared baseline and production distributions with KS tests and Population Stability Index (PSI).",
      "Surfaced feature-level drift signals in an interactive monitoring dashboard.",
      "Designed the workflow to support repeatable drift reporting and alerting.",
    ],
    github: "https://github.com/Haricharhan/ML-Drift-Monitoring-Dashboard-MLOps-Project-",
  },

  {
    id: "2",
    name: "Blinkit Sales & Operations Dashboard",
    image: blinkit,
    images: [blinkit],
    icons: [SiPowerbi],
    description:
      "Developed an interactive Power BI dashboard to analyze sales and operational data. Performed data cleaning using Power Query and created KPI dashboards, sales trends, and category insights enabling data-driven decision making.",
    summary: "A Power BI dashboard that turns cleaned sales and operations data into KPI, category, and trend views.",
    stack: ["Power BI", "Power Query", "Data cleaning", "DAX"],
    highlights: [
      "Prepared source data with Power Query before building the report layer.",
      "Created KPI, category, and sales-trend views for operational analysis.",
      "Organized the dashboard around questions a business stakeholder can explore quickly.",
    ],
    github: "https://github.com/Haricharhan/Blink-it-BI-Dashboard",
  },

  {
    id: "3",
    name: "Bike Sharing Demand Analysis (SQL + Power BI)",
    image:bike,
    images: [
      bike,
      require("../assets/Images/Pics/2021.png"),
      require("../assets/Images/Pics/2022.png"),
    ],
    icons: [SiMysql, SiPowerbi],
    description:
      "Analyzed bike sharing data using SQL and Power BI to uncover rider behavior, seasonal trends, and revenue insights. Identified peak hours, KPIs, and user segmentation through an interactive dashboard.",
    summary: "SQL and Power BI analysis of rider behavior, demand patterns, and operational performance in bike sharing data.",
    stack: ["SQL", "MySQL", "Power BI", "Data visualization"],
    highlights: [
      "Used SQL to examine rider behavior, demand patterns, and segmentation.",
      "Built KPI and seasonal trend views in Power BI.",
      "Focused the analysis on peak periods and operational insights.",
    ],
    github: "https://github.com/Haricharhan/bike_sharing_analytics",
  },

  {
    id: "4",
    name: "Auto GitHub Push Tool (Python Automation)",
    image:autoGit,
    images: [
      autoGit,
      require("../assets/Images/Pics/Auto_2.png"),
    ],
    icons: [BiLogoPython, SiGithub],
    description:
      "Developed a Python automation tool to streamline Git workflows by automatically performing add, commit, and push operations. Designed to continuously sync local project folders with GitHub, reducing manual effort and improving productivity. Used for maintaining and updating repositories like MySolvedProblems.",
    summary: "A Python utility that automates repetitive Git add, commit, and push workflows for local project folders.",
    stack: ["Python", "Git", "GitHub", "Automation"],
    highlights: [
      "Automated repetitive add, commit, and push steps from a local workflow.",
      "Designed to keep selected project folders synchronized with GitHub.",
      "Demonstrates practical scripting and developer-workflow automation.",
    ],
    github: "https://github.com/Haricharhan/MySolvedProblems",
  },
];

export default ProjectsData;
