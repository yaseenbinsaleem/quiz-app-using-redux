const INITIAL_STATE = [
  {
    questionText: " Which of these elements are all <table> elements?",
    answerOptions: [
      { answerText: "<table><head><tfoot>", isCorrect: false },
      { answerText: "<thead><body><tr>", isCorrect: false },
      { answerText: "<table><tr><td>", isCorrect: true },
      { answerText: "<table><tr><tt>", isCorrect: false },
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
    questionText: "Who is making the Web standards?",
    answerOptions: [
      { answerText: "MicroSoft", isCorrect: false },
      { answerText: "Google", isCorrect: false },
      { answerText: "The World  Wide Web Consortium", isCorrect: true },
      { answerText: "Mozilla FireFox", isCorrect: false },
    ],
  },
  {
    questionText: " What does HTML stand for?",
    answerOptions: [
      { answerText: "Home Tool Markup Language", isCorrect: false },
      { answerText: "Hyperlink Markup Language", isCorrect: false },
      { answerText: "HyperText Markup Language", isCorrect: true },
      { answerText: "HyperStar Markup Language", isCorrect: false },
    ],
  },
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
    questionText: "Choose the correct HTML element for the largest heading?",
    answerOptions: [
      { answerText: "<h1>", isCorrect: true },
      { answerText: "<Head>", isCorrect: false },
      { answerText: "<Heading>", isCorrect: false },
      { answerText: "<H6>", isCorrect: false },
    ],
  },
  {
    questionText: " What is the correct HTML element for inserting a line break?",
    answerOptions: [
      { answerText: "<lb>", isCorrect: false },
      { answerText: "<br>", isCorrect: false },
      { answerText: "<lbr>", isCorrect: false },
      { answerText: "<break>", isCorrect: true },
    ],
  },



];

const reducer = (stateReducer = INITIAL_STATE) => {
  return stateReducer;
};

export default reducer;
