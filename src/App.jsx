import React, { useState, useEffect } from 'react';
import './css/QA.scss';
import './css/App.scss';
import './css/GlowButton.css';
import './css/styles.scss';

import { QuestionAnswer, RenderQA } from './modules/QuestionAnswer'

function App() {
  let LearnMoreButton = (
    <button className="LearnMoreButton glow-on-hover"
      onClick={() => {
        setQAState(<RenderQA />);
        setLearnMoreState('');
      }}>
      Learn more about me
    </button >
  );
  let [QAState, setQAState] = useState('');
  let [learnMoreState, setLearnMoreState] = useState(LearnMoreButton);
  return (
    <main>
      <div className="Intro-container">
        <h1 className="Intro-text">
          Hello, My name is Levy Shi,
        </h1>
      </div>
      <div className="Jobtitle-container typewriter">
        <h2>
          Software Engineer
        </h2>
      </div>
      {learnMoreState}
      {QAState}
    </main>
  );
}

export default App;