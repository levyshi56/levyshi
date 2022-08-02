import React, { useState, useRef, useEffect } from 'react';
import '../css/Accordion.scss';

class QuestionAnswer {
  question = [
    'Education and Background',
    'What kind of roles am I looking for?',
    'Contact Info',
    'Lorem Ipsum?',
    'Lorem Ipsum?'
  ];
  answer = [
    'Originally from Brooklyn, NY. Currently a software engineer at Yext, previously at Capital One and Amazon. I studied Computer Science at SUNY Buffalo',
    'Full-Stack Software Engineer',
    'levyshi56@gmail.com',
    'lorem lorem',
    'lorem lorem'
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
        <h3 className="QA-question">
          {qAndA.question[i]}
        </h3>
        <div className="QA-answer">
          {qAndA.answer[i]}
        </div>
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