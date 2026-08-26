import { useState } from 'react';
import Question from './components/question.jsx';
import ResultsScreen from './components/ResultsScreen.jsx';

const questions = [
  {
    id: 1,
    question: "Which hook is used to manage state in a function component?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correctAnswer: "useState"
  },
  {
    id: 2,
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Marking Language",
      "HyperText Markdown Language",
      "Hyperlink Text Markup Language"
    ],
    correctAnswer: "HyperText Markup Language"
  },
  {
    id: 3,
    question: "Which CSS framework uses utility classes like 'flex' and 'pt-4'?",
    options: ["Bootstrap", "Tailwind CSS", "Bulma", "Sass"],
    correctAnswer: "Tailwind CSS"
  },
  {
    id: 4,
    question: "What command is used to start a Vite development server?",
    options: ["npm run dev", "npm start", "npm run build", "vite launch"],
    correctAnswer: "npm run dev"
  },
  {
    id: 5,
    question: "Which HTML tag is used to link an external JavaScript file?",
    options: ["<link>", "<js>", "<script>", "<href>"],
    correctAnswer: "<script>"
  }
];

function App() {

  const [userName, setUserName] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentIndex + 1 === questions.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    }
  };

  if (!isStarted) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-gray-100 rounded text-center shadow">

        <h1 className="text-2xl font-bold mb-4">
          Welcome to the Quiz
        </h1>

        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name to start the quiz"
          className="border p-2 rounded w-full mb-4 outline-none focus:border-blue-500"
        />

        <button
          disabled={userName.trim() === ""}
          onClick={() => setIsStarted(true)}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-300 w-full font-semibold transition"
        >
          Start Quiz
        </button>

      </div>
    );
  }

  if (isFinished) {
    return (
      <ResultsScreen
        userName={userName}
        score={score}
        total={questions.length}
        onRestart={() => {
          setIsStarted(false);
          setCurrentIndex(0);
          setSelectedAnswer(null);
          setScore(0);
          setIsFinished(false);
        }}
      />
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow-md border border-gray-100">

      <p className="text-gray-500 font-medium mb-2">
        Question {currentIndex + 1} of {questions.length}
      </p>

      <Question
        data={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelect={setSelectedAnswer}
      />

      {selectedAnswer !== null && (
        <div className="mt-4 p-3 rounded font-semibold text-center bg-gray-100">

          {selectedAnswer === currentQuestion.correctAnswer ? (
            <span className="text-green-600">
              Correct!
            </span>
          ) : (
            <span className="text-red-600">
              Incorrect - the right answer was {currentQuestion.correctAnswer}.
            </span>
          )}

        </div>
      )}

      {selectedAnswer !== null && (
        <button
          onClick={handleNext}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-bold transition"
        >
          {currentIndex + 1 === questions.length
            ? "See Results"
            : "Next Question"}
        </button>
      )}

    </div>
  );
}

export default App 