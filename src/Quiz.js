import React, { Component } from 'react';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }

  render() {
    const quizData = {
      quiz_questions: [
        {
          instruction_text: "What's your favorite color?",
          answer_options: [
            { option_text: "Red" },
            { option_text: "Green" },
            { option_text: "Blue" },
            { option_text: "Yellow" }
          ]
        }
      ]
    };

    const question = quizData.quiz_questions[this.state.quiz_position - 1];

    return (
      <div>
        <div className="QuizQuestion">
          {question.instruction_text}
        </div>
      </div>
    );
  }
}

export default Quiz;


