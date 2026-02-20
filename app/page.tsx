import Image from "next/image";

export default function Home() {
  return (
    //Change hardcoded padding and margin to scale
    //Change into 3 flex rows and scale
    <div className="main-box flex flex-row justify-items-start m-20 pr-30 rounded-lg border border-white shadow-[0_0_20px_rgba(0,0,0,0.15)] text-silver-700">
      <div className="flex flex-col items-start gap-3 window-column bg-silver-base p-3 rounded-l-lg">
        
        <button className="flex first-button w-4 h-4 bg-silver-100 rounded-full">
        </button>
        <button className="flex second-button w-4 h-4 bg-silver-300 rounded-full">
        </button>
        <button className="flex third-button w-4 h-4 bg-silver-700 rounded-full">
        </button>
        <button className="flex third-button w-4 h-4 bg-silver-700 rounded-full mt-auto">
        </button>

      </div>
      {/*First Column (should redirect the user to what the user had clicked)*/}
      <div className="flex flex-col first-column basis-1/3 ml-10 mr-10 mt-10 mb-10">
      {/* First part */}
        <div>
          <div className="flex relative w-40 aspect-square picture-box grayscale">
            <Image 
              src="/drawingpfp.png"
              alt="profilepic"
              fill
            ></Image>
          </div>
          <p>edzie mari navarra</p>
          <p>software developer</p>
        </div>

      {/* Second part */}
        <div className="flex flex-col navigation gap-2 mt-20 mr-auto">
          <button className="flex hover:bg-silver-base">
            ● projects          
          </button>
          <button className="flex hover:bg-silver-base">
            ● experience
          </button>
          <button className="flex hover:bg-silver-base">
            ● about
          </button>
          <button className="flex hover:bg-silver-base">
            ● contact
          </button>
        </div>

      {/* Third part */}
        <div className="first-bottom mt-auto">
          * all rights reserved
          <p> </p>
        </div>
      </div>

      {/*Second Column (should be scrollable)*/}
      <div className="second-column basis-2/3 mt-10">
        GREETINGS!
        <div className="">
          my name is SAMPLE NAME
          <div className="description">
            I am a sample description
          </div>
        </div>

        <div className="projects-container mt-15 ">
          <div className="projects-title">
            projects
          </div>
          
          <div className="flex">
            1st project icon
            <div>
              1st project name
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          <div className="flex mt-5">
            2nd project icon
            <div>
              2nd project name
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          <div className="flex mt-5">
            3rd project icon
            <div>
              3rd project name
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          
          <div className="experience-container mt-15">
            <p className="experience-title">
              experience              
            </p>
            <div className="flex">
              1st company logo
            <div>
              1st company name
            </div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>

          <div className="about-container mt-15">
            <p className="about-title"> 
              about 
            </p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum."
              </p>
          </div>

          <div className="contact-container mt-15 mb-10">
            <p className="contact-title">
              contact
            </p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum."
              </p>
          </div>


          {/*2nd column should be scrollable*/}

        </div>
      </div>
    </div>
  );
}
