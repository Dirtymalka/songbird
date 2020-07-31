import React from 'react';
import './question-block.scss';
import bird from '../../assets/bird.jpg';

export default class QuestionBlock extends React.Component {
  render() {
    return (
      <div className="question-block">
        <img src={bird} />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>******</h3>
            </li>
            <li className="list-group-item">
              <div className="audio-player"></div>
            </li>
          </ul>
        </div>
      </div>
    );
  };
};
