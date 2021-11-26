import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

export default function Quizapp() {
  const state = useSelector((stateReducer) => stateReducer)

  const [questionIndex, setquestionIndex] = useState(0);
  const [Score, setScore] = useState(0);
  const [ShowResult, setShowResult] = useState(false);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect === true) {
      setScore(Score + 1);
    } else {
      setScore(Score + 0);
    }

    if (questionIndex < state.length - 1) {
      setquestionIndex(questionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <>
      {ShowResult ? (
        <Paper elevation={10} sx={{ justifyContent: "center", m: 20, p: 10 }}>
          <h1>
            your score is = {Score} out of {state.length}
          </h1>
        </Paper>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 10,
              width: 500,
              height: 400,
            },
          }}
        >
          <Paper elevation={10}>
            <div style={{ margin: "50px" }}>
              <h1>{state[questionIndex].questionText}</h1>
              {state[questionIndex].answerOptions.map((answerOptions, index) => (
                <button key={index}
                  style={{ padding: "5px", margin: "2px" }}
                  onClick={() => handleCorrectAnswer(answerOptions.isCorrect)}
                >
                  {answerOptions.answerText}
                </button>
              ))}

            </div>
          </Paper>
        </Box>
      )}
    </>
  );
}
