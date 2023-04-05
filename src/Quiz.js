import React, { Component } from 'react';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }

  render() {
    return (
      <div><div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div></div>
    )

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


