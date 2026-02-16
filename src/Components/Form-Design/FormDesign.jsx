import React from "react";
import logo from "./codeabc.jpg";
import "./FormDesign.css";

const FormDesign = () => {
  return (
    <div>
      <div className="main w-[400px]  md:w-[800px] md:flex-row mx-auto flex flex-col  gap-1  rounded-xl shadow-xl p-2 my-10 md:my-50">
        <div className="left w-full md:w-1/2 h-[395px] bg-blue-100 flex flex-col gap-3 justify-center items-center text-center rounded-xl">
          <img
            src={logo}
            alt=""
            className="w-[70px] rounded-xl cursor-pointer"
          />
          <h1 className="font-bold text-3xl">
            Let us help you run your own platform
          </h1>
          <p>Our registration process is quickerthan other edtech platform</p>
        </div>

        <div className="right w-1/2 rounded-xl ">
          <div className="pl-10">
            <h1 className="font-bold text-2xl">Get Started</h1>
            <p className="font-ligh w-[300px] my-1 py-1">
              Create your account now
            </p>
            <form action="" className="flex flex-col gap-2 ">
              <label htmlFor="name">Full Name :</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-[5px] outline-0  text-center w-[300px]"
              />

              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-[5px] outline-0  text-center w-[300px]"
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded-[5px] outline-0  text-center w-[300px]"
              />
            </form>
            <button className="bg-blue-600 w-[300px] mt-5 p-1 rounded-md cursor-pointer">
              Sign up
            </button>
            <p className="text-center mt-5 w-[300px]">
              Already a member ?{" "}
              <span className="text-blue-600 cursor-pointer  ">Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDesign;
