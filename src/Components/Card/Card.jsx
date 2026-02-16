import React from "react";
import bg from "./images/bg.png";
import plus from "./images/plus_icon.png";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="card w-[400px] h-[400px] mx-auto text-white flex flex-col justify-around p-4 relative m-1">
          <p className="font-medium italic">This is a god lavel image</p>
          <h1 className="text-5xl font-bold">Image that make a sence</h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            quaerat dolore vitae nemo magni eos, deleniti vero alias recusandae
            eius voluptatibus ipsam laboriosam labore provident veniam error
            iusto dolores aliquam necessitatibus. Eum in suscipit esse quod.
            Nulla temporibus ab nisi!
          </p>
          <div className="absolute bg-white bottom-[20px] right-[20px] rounded-full cursor-pointer">
            <img src={plus} alt="" />
          </div>
        </div>

        <div className="card w-[400px] h-[400px] mx-auto text-white flex flex-col justify-around p-4 relative m-1">
          <p className="font-medium italic">This is a god lavel image</p>
          <h1 className="text-5xl font-bold">Image that make a sence</h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            quaerat dolore vitae nemo magni eos, deleniti vero alias recusandae
            eius voluptatibus ipsam laboriosam labore provident veniam error
            iusto dolores aliquam necessitatibus. Eum in suscipit esse quod.
            Nulla temporibus ab nisi!
          </p>
          <div className="absolute bg-white bottom-[20px] right-[20px] rounded-full cursor-pointer">
            <img src={plus} alt="" />
          </div>
        </div>

        <div className="card w-[400px] h-[400px] mx-auto text-white flex flex-col justify-around p-4 relative m-1">
          <p className="font-medium italic">This is a god lavel image</p>
          <h1 className="text-5xl font-bold">Image that make a sence</h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            quaerat dolore vitae nemo magni eos, deleniti vero alias recusandae
            eius voluptatibus ipsam laboriosam labore provident veniam error
            iusto dolores aliquam necessitatibus. Eum in suscipit esse quod.
            Nulla temporibus ab nisi!
          </p>
          <div className="absolute bg-white bottom-[20px] right-[20px] rounded-full cursor-pointer">
            <img src={plus} alt="" />
          </div>
        </div>

        <div className="card w-[400px] h-[400px] mx-auto text-white flex flex-col justify-around p-4 relative m-1">
          <p className="font-medium italic">This is a god lavel image</p>
          <h1 className="text-5xl font-bold">Image that make a sence</h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            quaerat dolore vitae nemo magni eos, deleniti vero alias recusandae
            eius voluptatibus ipsam laboriosam labore provident veniam error
            iusto dolores aliquam necessitatibus. Eum in suscipit esse quod.
            Nulla temporibus ab nisi!
          </p>
          <div className="absolute bg-white bottom-[20px] right-[20px] rounded-full cursor-pointer">
            <img src={plus} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
