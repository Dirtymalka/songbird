import React from 'react';
import QuestionsList from '../questions-list/questions-list';
import './header.scss';

export default class Header extends React.Component {
  render() {

    const {
      score,
      round,
    } = this.props;

    const roundNames = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']

    return (
      <div className="header d-flex">
        <div className="logo-score d-flex">
          <div className="logo"></div>
          <h4>
            Score:
            <span className="score">{score}</span>
          </h4>
        </div>
        <ul className="question-list pagination">

          {roundNames.map((roundName, index) => {
            const className = round === index ? 'question-list-item page-item active' : 'question-list-item page-item';
            return (
              <li className={className} key={index}>
                <span>{roundName}</span>
              </li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}
