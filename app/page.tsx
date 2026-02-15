import Image from "next/image";

export default function Home() {
  return (
    //Change hardcoded padding and margin to scale
    //Change into 3 flex rows and scale
    <div className="flex flex-column justify-items-start m-30 px-40 py-55 rounded-lg border border-white shadow-xl/20 text-black">
      {/*First Column (should redirect the user to what the user had clicked)*/}
      <div className="basis-1/3">
        SAMPLE NAME
        <div>
          Software Engineer
        </div>

        <div className="2nd-row mt-10">
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

        <div className="3rd-row mt-50">
          * all rights reserved
        </div>

      {/*Second Column (should be scrollable)*/}
      </div>
      <div className="basis-2/3 ">
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
          </div>
          
          {/*2nd column should be scrollable*/}

        </div>
      </div>
    </div>
  );
}
