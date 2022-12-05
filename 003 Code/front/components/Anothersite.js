import React from "react";
import styled from "styled-components";

const StyleComponent = styled.div`
  display: flex;
  padding: 1rem;
  text-align: center;

  .image-box {
    width: 150px;
    height: 150px;
    object-fit: cover;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 5px;
      width: 300px;
      height: 200px;
    }
  }
`;

const Anothersite = () => {
  return (
    <StyleComponent>
      <div>
        <h3>다른 공모전 사이트</h3>
        <div className="image-box">
          <a href="https://www.wevity.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.wevity.com/images/logo_wevity.png"
              alt="link"
            ></img>
          </a>
          <a
            href="https://www.thinkcontest.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.thinkcontest.com/assets/img/thinkgood_profile.jpg"
              alt="link"
            ></img>
          </a>
        </div>
      </div>
    </StyleComponent>
  );
};

export default Anothersite;
