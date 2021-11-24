import Card from "./component/Card";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Quiz from "./component/Quiz";
import Quizapp from "./component/Quizapp";

function App() {
  const state = useSelector((e) => e);

  return (
    <>
      {/* <Quiz /> */}
      <Card />

      {/* <Quizapp /> */}
    </>
  );
}
export default App;
