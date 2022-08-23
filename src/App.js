import React, { useState } from "react";
import "./App.css";
import { Questions } from "./question/question";

export const App = () => {
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const OptionClcked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }


    if (currentQuestions + 1 < Questions.length) {
      setCurrentQuestions(currentQuestions + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestions(0);
    setShowResult(false);
  };


  return (
    <>
      {showResult ? (
        <div className="final-results">
        <h1>Final Results</h1>
          <h2>
            You scored {score} out of {Questions.length} Questions<br />
            {(score / Questions.length) * 100}%<br />

            <button onClick={() => restartGame()}>Restart Quiz</button>
          </h2>
    </div>
      ) : (
        <div className="App">
          <h2>RANDOM-QUIZ-GENERATOR</h2>
          <h3>
            Question {currentQuestions + 1} out of {Questions.length} Questions
          </h3><br />
          <div className="card">
            <h1>Question: {Questions[currentQuestions]?.text}</h1>
              {Questions[currentQuestions]?.options?.map((option) => {
                return (
                  <ol key={option.id}>
                  <li onClick={() => OptionClcked(option.isCorrect)}>
                    {option.text}
                  </li>
            </ol>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};