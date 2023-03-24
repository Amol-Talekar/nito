import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TIME_IN_MILLISECOND } from "../components/shared/constants";

export interface I_wrongAttempts {
  question: string;
  userAnswer: string;
  correctAnswer: string;
}

export interface ScoreInterface {
  score: number;
  timeRemaining: number;
  wrongAttempts: I_wrongAttempts[];
}

export const initState: ScoreInterface = {
  score: 0,
  timeRemaining: TIME_IN_MILLISECOND,
  wrongAttempts: [],
};

export const ManageScoreSlice = createSlice({
  name: "ManageScore",
  initialState: initState,
  reducers: {
    incrementScore: (state) => {
      state.score = state.score + 1;
    },
    manageTime: (state) => {
      state.timeRemaining = state.timeRemaining - 1000;
    },
    manageWrongAttempts: (
      state,
      action: PayloadAction<{ user_attempt_obj: I_wrongAttempts }>
    ) => {
      const { user_attempt_obj } = action.payload;
      console.log("from createSlice => ", user_attempt_obj);

      state.wrongAttempts.push(user_attempt_obj);
    },
  },
});

export const { incrementScore, manageTime, manageWrongAttempts } =
  ManageScoreSlice.actions;

export default ManageScoreSlice.reducer;
