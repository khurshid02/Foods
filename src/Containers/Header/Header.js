import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="d-flex justify-content-between">
        <img src="food.png" alt="logo" className="logo" />
        <div className="d-md-flex d-none align-items-center">
          <ul className="m-0">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
          </ul>
          <button className="book">Booking Now</button>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
