import React from "react";
import single from "../assets/single.png";
import triple from "../assets/triple.png";
import double from "../assets/double.png";

import Card from "./Card";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto md:flex gap-8">
        <Card
          img={single}
          person={"single"}
          GB={1}
          charges={500}
          member={1}
          send={2}
        />
        <Card
          img={double}
          person={"double"}
          GB={2}
          charges={1000}
          member={2}
          send={4}
        />
        <Card
          img={triple}
          person={"Triple"}
          GB={3}
          charges={1500}
          member={3}
          send={6}
        />
      </div>
    </div>
  );
};

export default Cards;
