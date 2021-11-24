const INITIAL_STATE = [
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

const reducer = (stateReducer = INITIAL_STATE) => {
  return stateReducer;
};

export default reducer;
