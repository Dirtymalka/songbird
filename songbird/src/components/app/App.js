import React, { Component } from 'react';
import Header from '../header/header';
import QuestionBlock from '../question-block/question-block';
import AnswersBlock from '../answer-block/answer-block';
import DescriptionBlock from '../description-block/description-block';
import { randomInteger } from '../../utils/utils';
import './app.scss';

export default class App extends Component {
  state = {
    round: 0,
    dataIndex: randomInteger(0, 5),
    isGuessed: false,
    clickedIndexBird: null,
  }

  birdClickHandler = (id) => {
    const {
      dataIndex,
    } = this.state;

    if (id - 1 === dataIndex) {
      this.setState({ isGuessed: true });
    }
    this.setState({ clickedIndexBird: id - 1 })
  }

  render() {
    const {
      round,
      dataIndex,
      isGuessed,
      clickedIndexBird,
    } = this.state;

    return (
      <div className="app">
        <Header />
        <QuestionBlock
          round={round}
          dataIndex={dataIndex}
          isGuessed={isGuessed}
        />
        <div className="row mb2">
          <AnswersBlock
            round={round}
            dataIndex={dataIndex}
            birdClickHandler={this.birdClickHandler}
          />
          <DescriptionBlock
            isGuessed={isGuessed}
            round={round}
            clickedIndexBird={clickedIndexBird}
          />
          <button className="btn">Next</button>
        </div>
      </div>
    );
  }
};
