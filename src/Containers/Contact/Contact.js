import React from "react";
import ContactWrapper from "./ContactWrapper";

import { InputBase, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="backround">
        <p className="text3">Testimonial</p>
        <p className="text4">Making Food great again and again</p>
        <div className="d-flex forms">
          <input type="text" placeholder="Enter Text..." />
          <button className="btn-primary btn">SEND</button>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
