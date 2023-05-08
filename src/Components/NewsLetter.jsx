import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-black w-full text-white px-4 py-16 ">
      <div className="max-w-[1240px] mx-auto md:flex flex-row justify-between items-center">
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="pt-3">Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center w-100 ">
            <input
              type="email"
              className="rounded-md w-full p-3 text-black flex"
              placeholder="Enter Your Email"
            />
            <button
              className="text-black w-[200px] mx-auto
            md:mx-2 rounded-md font-medium my-6  text-bold py-3 bg-[#00df9a] "
            >
              Notify me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our <br />
            <span className="text-[#00df9a]"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
