import React from "react";

import "./About.css";
const About = () => {
  return (
    <div className="About" name="about">
      <div className="about__container">
        <div className="title__wrapper">
          <div className=" pb-8 flex w-full sm:justify-end pl-4">
            <p className="title">About</p>
          </div>
        </div>
        <div className="description_">
          <div className=" flex justify-center items-center  text-left sm:text-right text-2xl font-bold">
            <p>
              Hi, I'm Musa Muhammad Etudaye nice to meet you Please take a look
              around
            </p>
          </div>
          <div className="">
            {" "}
            Seasoned and versatile Frontend software engineer with one year plus
            experience, developing, and managing apps and internal frameworks.
            Specializes in ReactJS,ReactNative, Typescript, Next Js and
            responsive design. An enthusiastic team player and deep creative
            thinker. I read and enjoy time with friends in my free time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
