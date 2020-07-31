import React, { Component } from 'react';
import Header from '../header/header';
import QuestionBlock from '../question-block/question-block';
import AnswersBlock from '../answer-block/answer-block';
import DescriptionBlock from '../description-block/description-block';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <QuestionBlock />
        <div className="row mb2">
          <AnswersBlock />
          <DescriptionBlock />
          <button className="btn">Next</button>
        </div>
      </div>
    );
  }
};
