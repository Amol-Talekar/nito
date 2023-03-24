import { title } from "process";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  incrementScore,
  I_wrongAttempts,
  manageTime,
  manageWrongAttempts,
} from "../../logic/ManageScoreSlice";
import { RootState } from "../../logic/store";
import { questions } from "../DummyData/data";
import * as Styles from "./style";
import { TIME_IN_MILLISECOND } from "../shared/constants";
import CustomRadioButton from "../shared/CustomRadioButton/CustomRadioButton";

const Quiz = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const [isQuizOver, setIsQuizOver] = useState(false);
  const [timer, setTimer] = useState(TIME_IN_MILLISECOND);

  const timeRemaining = useSelector(
    (state: RootState) => state.ManageScoreReducer.timeRemaining
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setAnswers([...answers, value]);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = () => {
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correctAnswer === answers[i]) {
        dispatch(incrementScore());
      } else {
        let question = questions[i].title;
        let userAnswer = answers[i];
        let correctAnswer = questions[i].correctAnswer;

        let user_attempt_obj: I_wrongAttempts = {
          question: question,
          userAnswer: userAnswer,
          correctAnswer: correctAnswer,
        };
        //@ts-ignore
        dispatch(manageWrongAttempts({ user_attempt_obj }));
      }
    }

    setIsQuizOver(true);
  };

  useEffect(() => {
    if (isQuizOver) {
      navigate("/result");
    }
  }, [isQuizOver]);

  useEffect(() => {
    let autoTimer = setTimeout(() => {
      setTimer((prev) => prev - 1000);
    }, 1000);

    if (timer === 0) {
      clearTimeout(autoTimer);
      handleSubmit();
    }
  }, [timer]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(manageTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);

  const myMinutes = Math.floor(timeRemaining / 60000);
  const MySeconds = ((timeRemaining % 60000) / 1000).toFixed(0);

  return (
    <Styles.QuizContainer>
      <Styles.BorderAnimation>
        <span>{myMinutes}</span> : <span>{MySeconds}</span>
      </Styles.BorderAnimation>
      <Styles.QuestionBox>
        {questions &&
          questions.map((singleQuestion, index) => (
            <div key={singleQuestion.id}>
              {currentQuestion == index ? (
                <div>
                  <Styles.QuestionTitle>
                    {index + 1} {") "}
                    {singleQuestion.title}
                  </Styles.QuestionTitle>
                  {singleQuestion.options.map((singleOption, index) => (
                    <CustomRadioButton
                      index={index}
                      singleOption={singleOption}
                      singleQuestion={singleQuestion}
                      handleOptionChange={handleOptionChange}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        <Styles.ButtonBox>
          <Styles.NextButton
            type="button"
            onClick={handleNextQuestion}
            disabled={currentQuestion >= questions.length - 1}
          >
            Next
          </Styles.NextButton>
          <Styles.SubmitButton type="button" onClick={handleSubmit}>
            Submit
          </Styles.SubmitButton>
        </Styles.ButtonBox>
      </Styles.QuestionBox>
    </Styles.QuizContainer>
  );
};

export default Quiz;

// questions.forEach((q, index) => {
//   console.log(
//     "q.correctAnswer : ",
//     q.correctAnswer,
//     " answers[index]:  ",
//     answers[index]
//   );

//   if (q.correctAnswer == answers[index]) {
//     result++;
//   }
//   if (q.correctAnswer !== answers[index]) {
//     // let wrongQuestion = ;
//     // console.log("wrongQuestion => ", wrongQuestion);
//     //@ts-ignore
//     setWrongAttempts([...wrongAttempts, q.title]);
//   }
// });

// setScore(result);

{
  /* <div key={index}>
                      <label>{singleOption}</label>
                      <input
                        type="radio"
                        value={singleOption}
                        placeholder={singleOption}
                        id={String(index)}
                        name={singleQuestion.title}
                        onChange={handleOptionChange}
                      />
                    </div> */
}
