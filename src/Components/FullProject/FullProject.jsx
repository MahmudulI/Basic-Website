import React from "react";
import "./FullProject.css";

import career1 from "./images/career1.png";
import carrer2 from "./images/career2.png";
import carrer3 from "./images/career3.png";
import carrer4 from "./images/career4.png";
import carrer5 from "./images/career5.png";
import carrer6 from "./images/career6.png";
import codeabccircle from "./images/code abc_circle.png";
import down from "./images/down.png";
import drible from "./images/dribble.png";
import facebook from "./images/facebook.png";
import github from "./images/github.png";
import lock from "./images/lock.png";
import meeting from "./images/meeting.png";
import play from "./images/play.png";
import search from "./images/search.png";
import ShahjalalRafi from "./images/ShahjalalRafi.png";
import shape from "./images/shape.png";
import states from "./images/states.png";
import team from "./images/team.png";
import twitter from "./images/twitter.png";

const FullProject = () => {
  return (
    <div className=" h-full md:h-auto bg-blue-100">
      <nav className="container mx-auto flex flex-col md:flex-row gap-6 items-center  p-2">
        <img
          src={codeabccircle}
          alt=""
          className="w-[80px] h-[80px] cursor-pointer"
        />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className=" flex justify-between gap-6  ">
            <a href="#">Home</a>
            <a href="#">Chanel</a>
            <a href="#">Support</a>
            <a href="#">About</a>
            <img src={search} alt="" className="cursor-pointer" />
          </div>

          <div className="flex gap-4 items-center ">
            <div className="flex gap-2 items-center cursor-pointer">
              <img src={lock} alt="" />
              <span>Login</span>
            </div>
            <button className="bg-[#0092e4] px-8 py-3 rounded-md text-white cursor-pointer">
              Donate Now
            </button>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <div className="container mx-auto px-16 py-20 flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="">
          <h1 className="text-5xl font-bold pb-6">
            <span className="text-[#0092e4]">Tailwind Css</span> Course
            Instructor
          </h1>
          <h2 className="text-7xl font-bold text-[#183656] pb-6">
            Shahajalal Rafi
          </h2>
          <p className="font-bold pb-6">Founder Code ABC</p>
          <div className="flex gap-6 items-center">
            <button className="bg-[#183656] font-bold text-white px-8 py-3 rounded-md cursor-pointer">
              Get Token
            </button>
            <div className="flex gap-2 items-center text-xl">
              <span>White Paper</span>
              <img src={play} alt="" />
            </div>
          </div>
        </div>

        <div>
          <img src={ShahjalalRafi} alt="" />
        </div>
      </div>
      {/* service section */}
      <div className="service">
        <div className="text-center flex flex-col gap-3 pb-2">
          <p className="font-bold text-[#0092e4] text-2xl ">
            Service we work for
          </p>
          <h2>What care we do your case!</h2>
          <img src={down} alt="" className="mx-auto " />
        </div>
        <div className="container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 shadow-xs rounded-sm p-15 bg-white ">
          <div className="bg-white text-center flex flex-col gap-4">
            <img src={career1} alt="" className="mx-auto" />
            <p className="font-bold text-xl">Coding</p>
            <p>
              In publishing and graphics design lorem ipsum is a placeholder
              text
            </p>
            <button className="text-[#0092e4] cursor-pointer font-bold">
              Learn more
            </button>
          </div>

          <div className="bg-white text-center flex flex-col gap-4">
            <img src={carrer2} alt="" className="mx-auto" />
            <p className="font-bold text-xl">Coding</p>
            <p>
              In publishing and graphics design lorem ipsum is a placeholder
              text
            </p>
            <button className="text-[#0092e4] cursor-pointer font-bold">
              Learn more
            </button>
          </div>

          <div className="bg-white text-center flex flex-col gap-4">
            <img src={carrer3} alt="" className="mx-auto" />
            <p className="font-bold text-xl">Coding</p>
            <p>
              In publishing and graphics design lorem ipsum is a placeholder
              text
            </p>
            <button className="text-[#0092e4] cursor-pointer font-bold">
              Learn more
            </button>
          </div>

          <div className="bg-white text-center flex flex-col gap-4 mt-4">
            <img src={carrer4} alt="" className="mx-auto" />
            <p className="font-bold text-xl">Coding</p>
            <p>
              In publishing and graphics design lorem ipsum is a placeholder
              text
            </p>
            <button className="text-[#0092e4] cursor-pointer font-bold">
              Learn more
            </button>
          </div>

          <div className="bg-white text-center flex flex-col gap-4">
            <img src={carrer5} alt="" className="mx-auto" />
            <p className="font-bold text-xl">Coding</p>
            <p>
              In publishing and graphics design lorem ipsum is a placeholder
              text
            </p>
            <button className="text-[#0092e4] cursor-pointer font-bold">
              Learn more
            </button>
          </div>

          <div className="bg-white text-center flex flex-col gap-4">
            <img src={carrer6} alt="" className="mx-auto" />
            <p className="font-bold text-xl">Coding</p>
            <p>
              In publishing and graphics design lorem ipsum is a placeholder
              text
            </p>
            <button className="text-[#0092e4] cursor-pointer font-bold">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Numbering */}
      <div className="max-w-5xl px-10 py-10 mx-auto grid gap-x-4 grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-3xl text-[#0092e4] cursor-pointer font-semibold">
            254
          </p>
          <p className="font-bold text-xl">Successful Projecrs</p>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <p className="text-3xl text-[#0092e4] cursor-pointer font-semibold">
            254
          </p>
          <p className="font-bold text-xl">Successful Projecrs</p>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <p className="text-3xl text-[#0092e4] cursor-pointer font-semibold">
            6M
          </p>
          <p className="font-bold text-xl">Successful Projecrs</p>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <p className="text-3xl text-[#0092e4] cursor-pointer font-semibold">
            60++
          </p>
          <p className="font-bold text-xl">Successful Projecrs</p>
        </div>
      </div>
      {/* state section */}
      <div className="container mx-auto bg-white rounded-sm text-center">
        <p className="font-semibold text-3xl py-10">
          Those states we provide donation
        </p>
        <p className="pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at
          quaerat assumenda exercitationem vitae itaque.
        </p>
        <img src={states} alt="" className="mx-auto" />
      </div>

      {/* calling section */}
      <div className="container mx-auto text-center py-15 ">
        <p className="font-bold">Indtoducing video calling support </p>
        <p>
          Every email, web page and social media post makes an impression on
          your customers. With our software you can be confident it`s impression
        </p>
        <button className="text-[#0092e4] font-bold cursor-pointer">
          Explore Details{" "}
        </button>

        <div className="relative">
          <img src={meeting} alt="" className="mx-auto cursor-pointer" />

          <div className="md:absolute top-40  left-20 w-full md:w-[280px] bg-[#FABF62] p-10 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] text-white font-semibold text-left shadow-xl ">
            <p>Hi, I`m Andry. Let me know what can I do for you</p>
          </div>

          <div className=" bg-white px-10 py-5 rounded-t-[20px] rounded-br-[20px] text-left text-[#FABF62] font-semibold w-full md:w-[280px] md:absolute bottom-40 right-20 shadow-xl my-2">
            <p>Your personal support assistance</p>
          </div>
        </div>
      </div>

      {/* team section */}
      <div className="container mx-auto pb-20 ">
        <div className="">
          <img src={team} alt="" className="mx-auto" />
          <div className="bg-[#183656] max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 p-16 text-white relative rounded-lg">
            <p className="font-bold text-2xl text-center md:text-left">
              Do you have any question ? Feel free to contact us
            </p>
            <button className="bg-white text-[#183656] px-10 py-3 rounded-md cursor-pointer font-bold z-10">
              Contact Us Now
            </button>
            <img src={shape} alt="" className="absolute left-10 md:left-1/2 " />
          </div>
        </div>
      </div>

      {/* footer section */}

      <footer className="bg-[#c1c9d6] mt-20">
        <div
          className="max-w-7xl mx-auto px-6 py-14
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10"
        >
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={codeabccircle} alt="" className="w-12" />
              <h2 className="font-semibold text-lg">Code ABC</h2>
            </div>

            <p className="font-medium text-gray-800">
              Terms of use <span className="mx-2">|</span> Privacy
            </p>

            <p className="text-sm text-gray-500">Copyright by 2019 Redq, Inc</p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-5 text-lg">About Us</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-black cursor-pointer">
                Support Center
              </li>
              <li className="hover:text-black cursor-pointer">
                Customer Support
              </li>
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Copyright</li>
            </ul>
          </div>

          {/* Our Info */}
          <div>
            <h3 className="font-semibold mb-5 text-lg">Our Information</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-black cursor-pointer">Return Policy</li>
              <li className="hover:text-black cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-black cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-black cursor-pointer">Site Map</li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-semibold mb-5 text-lg">My Account</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-black cursor-pointer">
                Press inquiries
              </li>
              <li className="hover:text-black cursor-pointer">Social media</li>
              <li className="hover:text-black cursor-pointer">Directories</li>
              <li className="hover:text-black cursor-pointer">
                Images & B-roll
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-5 text-lg">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={facebook} className="w-6" />
                <p className="font-medium">Facebook</p>
              </div>

              <div className="flex items-center gap-3">
                <img src={twitter} className="w-6" />
                <p className="font-medium">Twitter</p>
              </div>

              <div className="flex items-center gap-3">
                <img src={github} className="w-6" />
                <p className="font-medium">Github</p>
              </div>

              <div className="flex items-center gap-3">
                <img src={drible} className="w-6" />
                <p className="font-medium">Dribbble</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FullProject;
