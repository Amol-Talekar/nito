import styled, { keyframes } from "styled-components";

export const QuizContainer = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    padding: 20px 4px;
  }
`;

export const QuestionBox = styled.div`
  width: 50%;
  padding: 20px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  //border: 1px solid red;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: darkblue;
  color: white;

  @media screen and (max-width: 480px) {
    width: 80%;
    margin: auto 4px;
    padding: 8px;
  }
  @media screen and (max-width: 840px) {
    width: 90%;
  }
`;
export const QuestionTitle = styled.h3`
  font-size: 28px;

  @media screen and (max-width: 840px) {
    font-size: 20px;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const NextButton = styled.button`
  position: relative;
  background-color: gold;
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 0;
  width: 40%;
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 8px 16px;
  cursor: pointer;
  z-index: 1;
  &:before {
    border-radius: 8px;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: cyan;
    position: absolute;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 50%;
    transition: transform ease-in-out 0.5s;
  }
  &:hover {
    &:before {
      transform: scaleX(1);
    }
  }

  :disabled {
    background-color: gray;

    color: white;
    &:before {
      background-color: gray;
    }
  }
`;

export const SubmitButton = styled.button`
  position: relative;
  background-color: gold;
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 0;
  width: 40%;
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 8px 16px;
  cursor: pointer;
  z-index: 1;
  &:before {
    border-radius: 8px;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: orangered;
    position: absolute;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 50%;
    transition: transform ease-in-out 0.5s;
  }
  &:hover {
    &:before {
      transform: scaleX(1);
    }
  }
`;

export const TimerBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: gold;

  span {
    font-size: 20px;
  }
`;

const borderAnimation = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const BorderAnimation = styled.div`
  border: 2px solid transparent;
  background: linear-gradient(to right, #f15a24, #e0be36, #69c9d0, #ef3e42);
  background-size: 200% 100%;
  animation: ${borderAnimation} 3s linear infinite;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    font-size: 30px;
    color: blue;
    font-weight: bolder;

    /* @media screen and (max-width: 840px) {
    font-size: 20px;
  } */
  }
`;
