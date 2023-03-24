import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 10px 50px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    padding: 2px 4px;
  }
`;

export const HomeBanner = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 0px;
`;

export const QuizExplainerContainer = styled.div`
  background-color: darkblue;
  padding: 36px;
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-radius: 8px;

  @media screen and (max-width: 480px) {
    width: 99%;
    padding: 0px;
    padding-right: 4px;
  }

  @media screen and (max-width: 720px) {
    width: 99%;
    padding: 12px;
  }
`;

export const RulesBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-right: 12px;

  ul {
    li {
      color: white;
      font-size: 18px;
      @media screen and (min-width: 720px) {
        font-size: 24px;
      }
    }
  }
`;
export const RuleBanner = styled.h2`
  width: 100%;
  color: white;
  text-align: center;
  font-weight: bold;

  white-space: nowrap;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
  @media screen and (min-width: 720px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const AttemptButton = styled.button`
  position: relative;
  background-color: gold;
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 0;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
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
`;
