// Quiz.js
import React, { useContext, useEffect } from 'react';
import { QuizContext } from './QuizContext';

const Quiz = () => {
  const { 
    questions, 
    currentQuestionIndex, 
    selectedAnswers, 
    score, 
    isCompleted, 
    handleSelectAnswer, 
    handleNext 
  } = useContext(QuizContext);

  // Hook dependency tracking for side-effect tracking requirements
  useEffect(() => {
    if (!isCompleted && questions[currentQuestionIndex]) {
      console.log(`Now displaying question ${currentQuestionIndex + 1}`);
    }
  }, [currentQuestionIndex, isCompleted, questions]);

  if (isCompleted) {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h1 style={{ color: '#dc3545', fontSize: '2.5rem', fontWeight: 'bold' }}>Quiz Completed!</h1>
        <p style={{ fontSize: '1.5rem' }}>Your score: {score}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const currentSelection = selectedAnswers[currentQuestionIndex] || '';

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', padding: '20px' }}>
      <h1 style={{ color: '#dc3545', margin: '0 0 10px 0', fontSize: '2.5rem' }}>
        Question {currentQuestionIndex + 1}
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
        {currentQuestion.question}
      </p>

      <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
        {currentQuestion.answers.map((answer, index) => (
          <label 
            key={index} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '15px', 
              borderBottom: index < currentQuestion.answers.length - 1 ? '1px solid #e0e0e0' : 'none',
              cursor: 'pointer',
              fontSize: '1.1rem'
            }}
          >
            <input 
              type="radio" 
              name={`question-${currentQuestionIndex}`}
              value={answer}
              checked={currentSelection === answer}
              onChange={() => handleSelectAnswer(answer)}
              style={{ marginRight: '15px', transform: 'scale(1.2)' }}
            />
            {answer}
          </label>
        ))}
      </div>

      <button 
        onClick={handleNext}
        disabled={!currentSelection}
        style={{ 
          backgroundColor: '#dc3545', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          padding: '10px 25px', 
          fontSize: '1.1rem', 
          cursor: currentSelection ? 'pointer' : 'not-allowed',
          opacity: currentSelection ? 1 : 0.6
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;