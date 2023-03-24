import React from "react";
import * as Styles from "./style";

const CustomRadioButton = (props: any) => {
  const { index, singleOption, singleQuestion, handleOptionChange } = props;
  return (
    <Styles.RadioButtonContainer key={index}>
      <label>{singleOption}</label>
      <input
        type="radio"
        value={singleOption}
        id={String(index)}
        name={singleQuestion.title}
        onChange={handleOptionChange}
      />
    </Styles.RadioButtonContainer>
  );
};

export default CustomRadioButton;
