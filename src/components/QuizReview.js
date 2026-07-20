import React from 'react';
import { useSelector } from 'react-redux';

export default function QuizReview() {
  const { questions } = useSelector((state) => state.quiz);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ background: '#222', color: '#fff', padding: '30px', textAlign: 'center' }}>
        Quiz Review
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '30px' }}>
        {questions.map((q) => (
          <div 
            key={q.id} 
            style={{
              border: '1px solid #99f6e4',
              background: '#ccfbf1',
              padding: '15px',
              borderRadius: '5px',
              width: '110px',
              textAlign: 'center'
            }}
          >
            <p style={{ margin: '0 0 10px 0' }}>Question No {q.id}</p>
            <strong style={{ textDecoration: 'underline' }}>
              {q.userAnswer ? 'Answered' : 'Pending'}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}