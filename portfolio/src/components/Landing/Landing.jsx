import React from "react";
import Sky from "react-sky";
import "./Landing.css";
import Arrow from '../../images/arrow-right.png'

export const LandingJSX = () => {
  return (
    <div class="container">
      <Sky
        images={{
          0: "https://image.flaticon.com/icons/svg/141/141073.svg",
          1: "https://image.flaticon.com/icons/svg/141/141070.svg",
          2: "https://image.flaticon.com/icons/svg/141/141009.svg",
          3: "https://image.flaticon.com/icons/svg/140/140993.svg",
          4: "https://image.flaticon.com/icons/svg/141/141106.svg",
          5: "https://image.flaticon.com/icons/svg/141/141015.svg",
          6: "https://image.flaticon.com/icons/svg/141/141099.svg",
          7: "https://image.flaticon.com/icons/svg/141/141008.svg",
          8: "https://image.flaticon.com/icons/svg/141/141036.svg"
        }}
        how={60}
        time={45}
        size={"100px"}
        background={"#333"}
      />
      <div class="flex">
        <div class="text">
          Hello, I'm
          <span> Josh Brogdon</span>
          <br />
          I'm a full stack Web Developer
        </div>
        <div class="learn-btn-container">
          <button class="learn-btn">
          Learn more
          <img class="arrow" src={Arrow}/>
          </button>
        </div>
      </div>
    </div>
  );
};
