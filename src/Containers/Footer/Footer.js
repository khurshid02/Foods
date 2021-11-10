import React from "react";
import FooterWrapper from "./FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="bg-black">
        <div className="row container">
          <div className="food col-lg-3 col-sm-6 col-md-4">
            <img src="food.jpg" alt="" />
            <p>www.company name.com</p>
            <p>companyname@gmail.com</p>
            <p>Phone: +7 485-118-03-25</p>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-4">
            <ul>
              <li>
                <a href="https://www.youtube.com/">Home</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Landingpage</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Documentation</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Referral Program</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">UI & UX Design</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Design</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-4">
            <ul>
              <li>
                <a href="https://www.youtube.com/">Menu</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Landingpage</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Documentation</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Referral Program</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">UI & UX Design</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Design</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-4">
            <ul>
              <li>
                <a href="https://www.youtube.com/">Company</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Landingpage</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Documentation</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Referral Program</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Landingpage</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Design</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
