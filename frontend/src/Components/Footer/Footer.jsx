import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo4} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            amet illum ullam aut assumenda eos, saepe corrupti ab non dolores.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Delevery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Getting Touch</h2>
          <ul>
            <li>7044126185</li>
            <li>shivachatterjee@257gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © EatsOnWheels.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
