import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const links = [
  { title: "Home", link: "home" },
  { title: "About", link: "about" },
  { title: "Skills", link: "skills" },
  { title: "Projects", link: "projects" },
  { title: "Contact", link: "contact" },
];

const scrollProps = { spy: true, smooth: true, offset: -88, duration: 600 };

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 z-50 border-b border-white/10 bg-[#088395] text-white shadow-sm">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 py-2 lg:px-8">
        <Link {...scrollProps} to="home" className="flex items-center rounded-xl" aria-label="Back to the top of the portfolio">
          <img className="ml-1 h-10 w-10 rounded-xl bg-gradient-to-br from-[#0f2027] to-[#2c5364] transition hover:scale-105 lg:h-11 lg:w-11" src={require("../assets/Images/Pics/logoo.png")} alt="Hari Charhan" width="44" height="44" />
        </Link>
        <nav className="hidden items-center gap-7 text-base font-medium md:flex" aria-label="Primary navigation">
          {links.map((item) => <Link key={item.title} {...scrollProps} to={item.link} className="cursor-pointer rounded hover:text-[#FFCCA8]">{item.title}</Link>)}
        </nav>
        <button type="button" onClick={() => setIsMenuOpen((open) => !open)} className="rounded p-2 text-white md:hidden" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
          {isMenuOpen ? <MdClose className="h-7 w-7" aria-hidden="true" /> : <BiMenu className="h-7 w-7" aria-hidden="true" />}
        </button>
        {isMenuOpen && (
          <nav id="mobile-navigation" className="absolute inset-x-0 top-full border-t border-white/10 bg-[#088395] px-5 py-5 shadow-lg md:hidden" aria-label="Mobile navigation">
            <ul className="mx-auto flex max-w-7xl flex-col gap-1">
              {links.map((item) => <li key={item.title}><Link {...scrollProps} to={item.link} onClick={closeMenu} className="block cursor-pointer rounded px-3 py-3 text-lg font-medium hover:bg-white/10">{item.title}</Link></li>)}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
