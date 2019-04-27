import React from "react";
import './Nav.css';

export const NavJSX = () => {
  return (
    <div className="navContainer">
      <div className="navBtnContainer">
        <button className="navBtn">Home</button>
      </div>
      <div className="navBtnContainer">
        <button className="navBtn">About</button>
      </div>
      <div className="navBtnContainer">
        <button className="navBtn">Projects</button>
      </div>
      <div className="navBtnContainer">
        <button className="navBtn">Contact</button>
      </div>
    </div>
  );
};
