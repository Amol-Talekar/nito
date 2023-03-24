import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../logic/store";
import { questions } from "../DummyData/data";
//@ts-ignore
import Chart from "react-apexcharts";

import * as Styles from "./style";

interface ChartOptions {
  chart: {
    id: string;
    type: string;
  };
  labels: string[];
}

interface ChartData {
  name: string;
  data: number[];
}

const Result = () => {
  const { score, timeRemaining, wrongAttempts } = useSelector(
    (state: RootState) => state.ManageScoreReducer
  );

  const myMinutes = Math.floor(timeRemaining / 60000);
  const MySeconds = ((timeRemaining % 60000) / 1000).toFixed(0);

  const chartOptions: ChartOptions = {
    chart: {
      id: "my-chart",
      type: "pie",
    },
    labels: ["Correct Answers", "Incorrect Answers"],
  };

  const inCorrectQuestions = questions.length - score;
  const chartData: ChartData = {
    name: "Questions",
    data: [score, inCorrectQuestions],
  };

  return (
    <Styles.ResultContainer>
      {
        <div>
          <Styles.BannerBox>
            <Styles.ScoreTitle>
              Score :{" "}
              <span>
                {score}/{questions.length}
              </span>
            </Styles.ScoreTitle>
            <Styles.ScoreTitle2>
              Time Saved : <span>{myMinutes}m</span> <span>{MySeconds}s</span>
            </Styles.ScoreTitle2>
          </Styles.BannerBox>

          <Styles.WrongAttemptsBox>
            <h2> Full Result : Wrong Answers</h2>
            {wrongAttempts?.length > 0 ? (
              <div>
                {wrongAttempts.map((item, index) => (
                  <div key={item.userAnswer}>
                    <h3>{item.question}</h3>
                    <Styles.TwoAnswersBox>
                      <Styles.UserAnswerBox>
                        {!item.userAnswer ? "No Given Answer" : item.userAnswer}
                      </Styles.UserAnswerBox>
                      <Styles.CorrectAnswerBox>
                        {item.correctAnswer}
                      </Styles.CorrectAnswerBox>
                    </Styles.TwoAnswersBox>
                  </div>
                ))}
              </div>
            ) : (
              <h2>You don't have any wrong attempt !</h2>
            )}
          </Styles.WrongAttemptsBox>
        </div>
      }

      <Styles.PieBox>
        {/* @ts-ignore */}
        <Chart
          options={chartOptions}
          series={chartData.data}
          labels={chartOptions.labels}
          type={chartOptions.chart.type}
          width={320}
        />
      </Styles.PieBox>
    </Styles.ResultContainer>
  );
};

export default Result;

{
  /* {wrongAttempts ? (
              <div>
                {wrongAttempts.map((item, index) => (
                  <h3 key={index}>{item}</h3>
                ))}
              </div>
            ) : (
              <h3>
                You got all the right answers : {JSON.stringify(wrongAttempts)}
              </h3>
            )} */
}
