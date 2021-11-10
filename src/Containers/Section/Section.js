import React from "react";
import SectionWrapper from "./SectionWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import Menyu from "../Menyu";
import Swipers from "../Swiper";
import Contact from "../Contact";
import Landing from "../Landing";

const Section = () => {
  return (
    <SectionWrapper>
      <Landing />
      <div className="text-center">
        <p className="text3">Features</p>
        <p className="text4">Food with a New Passion</p>
      </div>
      <div className="row">
        <div className="card col-12 col-md-4">
          <div className="foto">
            <img src="icon1.png" alt="" />
          </div>
          <p className="text5">Quality Food</p>
          <p className="text6">
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
        <div className="card col-12 col-md-4">
          <div className="foto">
            <img src="icon3.png" alt="" />
          </div>
          <p className="text5">Quality Food</p>
          <p className="text6">
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
        <div className="card col-12 col-md-4">
          <div className="foto">
            <img src="icon2.png" alt="" />
          </div>
          <p className="text5">Quality Food</p>
          <p className="text6">
            It can be a very secure path to earn good money and make you very
            successful creative entrepreneur.
          </p>
        </div>
      </div>
      <div className="row customSection">
        <div className="col-md-6 col-12">
          <img src="img2.png" alt="" className="fotos" />
        </div>
        <div className="col-md-6 col-12 about text-center">
          <p className="text3">About us</p>
          <p className="text4">
            Food Stalls with Persons but to Product marketing plane catlogues
            etc to.
          </p>

          <p className="text6">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also equipment
            make your marketing plane Effective.
          </p>
          <button className="book">Read More</button>
        </div>
      </div>
      <Menyu />
      <div className="row sectionabout">
        <div className="col-md-8">
          <div className="away">
            <p className="text3 text0">Take away</p>
            <p className="text4 text0">
              Food Stalls with Persons but to Product marketing plane.{" "}
            </p>
            <p className="text6 text0">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipmentwith Persons but also Just Food Stalls with
              Persons.
            </p>
            <div>
              <button className="button1">
                <div className="d-flex">
                  <img src="apple.png" alt="apple" />
                  <p className="text8">App Store</p>
                </div>
              </button>
              <button className="button1 bg-white button2">
                <div className="d-flex">
                  <img src="play.png" alt="play" />
                  <p className="text8 text-black">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 SAIMG">
          <img src="img3.png" alt="" />
        </div>
      </div>
      <div className="SectionBottom container text-center">
        <div>
          <p className="text3">Testimonial</p>
          <p className="text4">Making Food great again and again</p>
          <p className="text6 text9">
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers, Effective Product catlogues
            etc to make your.
          </p>
        </div>
      </div>
      <Swipers />
      <Contact />
    </SectionWrapper>
  );
};

export default Section;
