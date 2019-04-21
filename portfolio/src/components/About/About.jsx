import React from "react";
import "./About.css";
import angularLogo from '../../images/angular-logo.png';
import cssLogo from '../../images/css-logo.png';
import htmlLogo from '../../images/html-logo.png';
import jsLogo from '../../images/JavaScript-logo.png';
import nodeLogo from '../../images/node-logo.png';
import sqlLogo from '../../images/postgres-logo.png';
import reactLogo from '../../images/react-logo.png';
import reduxLogo from '../../images/redux-logo.png';
import profilePic from '../../images/profile poc.png'


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
                <div class='img-container'>
                    <img class='profile-img' src={profilePic} alt=""/>
                </div>
            </div>
        </div>
    )
}