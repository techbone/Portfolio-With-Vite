import React from "react";
import "./Home.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import styled from "../../../styles/utils.module.css";

const Home = () => {
  return (
    <div className="Home" name="home">
      {/* constainer */}
      <div className="home__container">
        <p className="text-pink-700 font-bold leading-6">Hi, my name is</p>
        <h1 className="name">Musa Muhammad Awwal</h1>
        <h2 className="description">I'm a Front End Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Frontend developer specializing in building (and occasionally
          designing) exceptional digital experience for both web & mobile. I aim
          at building responsive web & mobile Applications.
        </p>
        <button className="button group text-white">
          View Work
          <span>
            <HiArrowNarrowRight className="group-hover:rotate-90 duration-300" />
          </span>
        </button>
      </div>
      <div className="w-[18rem] sm:w-[28rem]">
        <img
          className={`${styled.image} rounded-full`}
          src="http://www.diginextechnologies.com/images/creative_graphic_designing_company_ludhiana_punjab_india.gif"
          alt="codeer"
        />
      </div>
    </div>
  );
};

export default Home;
