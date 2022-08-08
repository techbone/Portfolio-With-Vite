import React, { useState } from "react";
import "./Work.css";
import hulu from "/Images/hulu.png";
import musarestaurant from "/Images/musarestaurant.png";
import etudayeTouristSite from "/Images/TouristSite.png";
const Work = () => {
  return (
    <div className="work">
      <div className="work__container">
        <div>
          <p className="title">Work</p>
          <p className="py-4 italic text-lg">
            Check out some of my recent work{" "}
          </p>
        </div>
        <div className="work__experience">
          <div
            style={{
              backgroundImage: `url(${etudayeTouristSite})`,
              height: "250px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={` bg-contain bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content_div cursor-pointer`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 flex  flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                Etudaye Tour Site
              </span>
              <p className="text-[12px] max-w-[70%] text-center mt-1">
                A personal fake tourist site i built that basically allows you
                to tour around countries in the world. Things like
                acommodation,food and entertainment will be taken care off after
                your application has been granted.
              </p>
              <div className="pt-4 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/techbone/reactAppSoft">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${musarestaurant})`,
              height: "250px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={` bg-contain bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content_div cursor-pointer`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center flex-col items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                Etudaye Restaurant
              </span>
              <p className="text-[12px] max-w-[70%] text-center mt-4">
                This App renders movies respect on their categories and also
                allow users to view each movie trailer. Next js, tailwind css
                was used for the front end, while the endPoint was gotten from
                TheMoviesDatabase(TMDB)
              </p>
              <div className="pt-4 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/techbone/TailwindReactProject">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${hulu})`,
              height: "250px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={` bg-contain bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content_div cursor-pointer`}
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                Hulu Web App
              </span>
              <p className="text-[12px] max-w-[70%] text-center mt-4">
                This App renders movies respect on their categories and also
                allow users to view each movie trailer. Next js, tailwind css
                was used for the front end, while the endPoint was gotten from
                TheMoviesDatabase(TMDB)
              </p>
              <div className="pt-4 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/techbone/Hulu-V2.0">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
