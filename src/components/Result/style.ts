import styled from "styled-components";

export const ResultContainer = styled.div`
  width: 99vw;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ScoreTitle = styled.h1`
  padding: 8px;
  font-size: 24px;
  white-space: nowrap;
  span {
    color: orangered;
  }
`;
export const ScoreTitle2 = styled.h2`
  padding: 8px;
  font-size: 22px;
  white-space: nowrap;
  span {
    color: orangered;
  }
`;

export const BannerBox = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: gold;
  min-width: 180px;
  border-radius: 12px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const WrongAttemptsBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: darkblue;
  color: white;
  padding: 8px;
  border-radius: 12px;

  h2 {
    text-align: center;
  }
  @media screen and (min-width: 840px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (min-width: 840px) {
    width: 65vw;
  }
`;

export const TwoAnswersBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  padding: 2px;
`;

export const CorrectAnswerBox = styled.h5`
  background-color: green;
  border-radius: 8px;
  width: 40%;
  padding: 10px;
  color: white;
`;
export const UserAnswerBox = styled.h5`
  background-color: gold;
  width: 40%;
  padding: 10px;
  border-radius: 8px;
  color: black;
`;

export const PieBox = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
