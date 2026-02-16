import React from "react";
import codeabc from "./codeabc.jpg";

const OurDesign = () => {
  return (
    <div>
      <div className="w-[80%] h-screen bg-blue-200 mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 text-center py-10">
          Our <span className="text-black">Process</span>
        </h1>

        <div className="flex flex-col gap-6">
          <div className="main max-w-[90%] mx-auto flex gap-10">
            <div className="left bg-white border-2 border-blue-500 p-4 rounded-xl">
              <img src={codeabc} alt="" className="w-15   " />
            </div>

            <div className="right  bg-white border-2 border-blue-500 p-4 rounded-xl">
              <h1>Create your profile</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate quidem quo blanditiis. Odio distinctio consectetur
                consequuntur ullam molestiae aspernatur optio.
              </p>
            </div>
          </div>

          <div className="main max-w-[90%] mx-auto flex gap-10">
            <div className="w-[300px] flex justify-end">
              <div className="left bg-white border-2 border-blue-500 p-4 rounded-xl">
                <img src={codeabc} alt="" className="w-15   " />
              </div>
            </div>

            <div className="right  bg-white border-2 border-blue-500 p-4 rounded-xl">
              <h1>Create your profile</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate quidem quo blanditiis. Odio distinctio consectetur
                consequuntur ullam molestiae aspernatur optio.
              </p>
            </div>
          </div>

          <div className="main max-w-[90%] mx-auto flex gap-10">
            <div className="w-[500px] flex justify-end">
              <div className="left bg-white border-2 border-blue-500 p-4 rounded-xl">
                <img src={codeabc} alt="" className="w-15   " />
              </div>
            </div>

            <div className="right  bg-white border-2 border-blue-500 p-4 rounded-xl">
              <h1>Create your profile</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate quidem quo blanditiis. Odio distinctio consectetur
                consequuntur ullam molestiae aspernatur optio.
              </p>
            </div>
          </div>

          <div className="main max-w-[90%] mx-auto flex gap-10">
            <div className="w-[300px] flex justify-end">
              <div className="left bg-white border-2 border-blue-500 p-4 rounded-xl">
                <img src={codeabc} alt="" className="w-15   " />
              </div>
            </div>

            <div className="right  bg-white border-2 border-blue-500 p-4 rounded-xl">
              <h1>Create your profile</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate quidem quo blanditiis. Odio distinctio consectetur
                consequuntur ullam molestiae aspernatur optio.
              </p>
            </div>
          </div>
          <div className="main max-w-[90%] mx-auto flex gap-10">
            <div className="left bg-white border-2 border-blue-500 p-4 rounded-xl">
              <img src={codeabc} alt="" className="w-15   " />
            </div>

            <div className="right  bg-white border-2 border-blue-500 p-4 rounded-xl">
              <h1>Create your profile</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate quidem quo blanditiis. Odio distinctio consectetur
                consequuntur ullam molestiae aspernatur optio.
              </p>
            </div>
          </div>
        </div>

        {/* <img src={codeabc} alt="" className='w-15 h-15' /> */}
      </div>
    </div>
  );
};

export default OurDesign;
