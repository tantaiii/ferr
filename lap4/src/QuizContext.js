// QuizContext.js
import React, { createContext, useState } from 'react';
import { quizData as initialData } from './quizData';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(initialData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Stores { questionIndex: selectedAnswer }
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Function to allow users to add new questions dynamically
  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answer
    });
  };

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = selectedAnswers[currentQuestionIndex];

    // Check answer accuracy and update score
    if (userAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <QuizContext.Provider value={{
      questions,
      currentQuestionIndex,
      selectedAnswers,
      score,
      isCompleted,
      addQuestion,
      handleSelectAnswer,
      handleNext
    }}>
      {children}
    </QuizContext.Provider>
  );
};