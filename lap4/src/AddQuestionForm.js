// AddQuestionForm.js
import React, { useState, useContext } from 'react';
import { QuizContext } from './QuizContext';

const AddQuestionForm = () => {
  const { addQuestion } = useContext(QuizContext);
  const [questionText, setQuestionText] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!questionText || !option1 || !option2 || !option3 || !correctAnswer) {
      alert("Please fill in all fields.");
      return;
    }

    const newQuestion = {
      question: questionText,
      answers: [option1, option2, option3],
      correctAnswer: correctAnswer
    };

    addQuestion(newQuestion);

    // Reset inputs
    setQuestionText('');
    setOption1('');
    setOption2('');
    setOption3('');
    setCorrectAnswer('');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
      <h3>Add a Custom Question</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question Text: </label>
          <input type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
        </div>
        <div>
          <label>Option 1: </label>
          <input type="text" value={option1} onChange={(e) => setOption1(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
        </div>
        <div>
          <label>Option 2: </label>
          <input type="text" value={option2} onChange={(e) => setOption2(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
        </div>
        <div>
          <label>Option 3: </label>
          <input type="text" value={option3} onChange={(e) => setOption3(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
        </div>
        <div>
          <label>Correct Answer: </label>
          <input type="text" value={correctAnswer} placeholder="Must match one of the options exactly" onChange={(e) => setCorrectAnswer(e.target.value)} style={{ width: '100%', marginBottom: '15px' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer' }}>Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestionForm;