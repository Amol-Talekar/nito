import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styles from "./style";
import { TextAnim } from "text-animations-react";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Styles.HomeContainer>
      <Styles.HomeBanner>
        <TextAnim
          name="Nito"
          type="rubberband"
          color="orange"
          size={4}
          count="infinite"
          duration={2}
          delay={0}
          grad1={""}
          grad2={""}
          grad3={""}
          grad4={""}
          layer1={""}
          layer2={""}
          layer3={""}
          layer4={""}
          styles={{ textAlign: "center" }}
          top={0}
          right={0}
          bottom={0}
          left={0}
        />
      </Styles.HomeBanner>
      <Styles.QuizExplainerContainer>
        <Styles.RuleBanner>Test your General Knowledge!</Styles.RuleBanner>
        <Styles.RulesBox>
          <ul>
            <li>
              You have exactly one minute to solve the quiz so keep track of
              time !
            </li>
            <li>Quiz will automatically submit after timer runs out. </li>
            <li>Every question only has one correct answer.</li>
            <li>
              Not attempting or missing a question will be consider an incorrect
              answer.
            </li>
          </ul>
        </Styles.RulesBox>
        <Styles.AttemptButton onClick={() => navigate("/quiz")}>
          <span>Attempt the Quiz !</span>
        </Styles.AttemptButton>
      </Styles.QuizExplainerContainer>
    </Styles.HomeContainer>
  );
};

export default Home;
