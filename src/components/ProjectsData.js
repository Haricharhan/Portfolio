import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoPython } from "react-icons/bi";
import image2048 from '../assets/Images/Pics/2048.png';
import hand from '../assets/Images/Pics/hand2.png';

const ProjectsData = [
  {
    id: "1",
    name: "Hand Gesture Media Player",
    image: hand,
    icons: [BiLogoPython],
    description: "This is a media player, where we can handle controls using hand gestures.",
    github: "https://github.com/Haricharhan/Controlling-Media-player-Using-Hand-Gesture/tree/main",
  },
  {
    id: "2",
    name: "2048-Game",
    image: image2048,
    icons: [BiLogoHtml5, BiLogoCss3, BiLogoJavascript],
    description: "A fun and interactive browser-based 2048 puzzle game built with HTML, CSS, and JavaScript. Challenge yourself to combine tiles and reach the 2048 tile!",
    github: "https://github.com/Haricharhan/2048-Game",
    demo: "https://haricharhan-2048game.netlify.app",
  },
];

export default ProjectsData;
