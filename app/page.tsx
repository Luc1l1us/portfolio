import Image from "next/image";

export default function Home() {
  return (
    //Change hardcoded padding and margin to scale
    //Change into 3 flex rows and scale
    <div className="main-box flex flex-column justify-items-start m-20 px-30 py-20 rounded-lg border border-white shadow-xl/20 text-black">
      {/*First Column (should redirect the user to what the user had clicked)*/}
      <div className="first-column basis-1/3">
        <div>
          SAMPLE PICTURE
        </div>
        edzie mari navarra
        <div>
          Software Engineer
        </div>

        <div className="navigation mt-10">
          * projects
          <div className="">
            * experience
          </div>
          <div className="">
            * about
          </div>
          <div className="">
            * contact
          </div>
        </div>

        <div className="first-bottom mt-50">
          * all rights reserved
        </div>
      </div>

      {/*Second Column (should be scrollable)*/}
      <div className="second-column basis-2/3 ">
        GREETINGS!
        <div className="">
          my name is SAMPLE NAME
          <div className="description">
            I am a sample description
          </div>
        </div>

        <div className="projects-container mt-15">
          <div className="">
            projects
          </div>
          
          <div className="flex">
            1st project icon
            <div>
              1st project name
            </div>
          </div>

          <div className="flex mt-5">
            2nd project icon
            <div>
              2nd project name
            </div>
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
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum."
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
