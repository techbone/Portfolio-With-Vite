import React, { useState } from "react";
import "./NavBar.css";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-scroll";
import { AiFillGithub } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  let socialLinks = [
    {
      name: "Twitter",
      icon: FaTwitter,
      link: "http://twitter.com/weebahmard",
    },
    {
      name: "Github",
      icon: AiFillGithub,
      link: "https://github.com/techbone",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/musa-etudaye-a2b552217/",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      link: "https://wa.link/ozf807",
    },
  ];

  const tabs = [
    {
      name: "Home",
      to: "home",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "Skills",
      to: "skills",
    },
    {
      name: "Contact",
      to: "contact",
    },
  ];
  return (
    <div className="Nav">
      <span className="cursor-pointer">
        <Link to="home">
          <h1 className="logo">
            Gandalf
            <FaTwitter />
          </h1>
        </Link>
      </span>
      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          {tabs.map(({ name, to }, index) => (
            <li key={index}>
              <Link to={to} smooth={true} duration={500}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* handburger */}
      <div
        className={`${
          !nav ? "mr-1" : "mr-0"
        } md:hidden z-10 transition-all duration-500 drop-shadow-sm`}
        onClick={() => setNav(!nav)}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={`${!nav ? "hidden" : "mobile__menu"}`}>
        {tabs.map(({ name, to }, index) => (
          <li key={index} className="py-6 text-4xl">
            <Link
              onClick={() => setNav(!nav)}
              to={to}
              smooth={true}
              duration={500}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* social icon */}
      <div className="hidden lg:fixed top-[35%] left-[0] lg:block">
        <ul>
          {socialLinks.map(({ name, link, icon: Icon }, index) => (
            <li
              className="flex w-[160px] h-[50px] ml-[-100px] hover:ml-[-20px] duration-300"
              key={index}
            >
              <a
                href={link}
                className={` ${
                  (index === 0 && "bg-blue-600") ||
                  (index === 1 && "bg-gray-700") ||
                  (index === 2 && "bg-pink-600") ||
                  (index === 3 && "bg-green-600")
                } flex items-center justify-between   w-full text-base font-[600] px-2 text-gray-300 `}
                target="_blank"
              >
                <p>{name}</p> <Icon size={30} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
