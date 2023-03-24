import styled from "styled-components";

export const RadioButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // border: 1px solid green;
  justify-content: space-between;
  padding: 4px;
  border-radius: 8px;

  :hover {
    background-color: orange;
  }
  label {
    display: block;
    min-width: 120px;
    font-size: 24px;
  }

  input {
    width: 36px;
  }
`;
