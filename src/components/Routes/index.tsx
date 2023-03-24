import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Quiz from "../Quiz";
import Result from "../Result";

const FullRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default FullRoutes;
