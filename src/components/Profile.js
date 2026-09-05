import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";

const Profile = () => {
  return (
    <section className="body-font bg-[#77E4C8] pt-20 text-gray-700 lg:min-h-[75vh]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-8 md:px-7 md:pt-12 lg:flex-row-reverse lg:gap-12 lg:py-16">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 "
        >
          <img
            className="object-cover object-center bg-[#E88D67] border-2 border-white pointer-events-none rounded-full backdrop-contrast-200 backdrop-brightness-200"
            alt="Portrait of Hari Charhan"
            src={require("../assets/Images/Pics/hari.png")}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:mr-14 lg:flex-grow lg:pr-4">
          <SocialHandles />
          <h1
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-[#1F2933]"
          >
            Hello, I am <span className="text-[#FC4100]">Hari Charhan</span>
          </h1>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-3xl text-[#1E3A8A] mb-4 font-medium lg:inline-block"
          >
            &nbsp;
            <Typewriter
              words={["Data Analyst", "SQL • Python • Power BI", "ML Monitoring • Data Visualization"]}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
          <p
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mb-2 text-[#1F2933] text-lg md:text-xl leading-relaxed"
          > 
          I turn raw data into clear, decision-ready insights.</p>
          <p
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="text-lg text-[#1F2933] md:text-xl"
          >
          I use SQL, Python, and Power BI to solve practical business problems.</p>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mt-7 flex flex-wrap justify-center gap-3"
          >
            {/* Contact Me */}
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
              className="inline-flex min-h-11 items-center rounded-full border-2 border-dark-orange bg-dark-orange px-6 py-3 font-medium text-white hover:bg-[#d94616]"
            >
                Contact Me
            </Link>
            <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
              className="inline-flex min-h-11 items-center rounded-full border-2 border-dark-orange bg-cornsilk px-6 py-3 font-medium text-black hover:bg-white"
            >
                View Projects
            </Link>
            
            <a
              href="https://drive.google.com/file/d/1QSV2fomB_iVQSb0A8QOr0SfmQYUfSVC1/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex min-h-11 items-center rounded-full border-2 border-dark-orange bg-cornsilk px-6 py-3 font-medium text-black hover:bg-white">View Resume</span>
            </a>
          </div>
        </div>
      </div>
      {/* Wave  */}
      <div className="lg:mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          className=" w-full h-18 sm:h-20 lg:h-[15vh] border-0 border-red-500 "
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="waves">
            <use
              xlinkHref="#gentle-wave"
              x="50"
              y="0"
              fill="#f5f5f5"
              fillOpacity=".2"
            />
            <use
              xlinkHref="#gentle-wave"
              x="50"
              y="3"
              fill="#f5f5f5"
              fillOpacity=".5"
            />
            <use
              xlinkHref="#gentle-wave"
              x="50"
              y="6"
              fill="#f5f5f5"
              fillOpacity=".9"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Profile;
