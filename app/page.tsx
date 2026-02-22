import Image from "next/image";

export default function Home() {
  return (
    //Change hardcoded padding and margin to scale
    //Change into 3 flex rows and scale
    <div className="main-box flex flex-row justify-items-start m-20 pr-30 rounded-lg border border-white shadow-[0_0_20px_rgba(0,0,0,0.15)] text-silver-700">
      <div className="flex flex-col items-start gap-3 window-column bg-silver-base p-3 rounded-l-lg">
        <button className="flex first-button w-4 h-4 bg-silver-100 rounded-full"></button>
        <button className="flex second-button w-4 h-4 bg-silver-300 rounded-full"></button>
        <button className="flex third-button w-4 h-4 bg-silver-700 rounded-full"></button>
        <button className="flex third-button w-4 h-4 bg-silver-700 rounded-full mt-auto"></button>
      </div>
      {/*First Column (should redirect the user to what the user had clicked)*/}
      <div className="flex flex-col first-column basis-1/3 ml-10 mr-10 mt-10 mb-10">
        {/* First part */}
        <div>
          <div className="flex relative w-40 aspect-square picture-box grayscale">
            <Image src="/drawingpfp.png" alt="profilepic" fill></Image>
          </div>
          <p>edzie mari navarra</p>
          <p>software developer</p>
        </div>

        {/* Second part */}
        <div className="flex flex-col navigation gap-2 mt-20 mr-auto">
          <a
            href="#projects"
            className="flex hover:bg-silver-base hover:animate-hover-move transition-all"
          >
            ● projects
          </a>
          <a
            href="#experience"
            className="flex hover:bg-silver-base hover:animate-hover-move transition-all"
          >
            ● experience
          </a>
          <a
            href="#about"
            className="flex hover:bg-silver-base hover:animate-hover-move transition-all"
          >
            ● about
          </a>
          <a
            href="#contact"
            className="flex hover:bg-silver-base hover:animate-hover-move transition-all"
          >
            ● contact
          </a>
        </div>

        {/* Third part */}
        <div className="first-bottom mt-auto">
          * all rights reserved
          <p> </p>
        </div>
      </div>

      {/*Second Column (should be scrollable)*/}
      <div className="second-column basis-2/3 mt-10">
        <p className="font-ubuntu">GREETINGS!</p>
        <div className="">
          my name is SAMPLE NAME
          <div className="description">I am a sample description</div>
        </div>
        <section id="projects" className="projects-container mt-15 ">
          <div className="projects-title">projects</div>

          <div className="flex">
            1st project icon
            <div>1st project name</div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          <div className="flex mt-5">
            2nd project icon
            <div>2nd project name</div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          <div className="flex mt-5">
            3rd project icon
            <div>3rd project name</div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </section>
        <section id="experience" className="experience-container mt-15">
          <p className="experience-title">experience</p>
          <div className="flex mt-5">
            <div className="first-experience-logo">
              <Image
                className="mr-15 rounded-lg drop-shadow-lg"
                src="/symph-logo.jpg"
                width={40}
                height={40}
                alt="Symph company logo"
              />
            </div>
            <div>
              <div className="bold-title">Symph</div>
              <p className="description">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </section>
        <section id="about" className="about-container mt-15">
          <p className="about-title">about</p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </section>
        <section id="contact" className="contact-container mt-15 mb-10">
          <p className="contact-title">contact</p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </section>
        {/*2nd column should be scrollable*/}
      </div>
    </div>
  );
}
