import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const links = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "About",
    link: "about",
  },
  {
    title: "Skills",
    link: "skills",
  },
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white body-font fixed inset-x-0 z-50 bg-[#088395] header-top-padding">
      <div className="mx-auto py-2 px-5 flex flex-row justify-between items-center lg:py-4">
        <Link
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            spy={true}
            smooth={true}
            offset={-100}
            duration={750}
            to="home"
            className="flex items-center"
          >
            <img
              className="w-11 h-11 lg:w-12 lg:h-12 ml-3 lg:ml-8 cursor-pointer rounded-xl
              bg-gradient-to-br from-[#0f2027] to-[#2c5364]
              transition duration-300 ease-in-out
              hover:scale-110
              hover:shadow-md"
              src={require("../assets/Images/Pics/logoo.png")}
              alt="Hari Charhan"
            />
          </Link>
        <nav
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="false"
          className="hidden md:ml-auto lg:flex flex-wrap items-center text-xl justify-center"
        >
          {links.map((item) => {
            return (
              <Link
  key={item.title}
  spy={true}
  smooth={true}
  offset={-100}
  duration={750}
  to={item.link}
  className="mr-5 cursor-pointer hover:text-[#E88D67] md:mr-12"
  style={{ textShadow: '1px 1px 2px black, 0 0 25px #E88D67, 0 0 5px #E88D67' }} // Add text-shadow
>
  {item.title}
</Link>
            );
          })}
        </nav>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="false"
          className="lg:hidden mr-2"
        >
          <button onClick={toggleMenu} className="p-2 text-white">
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 transition-all ease-in duration-1000 lg:hidden">
            <div className="rounded-b-lg bg-[#088395] shadow-lg px-5 pb-4">
              <nav
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-once="false"
                className="flex flex-col gap-y-7 text-xl"
              >
                {links.map((item) => {
                  return (
                    <Link
                      key={item.title}
                      onClick={() => setIsMenuOpen(false)}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={750}
                      to={item.link}
                      className="cursor-pointer hover:text-[#E88D67]"
                      style={{ textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px #E88D67' }} // Add text-shadow
                      >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;