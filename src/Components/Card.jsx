import React from "react";

const Card = ({img , person , charges , GB , member , send}) => {
  return (
    <div className="w-full shadow-xl flex flex-col  p-4 my-12 rounded-lg hover:scale-105 duration-500">
      <img className="w-20 mx-auto mt-[-3rem] bg-white" src={img} alt="" />
      <h2 className="text-2xl text-center font-bold">{person} User</h2>
      <p className="text-4xl text-center font-bold">{charges}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8">{GB} GB Storage</p>
        <p className="py-2 border-b mx-8">{member} Granted User</p>
        <p className="py-2 border-b mx-8">Send up to {send} GB</p>
      </div>
      <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md font-medium my-6  text-bold py-3 text-black'>Get Started</button>
    </div>
  );
};

export default Card;
