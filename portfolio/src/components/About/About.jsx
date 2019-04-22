import React from "react";
import "./About.css";
import angularLogo from '../../images/angular-logonew.png';
import cssLogo from '../../images/css-logonew.png';
import htmlLogo from '../../images/html-logonew.png';
import jsLogo from '../../images/JavaScript-logonew.png';
import nodeLogo from '../../images/node-logonew.png';
import sqlLogo from '../../images/postgres-logonew.png';
import reactLogo from '../../images/react-logonew.png';
import reduxLogo from '../../images/redux-logonew.png';
import profilePic from '../../images/profile-pic.jpg'


export const AboutJSX = () => {
    return (
        <div class='about-container'>
            <div class='about-header'>
                <h1>ABOUT</h1>
                <div class='header-line'></div>
            </div>
            <div class='skills-outer-container'>
                <div class='skills-inner-container'>
                    <img class='skill-img' src={jsLogo} alt="JavaScript" />
                    <img class='skill-img' src={reduxLogo} alt="Redux" />
                    <img class='skill-img' src={reactLogo} alt="React" />
                    <img class='skill-img' src={nodeLogo} alt="Node" />
                </div>
                <div class='skills-inner-container'>
                    <img class='skill-img' src={angularLogo} alt="Angular" />
                    <img class='skill-img' src={htmlLogo} alt="HTML" />
                    <img class='skill-img' src={cssLogo} alt="CSS" />
                    <img class='skill-img' src={sqlLogo} alt="PostgreSQL" />
                </div>
            </div>
            <div class='personal-info-container'>
                <div class='img-container wrap'>
                    <img class='profile-img' src={profilePic} alt=""/>
                </div>
                <div class='info-container'>
                    <h2 style={{fontSize: '20pt'}}>Yeah that's me!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                </div>
            </div>
        </div>
    )
}