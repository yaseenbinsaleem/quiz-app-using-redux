import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Quizapp() {
  const questions = [
    {
      questionText: "What is the capital of Pakistan?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "islamabad", isCorrect: true },
        { answerText: "Dubai", isCorrect: false },
      ],
    },
    {
      questionText: "Who is PM Of Pakistan?",
      answerOptions: [
        { answerText: "zardari", isCorrect: false },
        { answerText: "Imran khan", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Bilawal", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "React is library of ?",
      answerOptions: [
        { answerText: "c ", isCorrect: false },
        { answerText: "php", isCorrect: false },
        { answerText: "python", isCorrect: false },
        { answerText: "js", isCorrect: true },
      ],
    },
  ];

  const [questionIndex, setquestionIndex] = useState(0);
  const [Score, setScore] = useState(0);
  const [ShowResult, setShowResult] = useState(false);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect === true) {
      setScore(Score + 1);
    } else {
      setScore(Score + 0);
    }

    if (questionIndex < questions.length) {
      setquestionIndex(questionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <>
      {ShowResult ? (
        <h1>
          your score is = {Score} out of {questionIndex}
        </h1>
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
              <h1>{questions[questionIndex].questionText}</h1>
              {questions[questionIndex].answerOptions.map((answerOptions) => (
                <button
                  style={{ padding: "5px", margin: "2px" }}
                  onClick={() => handleCorrectAnswer(answerOptions.isCorrect)}
                >
                  {answerOptions.answerText}
                </button>
              ))}
              <p>
                {" "}
                your score is = {Score} out of {questionIndex}
              </p>
            </div>
          </Paper>
        </Box>
      )}
    </>
  );
}
