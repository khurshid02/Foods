import styled from "styled-components";

const FooterWrapper = styled.div`
  .container {
    margin: 0 180px;
    min-height: 300px;
    padding: 100px 0;
  }

  .food {
    img {
      border-radius: 50%;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: white;
      opacity: 0.7;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }

  li {
    list-style-type: none;
  }
`;

export default FooterWrapper;
