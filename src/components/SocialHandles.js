import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  ["GitHub profile", "https://github.com/Haricharhan", FaGithub],
  ["LinkedIn profile", "https://www.linkedin.com/in/haricharhan/", FaLinkedin],
  ["Instagram profile", "https://www.instagram.com/_charan_11_4/", FaInstagram],
  ["X profile", "https://x.com/sunny14_3", FaXTwitter],
];

const SocialHandles = ({ className = "text-white" }) => (
  <ul className={`flex gap-4 ${className}`} aria-label="Social profiles">
    {links.map(([label, href, Icon]) => (
      <li key={label}>
        <a className="block rounded p-1 text-2xl transition hover:scale-110 hover:text-[#FFCCA8]" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <Icon aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialHandles;
