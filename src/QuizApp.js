import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter"
        }
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false
    };
  }

  handleAnswerSubmit = (selectedOption) => {
    const { questions, currentQuestion, score } = this.state;
    const correctAnswer = questions[currentQuestion].answer;

    let newScore = score;
    if (selectedOption === correctAnswer) {
      newScore = score + 1;
    }

    if (currentQuestion + 1 < questions.length) {
      this.setState({
        score: newScore,
        currentQuestion: currentQuestion + 1
      });
    } else {
      this.setState({
        score: newScore,
        quizEnd: true
      });
    }
  };

  handleRestartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false
    });
  };

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    return (
      <div className="container mt-5" style={{ maxWidth: '600px' }}>
        <div className="card shadow p-4 bg-white border-0">
          {!quizEnd ? (
            <div>
              <h2 className="text-secondary mb-3 fs-4">Question {currentQuestion + 1}</h2>
              <Question 
                questionData={questions[currentQuestion]} 
                onAnswerSelect={this.handleAnswerSubmit} 
              />
            </div>
          ) : (
            <Score 
              score={score} 
              totalQuestions={questions.length} 
              onRestart={this.handleRestartQuiz} 
            />
          )}
        </div>
      </div>
    );
  }
}

export default QuizApp;