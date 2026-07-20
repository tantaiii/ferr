import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setViewMode } from './features/quiz/quizSlice';
import Quiz from './components/Quiz';
import QuizReview from './components/QuizReview';
import QuizResult from './components/QuizResult';

export default function App() {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.quiz.viewMode);

  return (
    <div>
      {/* Navigation Header mockup */}
      <nav style={{ padding: '15px 30px', borderBottom: '1px solid #ddd', display: 'flex', gap: '20px', background: '#fff' }}>
        <span style={{ fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}>Home</span>
        <span style={{ color: '#666' }}>About</span>
        <span style={{ color: '#666' }}>News</span>
        <span style={{ color: '#666' }}>Quiz</span>
        <span style={{ color: '#666' }}>Contact</span>
      </nav>

      {/* Dynamic View rendering */}
      {viewMode === 'quiz' && <Quiz />}
      {viewMode === 'review' && <QuizReview />}
      {viewMode === 'result' && <QuizResult />}

      {/* Persistent Bottom Layout Bar */}
      <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '0 20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => dispatch(setViewMode('quiz'))} style={navBtnStyle('#00c5ff')}>Quiz</button>
        <button onClick={() => dispatch(setViewMode('review'))} style={navBtnStyle('#00c5ff')}>Quiz Review</button>
        <button onClick={() => dispatch(setViewMode('result'))} style={navBtnStyle('#00d5ff')}>Submit</button>
      </div>
    </div>
  );
}

const navBtnStyle = (color) => ({
  background: color,
  color: '#000',
  border: 'none',
  padding: '10px 20px',
  fontWeight: '600',
  borderRadius: '4px',
  cursor: 'pointer'
});