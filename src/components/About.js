import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="body-font">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">

        {/* Heading */}
        <div id="about" className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            About Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange"
          >
            Why choose me?
          </p>
        </div>

        {/* Main Section */}
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">

          {/* LEFT → IMAGE */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              className="object-cover object-center rounded max-w-md w-full shadow-lg"
              alt="about"
              src={require("../assets/Images/Pics/Story.gif")}
            />
          </div>

          {/* RIGHT → TEXT */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full lg:w-1/2 font-medium text-gray-700 text-lg lg:text-base xl:text-xl leading-loose xl:leading-8 space-y-4 text-justify"
          >
            <p>
              I graduated in 2025 and am currently focused on building a strong career in 
               and 
              I graduated in 2025 and now I am concentrating on establishing myself as an outstanding professional in 
              <span className="font-semibold text-black"> Data Analytics </span>
               and 
               <span className="font-semibold text-black"> Software Development</span>. 
                . In addition to this, I cleared the <span className="font-semibold text-black"> GATE Exam</span> which further helped me improve my skills in analytics and problem-solving.
            </p>

            {/* What I Enjoy */}
            <div>
              <h3 className="font-semibold text-black mb-1">💡 What I Enjoy</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Creating interactive dashboards using Power BI</li>
                <li>Solving analytical problems with Python & SQL</li>
                <li>Spotting patterns and trends and gaining insights from business</li>
                <li>Developing efficient applications and exploring system design</li>
              </ul>
            </div>

            {/* Currently */}
            <div>
              <h3 className="font-semibold text-black mb-1">🚀 Currently</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Building end-to-end data analytics projects</li>
                <li>Strengthening Python, SQL, and data visualization skills</li>
                <li>Preparing for Data Analyst and Software Engineering roles</li>
              </ul>
            </div>

            <p>
              💼 Looking for entry-level positions where 
              I can utilize my skills and gain practical experience.
            </p>

            {/* Buttons */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="mt-5 flex gap-4 justify-center lg:justify-start"
            >
              {/* View Projects */}
              <button className="inline-flex font-medium text-white bg-black border-2 border-black py-3 px-7 hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full">
                <Link
                  to="projects"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  View Projects
                </Link>
              </button>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1QSV2fomB_iVQSb0A8QOr0SfmQYUfSVC1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 hover:bg-cornsilk hover:text-black rounded-full">
                  Download Resume
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;