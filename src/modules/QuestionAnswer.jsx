import React, { useState } from 'react';

class QuestionAnswer {
  question = [
    'What is my education background?',
    'What kind of roles am I looking for?',
    'Where are I located?',
    'How many years of experience do you have?',
    'Where do you currently work?',
    'Where have you worked previously?'
  ];
  answer = [
    'B.S in Computer Science from University at Buffalo ',
    'Full-Stack Software Engineer',
    'Brooklyn',
    'I started my first job in 2019',
    'Yext',
    'Amazon, Capital One'
  ];


  addQuestion(question, answer) {
    this.questionAnswer[question] = answer;
    return questionAnswer[question];
  }

  getAnswer(question) {
    return this.questionAnswer[question];
  }
}

function RenderQA() {
  let qAndA = new QuestionAnswer();
  let QArray = []
  for (let i = 0; i < qAndA.question.length; i += 1) {
    let [answerState, displayAnswer] = useState('');
    let elem = (
      <div className="QA-container" key={i}>
        <button className="QA-question glow-on-hover" onClick={() => {
          displayAnswer((
            <p className="QA-answer">
              {qAndA.answer[i]}
            </p>
          ))
        }}>
          {qAndA.question[i]}
        </button>
        {answerState}
      </div >);
    QArray.push(elem)
  }
  return (
    <div className="QA-section">
      {QArray}
    </div>
  )
}
export { QuestionAnswer, RenderQA };