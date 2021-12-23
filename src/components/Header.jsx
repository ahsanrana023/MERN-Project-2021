import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const Header = () => {
  return (
    <Container className="fluid-container">
      <Textheader>
        <h1 style={{ fontSize: "55px", fontWeight: "bold" }}>
          Go where you feel most alive
        </h1>
      </Textheader>
      <ButtonGroup>
        <LeftButton className="btn">Book Now</LeftButton>
        <RightButton className="btn">Add Review</RightButton>
      </ButtonGroup>
      <DownArrow>
        <i class="fas fa-arrow-down"></i>
      </DownArrow>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-image: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.7)),
    url("images/travel2.jfif");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Textheader = styled.div`
  padding-top: 40vh;
  width: 50%;
  margin-left: 25%;
  font-weight: bold;

  text-align: center;
  font-size: 50px;
  color: #fff;
  text-transform: uppercase;
  word-spacing: 4px;
  letter-spacing: 3px;
  line-height: 7rem;
  background: #0fbcf9;
  background: -webkit-linear-gradient(to right, #0fbcf9 0%, #f53b57 100%);
  background: -moz-linear-gradient(to right, #0fbcf9 0%, #f53b57 100%);
  background: linear-gradient(to right, #0fbcf9 0%, #f53b57 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const LeftButton = styled.div`
  background-color: #fff;
  width: 180px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 22px;
  background-color: #f53b57;
  border: 1px solid #f53b57;
  color: #fff;
  text-transform: uppercase;
`;
const RightButton = styled(LeftButton)`
  opacity: 0.8;
`;
const DownArrow = styled.div`
  color: #f53b57;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  animation-name: down;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  font-size: 26px;
`;
