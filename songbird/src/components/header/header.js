import React from 'react';
import QuestionsList from '../questions-list/questions-list';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header d-flex">
        <div className="logo-score d-flex">
          <div className="logo"></div>
          <h4>
            Score:
            <span className="score">0</span>
          </h4>
        </div>
        <ul className="question-list pagination">
          <li className="question-list-item page-item">
            <span>Разминка</span>
          </li>
          <li className="question-list-item page-item">
            <span>Воробьиные</span>
          </li>
          <li className="question-list-item page-item">
            <span>Лесные птицы</span>
          </li>
          <li className="question-list-item page-item">
            <span>Певчие птицы</span>
          </li>
          <li className="question-list-item page-item">
            <span>Хищные птицы</span>
          </li>
          <li className="question-list-item page-item">
            <span>Морские птицы</span>
          </li>
        </ul>
      </div>
    )
  }
}
