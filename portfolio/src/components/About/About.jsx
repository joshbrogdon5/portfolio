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
        <div className='about-container'>
            <div className='header'>
                <h1>ABOUT</h1>
                <div className='header-line'></div>
            </div>
            <div className='skills-outer-container'>
                <div className='skills-inner-container'>
                    <img className='skill-img' src={jsLogo} alt="JavaScript" />
                    <img className='skill-img' src={reduxLogo} alt="Redux" />
                    <img className='skill-img' src={reactLogo} alt="React" />
                    <img className='skill-img' src={nodeLogo} alt="Node" />
                </div>
                <div className='skills-inner-container'>
                    <img className='skill-img' src={angularLogo} alt="Angular" />
                    <img className='skill-img' src={htmlLogo} alt="HTML" />
                    <img className='skill-img' src={cssLogo} alt="CSS" />
                    <img className='skill-img' src={sqlLogo} alt="PostgreSQL" />
                </div>
            </div>
            <div className='personal-info-container'>
                <div className='img-container wrap'>
                    <img className='profile-img' src={profilePic} alt=""/>
                </div>
                <div className='info-container'>
                    <h2 style={{fontSize: '20pt'}}>Yeah that's me!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                </div>
            </div>
        </div>
    )
}