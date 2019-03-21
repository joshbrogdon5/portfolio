import React from "react";
import './Nav.css';

export const NavJSX = () => {
  return (
    <div class="navContainer">
      <div class="navBtnContainer">
        <button class="navBtn">Home</button>
      </div>
      <div class="navBtnContainer">
        <button class="navBtn">About</button>
      </div>
      <div class="navBtnContainer">
        <button class="navBtn">Projects</button>
      </div>
      <div class="navBtnContainer">
        <button class="navBtn">Contact</button>
      </div>
    </div>
  );
};
