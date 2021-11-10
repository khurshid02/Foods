import styled from "styled-components";

const ContactWrapper = styled.div`
  padding: 100px 0;
  .backround {
    min-height: 400px;
  }
  .text3 {
    font-size: 16px;
    color: #dc780b;
    letter-spacing: 0.2em;
    font-family: Roboto;
    text-align: center;
  }

  .text4 {
    font-size: 32px;
    text-transform: capitalize;
    text-align: center;
    font-weight: bold;
    font-family: Philosopher;
  }
  .form {
    width: 500px;
    background-color: #fbf1e7;
    text-align: center;
    border-radius: 10px;
    min-width: 600px;
  }

  .textlabel {
    font-family: Roboto;
    font-size: 16px;
    color: #000000;
  }
  .forms {
    position: relative;
    input {
      width: 100%;
      padding: 20px 10px;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      padding: 0px 30px;
    }
  }

  .button {
    min-width: 150px;
  }
`;

export default ContactWrapper;
