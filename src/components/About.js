import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="body-font">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">

        {/* Heading */}
        <div id="about" className="flex flex-col text-center w-full mb-6">
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            About Me
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange"
          >
            Data-focused, curious, and ready to contribute
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
              alt="Illustration representing data storytelling"
              loading="lazy"
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
              I graduated in 2025 and am pursuing an entry-level <span className="font-semibold text-black">Data Analyst</span> role. I enjoy using <span className="font-semibold text-black">SQL, Python, Excel, and Power BI</span> to clean data, uncover patterns, and turn findings into useful business decisions. Clearing the <span className="font-semibold text-black">GATE exam</span> strengthened my analytical thinking and problem-solving foundation.
            </p>

            {/* What I Enjoy */}
            <div>
              <h3 className="font-semibold text-black mb-1">💡 What I Enjoy</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Creating interactive dashboards using Power BI</li>
                <li>Solving analytical problems with Python & SQL</li>
                <li>Finding trends and translating them into business insights</li>
                <li>Building clear, reliable analytical solutions</li>
              </ul>
            </div>

            {/* Currently */}
            <div>
              <h3 className="font-semibold text-black mb-1">🚀 Currently</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Building end-to-end data analytics projects</li>
                <li>Strengthening Python, SQL, and data visualization skills</li>
                <li>Preparing for Data Analyst roles and data-focused interviews</li>
              </ul>
            </div>

            <p>
              💼 Open to entry-level data analytics opportunities where I can contribute, learn, and create measurable value.
            </p>

            {/* Buttons */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="mt-5 flex gap-4 justify-center lg:justify-start"
            >
              {/* View Projects */}
              <Link
                  to="projects"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="inline-flex rounded-full border-2 border-black bg-black px-7 py-3 font-medium text-white hover:border-dark-orange hover:bg-cornsilk hover:text-black"
                >
                  View Projects
              </Link>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1QSV2fomB_iVQSb0A8QOr0SfmQYUfSVC1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex rounded-full border-2 border-dark-orange bg-dark-orange px-7 py-3 font-medium text-white hover:bg-cornsilk hover:text-black">View Resume</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
