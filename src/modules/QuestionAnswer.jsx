import React, { useState, useRef, useEffect } from 'react';
import '../css/Accordion.scss';

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
  var animateButton = function(e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function() {
      e.target.classList.remove('animate');
    }, 700);
  };

  let buttonRefList = []
  for (let i = 0; i < qAndA.question.length; i += 1) {
    let [answerState, displayAnswer] = useState('');
    let buttonRef = useRef(null);
    let elem = (
      <div className="QA-container" key={i}>
        <button ref={buttonRef} className="QA-question" onClick={() => {
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
    buttonRefList.push(buttonRef);
    QArray.push(elem)
  }

  useEffect(() => {
    if (buttonRefList) {
      for (var i = 0; i < buttonRefList.length; i++) {
        let button = buttonRefList[i].current
        if (button) {
          button.addEventListener('click', animateButton, false);
        }
      }
    }
  }, [])

  return (
    <div className="QA-section accordion">
      {QArray}
    </div>
  )
}
export { QuestionAnswer, RenderQA };