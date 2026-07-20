import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectAnswer, nextQuestion, prevQuestion, goToFirstQuestion, goToLastQuestion 
} from '../features/quiz/quizSlice';

export default function Quiz() {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex } = useSelector((state) => state.quiz);
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return null;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ background: '#222', color: '#fff', padding: '30px', textAlign: 'center' }}>
        JavaScript Quiz
      </h2>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Q.{currentQuestion.id} {currentQuestion.questionText}</h3>
        
        {/* Vùng chọn đáp án */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', margin: '20px 0' }}>
          {currentQuestion.options.map((option, idx) => {
            const isSelected = currentQuestion.userAnswer === option;
            return (
              <label 
                key={idx} 
                style={{
                  padding: '20px',
                  border: '1px solid #b4ccff',
                  borderRadius: '5px',
                  background: isSelected ? '#cbdcff' : '#e2ecff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <input 
                  type="radio" 
                  name={`quiz-question-${currentQuestion.id}`} 
                  value={option}
                  checked={isSelected}
                  onChange={() => {
                    dispatch(selectAnswer({ questionId: currentQuestion.id, answer: option }));
                  }}
                />
                {option}
              </label>
            );
          })}
        </div>

        {/* Nút điều hướng chuyển câu hỏi */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '30px 0', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
          <button onClick={() => dispatch(goToFirstQuestion())} style={btnStyle}>First</button>
          <button onClick={() => dispatch(prevQuestion())} style={btnStyle}>Prev</button>
          <button onClick={() => dispatch(nextQuestion())} style={btnStyle}>Next</button>
          <button onClick={() => dispatch(goToLastQuestion())} style={btnStyle}>Last</button>
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  background: '#3b82f6',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: '600'
};