import styled from "styled-components";

const SectionWrapper = styled.div`
  .landing {
    align-items: center;
    .imgBox {
      img {
        max-width: 100%;
      }
    }
  }
  .text {
    font-size: 48px;
    font-family: Philosopher;
  }

  .text2 {
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: bold;
    font-family: Roboto;
  }
  .book {
    margin: 10px;
    background: #dc780b;
    border-radius: 5px;
    color: white;
    border: #dc780b solid 2px;
    height: 45px;
    font-family: Roboto;
  }

  .food {
    margin: 10px;
    background: white;
    border-radius: 5px;
    height: 45px;
    border: black solid 2px;
    font-family: Roboto;
  }

  .textcenter {
    text-align: center;
    color: black;
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

  .card {
    text-align: center;
    margin: auto;
    border: none;
  }

  .foto {
    width: 60px;
    height: 60px;
    margin: auto;
    border-radius: 50%;
    background-color: #8fa632;
    margin-top: 30px;
  }

  .text5 {
    font-size: 25px;
    font-family: Philosopher;
    font-weight: bold;
  }

  .text6 {
    font-size: 16px;
    opacity: 0.7;
    font-family: Roboto;
  }
  .fotos {
    border-radius: 30px;
    max-width: 100%;
  }
  .customSection {
    align-items: center;
    padding: 100px 0;
  }
  .sectionabout {
    display: flex;
    padding: 100px 0;
    .away {
      align-items: center;
    }
    .SAIMG {
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
      }
    }
  }
  .text7 {
    width: 300px;
    text-align: center;
    margin: auto;
  }

  .text0 {
    text-align: start;
  }

  .away {
    height: 100%;
    align-items: center;
  }

  .button1 {
    border: black solid 2px;
    background-color: black;
    margin-top: 30px;
    margin-right: 50px;
  }

  .button2 {
    border: cadetblue solid 2px;
  }

  .text8 {
    color: white;
    margin-left: 10px;
    text-align: center;
    margin-top: 5px;
  }

  .text9 {
    margin: auto;
    text-align: center;
  }
`;

export default SectionWrapper;
