import React from 'react';

function Score(props) {
  const { score, totalQuestions, onRestart } = props;

  return (
    <div className="text-start py-3">
      <h1 className="display-5 fw-medium mb-2 text-dark" style={{ fontFamily: 'sans-serif' }}>Quiz Ended</h1>
      <h2 className="fs-3 fw-medium text-dark" style={{ fontFamily: 'sans-serif' }}>Your Score: {score}</h2>
      
      <button 
        className="btn btn-outline-primary px-4 py-2 mt-4 text-uppercase fw-semibold"
        onClick={onRestart}
      >
        Replay
      </button>
    </div>
  );
}

export default Score;