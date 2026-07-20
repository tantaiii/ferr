import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      questionText: "Inside which HTML element do we put the JavaScript?",
      options: ["javascript", "scripting", "script", "js"],
      correctAnswer: "script",
      userAnswer: null
    },
    {
      id: 2,
      questionText: "What are variables used for in JavaScript Programs?",
      options: [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of these"
      ],
      correctAnswer: "Storing numbers, dates, or other values",
      userAnswer: null
    },
    {
      id: 3,
      questionText: "Which of the following can't be done with client-side JavaScript?",
      options: [
        "Validating a form",
        "Sending a form's contents by email",
        "Storing cookies on the user's browser",
        "Reading and writing files on the server"
      ],
      correctAnswer: "Reading and writing files on the server",
      userAnswer: null
    }
  ],
  currentQuestionIndex: 0,
  viewMode: 'quiz' // 'quiz' | 'review' | 'result'
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.userAnswer = answer;
      }
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    goToFirstQuestion: (state) => {
      state.currentQuestionIndex = 0;
    },
    goToLastQuestion: (state) => {
      state.currentQuestionIndex = state.questions.length - 1;
    },
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    }
  }
});

export const { 
  selectAnswer, 
  nextQuestion, 
  prevQuestion, 
  goToFirstQuestion, 
  goToLastQuestion,
  setViewMode 
} = quizSlice.actions;

export default quizSlice.reducer;