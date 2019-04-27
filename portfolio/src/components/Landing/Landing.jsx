import React from "react";
import Sky from "react-sky";
import "./Landing.css";
import Arrow from '../../images/arrow-right.png'

export const LandingJSX = () => {
  return (
    <div className="main-container">
    {/* might get rid of react-sky and replace it with something better */}
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
      <div className="flex">
        <div className="text">
          Hello, I'm
          <span className='name'> Josh Brogdon</span>
          .
          <br />
          I'm a full stack Web Developer.
        </div>
        <div className="learn-btn-container">
          <button className="learn-btn">
          Learn more
          <img className="arrow" src={Arrow}/>
          </button>
        </div>
      </div>
    </div>
  );
};
