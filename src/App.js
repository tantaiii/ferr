// App.js
import React from 'react';
import { QuizProvider } from './QuizContext';
import Quiz from './Quiz';
import AddQuestionForm from './AddQuestionForm';

function App() {
  return (
    <QuizProvider>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        {/* Input Interface to dynamically add quiz options */}
        <AddQuestionForm />
        <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #ccc' }} />
        {/* Core Presentation interface matching screenshot layouts */}
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;