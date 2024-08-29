import { BiLogoCss3, BiLogoFirebase, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoPython, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";
import image2048 from '../assets/Images/Pics/2048.png';
import hand from '../assets/Images/Pics/hand2.png';
const ProjectsData = [
  {
    id: "1",
    name: "Hand Gesture Media Player",
    image : hand,
    icons: [BiLogoPython],
    description: "This is a media player , where we can handle controls using hand gestures ",
    github: "https://github.com/Haricharhan/Controlling-Media-player-Using-Hand-Gesture/tree/main",
  },
  {
    id: "2",
    name: "2048-Game",
    image: image2048,
    icons: [BiLogoHtml5,BiLogoCss3 ,BiLogoJavascript],
    description: "A fun and interactive browser-based 2048 puzzle game built with HTML, CSS, and JavaScript. Challenge yourself to combine tiles and reach the 2048 tile",
    github: "https://github.com/Haricharhan/2048-Game",
    demo: "https://haricharhan-2048game.netlify.app",
  },
  // {
  //   id: "3",
  //   name: "Chat Application",
  //   image: "./chatapp.png",
  //   icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
  //   description: "This chat application provides an interface to the users to interact with their friends.",
  //   github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
  //   demo: "https://vchat4whisperchat.vercel.app",
  // },
  // {
  //   id: "4",
  //   name: "Expense Tracker",
  //   image: "./expense-tracker.png",
  //   icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
  //   description: "This application provides an interface for users to track their expenses .",
  //   github: "https://github.com/VijayKumarReddyTalakola/Expense-Tracker",
  //   demo: "https://vtrack-expense.vercel.app",
  // },
  // {
  //   id: "5",
  //   name: "Car Rental Website",
  //   image: "./car-rental-app.png",
  //   icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
  //   description: "This is an online platform that allows users to rent cars for personal or business use.",
  //   github: "https://github.com/VijayKumarReddyTalakola/nextjs-car-rental-app",
  //   demo: "https://car-rental-application.vercel.app",
  // },
  // {
  //   id: "8",
  //   name: "Blog Application",
  //   image: "./blog-app.png",
  //   icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
  //   description: "This application allows users to express their thoughts and experiences through blogs.",
  //   github: "https://github.com/VijayKumarReddyTalakola/Blog-Application",
  //   demo: "https://write-ur-blog.vercel.app",
  // },
];

export default ProjectsData;
