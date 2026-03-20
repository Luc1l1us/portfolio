import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import ProfileImage from "../assets/drawingpfp.png";
import MonochromeSwitcher from "../assets/monoswitcher.png";
import Mumei from "../assets/mumei.png";
import CityRushHour from "../assets/city-rush-hour.png";
import CoinPulse from "../assets/Coin-pulse-alt.png";
import Symph from "../assets/symph-logo.jpg";

export default function Home() {
  return (
    //Change hardcoded padding and margin to scale
    //Change into 3 flex rows and scale
    <div className="h-[100vh] sm:h-[100vh] md:h-[85vh] lg:h-[80vh] flex flex-row justify-items-start md:m-20 md:pr-30 rounded-lg border border-white shadow-[0_0_20px_rgba(0,0,0,0.15)] text-silver-700">
      <div className="flex flex-col items-start gap-3 window-column hover:bg-silver-200 bg-silver-base p-3 rounded-l-lg">
        <button className="flex first-button w-4 h-4 bg-silver-100 rounded-full"></button>
        <button className="flex second-button w-4 h-4 bg-silver-300 rounded-full"></button>
        <button className="flex third-button w-4 h-4 bg-silver-700 rounded-full"></button>
        <div className="flex flex-1 space-x-2 items-center justify-center w-4 h-6 font-doto font-bold rotate-90 whitespace-nowrap">
          <span>p</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>f</span>
          <span>o</span>
          <span>l</span>
          <span>i</span>
          <span>o</span>
        </div>
        <button className="flex fourth-button w-4 h-4 bg-silver-700 rounded-full mt-auto"></button>
      </div>
      {/*First Column (should redirect the user to what the user had clicked)*/}
      <div className="flex flex-col items-center first-column basis-1/3 m-10 font-ubuntu">
        {/* First part */}
        <div>
          <div className="flex relative w-13 sm:w-24 md:w-32 lg:w-40 aspect-square picture-box grayscale">
            <Image src={ProfileImage} alt="profilepic" fill unoptimized></Image>
          </div>
          <p className="font-bold text-sm lg:text-xl ">Edzie Mari Navarra</p>
          <p className="text-sm lg:text-xl ">Software Developer</p>
        </div>

        {/* Second part */}
        <div className="flex flex-col navigation gap-2 mt-20 mr-auto">
          <a href="#projects" className="hover-navigation">
            ● projects
          </a>
          <a href="#experience" className="hover-navigation">
            ● experience
          </a>
          <a href="#about" className="hover-navigation">
            ● about
          </a>
          <a href="#contact" className="hover-navigation">
            ● contact
          </a>
        </div>

        {/* Third part */}
        <div className="first-column-bottom mt-auto sm:flex-col">
          <div className="social-icons">
            <a target="_blank" href="https://github.com/Luc1l1us">
              <FontAwesomeIcon className="socials" icon={faGithub} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/edz-navarra/">
              <FontAwesomeIcon className="socials" icon={faLinkedin} />
            </a>
            <a
              aria-label="Send me an email"
              href="mailto:edziemarin@gmail.com?subject=Porfolio Inquiry"
            >
              <FontAwesomeIcon className="socials" icon={faEnvelope} />
            </a>
          </div>
          <div className="view-resume hover:text-silver-base">
            <a href="/My_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faRightLong} />
              <span> View Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/*Second Column (should be scrollable)*/}
      <div className="second-column basis-2/3 mt-10 font-ubuntu">
        <p className="font-doto text-2xl">GREETINGS!</p>
        <div className="">
          My Name is Edzie Mari Navarra
          <div className="description font-bold text-2xl">
            Passionate about <span className="text-gray-300">designing</span>{" "}
            and <span className="text-gray-200">developing </span>
            apps that <span className="text-gray-400">help people </span>
            and <span className="text-gray-400"> bring ideas </span> to life.
          </div>
        </div>
        <section id="projects" className="projects-container mt-10 ">
          <div className="projects-title">projects</div>

          <div className="flex mt-5">
            <div className="first-project-logo">
              <Image
                className="mr-15 rounded-lg drop-shadow-lg "
                src={MonochromeSwitcher}
                width={40}
                height={40}
                alt="Monoswitcher project logo"
                unoptimized
              />
            </div>
            <div>
              <a
                href="https://github.com/Luc1l1us/monochrome-switcher"
                className="hover:text-gray-400"
              >
                <div className="bold-title">Monochrome-Switcher</div>
              </a>
              <p className="description">
                Building a multi-model AI orchestration platform that enables
                users to interact with up to five LLMs simultaneously through a
                unified, tab-based interface with normalized API handling and
                concurrent response streaming.
              </p>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="second-project-logo">
              <Image
                className="mr-15 rounded-lg drop-shadow-lg"
                src={Mumei}
                width={40}
                height={40}
                alt="Mumei project logo"
                unoptimized
              />
            </div>
            <div>
              <a
                href="https://github.com/Luc1l1us/MuseMei"
                className="hover:text-gray-400"
              >
                <div className="bold-title">Mumei</div>
              </a>
              <p className="description">
                Developed a Python-based Discord bot integrating the OpenAI API
                and the Instructure Canvas REST API to enable AI-driven
                conversations, automated moderation, and real-time assignment
                tracking.
              </p>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="third-project-logo">
              <Image
                className="mr-15 rounded-lg drop-shadow-lg"
                src={CityRushHour}
                width={40}
                height={40}
                alt="CityRushHour project logo"
                unoptimized
              />
            </div>
            <div>
              <div className="bold-title">City Rush Hour</div>
              <p className="description">
                Built a high-fidelity traffic simulation in Unity that
                integrates A* pathfinding, behavioral traffic modeling, and
                real-world congestion scenarios to create dynamic, lifelike
                vehicle systems.
              </p>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="fourth-project-logo">
              <Image
                className="mr-15 rounded-lg drop-shadow-lg"
                src={CoinPulse}
                width={40}
                height={40}
                alt="CoinPulse project logo"
                unoptimized
              />
            </div>
            <div>
              <a
                href="https://github.com/Luc1l1us/Forex_app"
                className="hover:text-gray-400"
              >
                <div className="bold-title">Coin Pulse</div>
              </a>
              <p className="description">
                Developed a scalable cryptocurrency tracking app powered by
                Flutter and Flask, utilizing Firebase and the TwelveData API to
                provide real-time price updates and portfolio analytics.
              </p>
            </div>
          </div>
        </section>
        <section id="experience" className="experience-container mt-15">
          <p className="experience-title">experience</p>
          <div className="flex mt-5">
            <div className="first-experience-logo">
              <Image
                className="mr-15 rounded-lg drop-shadow-lg"
                src={Symph}
                width={40}
                height={40}
                alt="Symph company logo"
                unoptimized
              />
            </div>
            <div>
              <div className="bold-title">
                Symph (Software Developer Intern/QA Automation Tester)
              </div>
              <p className="description">
                Played a dual-role in a client deployment project—developing
                features and resolving bugs before leading QA automation efforts
                with Cypress to enhance test coverage and overall product
                stability.
              </p>
            </div>
          </div>
        </section>
        <section id="about" className="about-container mt-15">
          <p className="about-title ">about</p>
          <p className="mt-5">
            I’m a software developer passionate about building systems that are
            both technically robust and thoughtfully designed. I enjoy working
            across the stack—from architecting backend APIs and automation
            pipelines to crafting clean, responsive user interfaces. My projects
            range from cross-platform desktop applications and algorithm-driven
            simulations to full-stack mobile apps integrating real-time
            financial data. I’m especially interested in system design,
            performance optimization, and writing maintainable, scalable code. I
            thrive in collaborative environments, continuously improving
            workflows, automating processes where possible, and turning complex
            problems into clean, reliable solutions.
          </p>
        </section>
        <section id="contact" className="contact-container mt-15 mb-10">
          <p className="contact-title">contact</p>
          <div className="mt-5">
            I’m always open to discussing new opportunities, collaborations, or
            interesting technical problems. Whether it's software engineering,
            automation, systems work, or full-stack development — feel free to
            reach out.
            <p>📧 Email: edziemarin@gmail.com </p>
            <p>💼 LinkedIn: linkedin.com/in/edz-navarra</p>
            <p>💻 GitHub: github.com/Luc1l1us</p>
          </div>
        </section>
        {/*2nd column should be scrollable*/}
      </div>
    </div>
  );
}
