import React from 'react';
import { useSelector } from 'react-redux';

export default function QuizResult() {
  const { questions } = useSelector((state) => state.quiz);

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      <h2 style={{ background: '#222', color: '#fff', padding: '30px', textAlign: 'center' }}>
        Quiz Review
      </h2>
      
      <div style={{ marginTop: '20px' }}>
        {questions.map((q) => {
          const isCorrect = q.userAnswer === q.correctAnswer;
          
          return (
            <div 
              key={q.id} 
              style={{
                background: isCorrect ? '#d1fae5' : '#fee2e2',
                border: `1px solid ${isCorrect ? '#a7f3d0' : '#fca5a5'}`,
                borderRadius: '6px',
                padding: '20px',
                marginBottom: '20px'
              }}
            >
              <h4 style={{ color: isCorrect ? '#065f46' : '#991b1b', margin: '0 0 15px 0' }}>
                Q.{q.id}. {q.questionText}
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '10px' }}>
                {q.options.map((option, idx) => (
                  <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555' }}>
                    <input 
                      type="radio" 
                      disabled 
                      checked={q.userAnswer === option} 
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div style={{ marginTop: '15px', background: '#e5e7eb', padding: '10px', borderRadius: '4px', border: '1px solid #d1d5db' }}>
                Right answer is: <strong>{q.correctAnswer}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}