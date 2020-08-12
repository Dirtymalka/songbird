import React, { Component } from 'react';
import Header from '../header/header';
import QuestionBlock from '../question-block/question-block';
import AnswersBlock from '../answer-block/answer-block';
import DescriptionBlock from '../description-block/description-block';
import GameOver from '../game-over/game-over';
import { randomInteger } from '../../utils/utils';
import './app.scss';

export default class App extends Component {
  state = {
    round: 0,
    dataIndex: randomInteger(0, 5),
    isGuessed: false,
    clickedIndexBird: null,
    score: 0,
    nextRound: false,
    gameOver: false,
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

  updateScore = (newScore) => {
    this.setState({ score: newScore });
  }

  nextRoundHandler = () => {
    const {
      isGuessed,
      round,
    } = this.state;

    if (!isGuessed) {
      return;
    }

    if (round === 5) {
      this.setState({ gameOver: true });
      return;
    }

    this.setState({
      round: round + 1,
      dataIndex: randomInteger(0, 5),
      isGuessed: false,
      clickedIndexBird: null,
      nextRound: true,
    });
  }

  startRound = () => {
    this.setState({ nextRound: false, })
  }

  startNewGame = () => {
    this.setState({
      round: 0,
      dataIndex: randomInteger(0, 5),
      isGuessed: false,
      clickedIndexBird: null,
      score: 0,
      nextRound: false,
      gameOver: false,
    })
  }

  render() {
    const {
      round,
      dataIndex,
      isGuessed,
      clickedIndexBird,
      score,
      nextRound,
      gameOver,
    } = this.state;

    return (
      <div className="app">
        <Header
          score={score}
          round={round}
        />
        {gameOver
          ? <GameOver
            score={score}
            startNewGame={this.startNewGame}
          />
          : <React.Fragment>
            <QuestionBlock
              round={round}
              dataIndex={dataIndex}
              isGuessed={isGuessed}
              nextRound={nextRound}
            />
            <div className="row mb2">
              <AnswersBlock
                round={round}
                dataIndex={dataIndex}
                birdClickHandler={this.birdClickHandler}
                score={score}
                updateScore={this.updateScore}
                nextRound={nextRound}
                startRound={this.startRound}
              />
              <DescriptionBlock
                isGuessed={isGuessed}
                round={round}
                clickedIndexBird={clickedIndexBird}
              />
              <button
                className={isGuessed ? "btn btn-next" : "btn"}
                onClick={this.nextRoundHandler}
              >Next</button>
            </div>
          </React.Fragment>
        }
      </div>
    );
  }
};
