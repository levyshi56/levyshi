import React, { useState, useEffect } from 'react';
import './css/QA.css';
import './css/App.css';
import './css/GlowButton.css';
import { QuestionAnswer, RenderQA } from './modules/QuestionAnswer'

function App() {
  let LearnMoreButton = (<button className="LearnMoreButton glow-on-hover"
    onClick={() => {
      setQAState(<RenderQA />);
      setLearnMoreState('');
    }}>
    Learn more about me
  </button >);
  let [QAState, setQAState] = useState('');
  let [learnMoreState, setLearnMoreState] = useState(LearnMoreButton);
  return (
    <main>
      <div className="Content">
        <h1 className="Intro">
          Hello, My name is Levy,
        </h1>
        <h2 className="JobTitle">
          Software Engineer
        </h2>
        {learnMoreState}
        {QAState}
      </div>
    </main>
  );
}

export default App;