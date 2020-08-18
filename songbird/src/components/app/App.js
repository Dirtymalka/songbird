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
    isSuccess: false,
    clickedIndexBird: null,
    score: 0,
    nextRound: false,
    gameOver: false,
    isQuestionPlayingAudio: false,
    isDescriptionPlayingAudio: false,
  }

  birdClickHandler = (id) => {
    const {
      dataIndex,
    } = this.state;

    if (id - 1 === dataIndex) {
      this.setState({
        isGuessed: true,
        isSuccess: true,
       });
      setTimeout(() => this.setState({isGuessed: false}), 0);
    }
    this.setState({ clickedIndexBird: id - 1 })
  }

  updateScore = (newScore) => {
    this.setState({ score: newScore });
  }

  nextRoundHandler = () => {
    const {
      isGuessed,
      isSuccess,
      round,
    } = this.state;

    if (!isSuccess) {
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
      isSuccess: false,
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
      isSuccess: false,
      clickedIndexBird: null,
      score: 0,
      nextRound: false,
      gameOver: false,
    })
  }

  stopPlayAudio = (property) => {
    if (this.state[property] === true) {
      this.setState({ [property]: false });
    }
  }

  startPlayAudio = (property) => {
    if (property === 'isQuestionPlayingAudio' && this.state.isDescriptionPlayingAudio === true) {
      this.setState({ isDescriptionPlayingAudio: false, [property]: true });
    }
    if (property === 'isDescriptionPlayingAudio' && this.state.isQuestionPlayingAudio === true) {
      this.setState({ isQuestionPlayingAudio: false, [property]: true });
    }

    this.setState({ [property]: true });
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
      isPlayingAudio,
      isDescriptionPlayingAudio,
      isQuestionPlayingAudio,
      isSuccess,
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
              stopPlayAudio={this.stopPlayAudio}
              startPlayAudio={this.startPlayAudio}
              isDescriptionPlayingAudio={isDescriptionPlayingAudio}
              isQuestionPlayingAudio={isQuestionPlayingAudio}
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
                stopPlayAudio={this.stopPlayAudio}
              />
              <DescriptionBlock
                isGuessed={isGuessed}
                round={round}
                clickedIndexBird={clickedIndexBird}
                stopPlayAudio={this.stopPlayAudio}
                startPlayAudio={this.startPlayAudio}
                isPlayingAudio={isPlayingAudio}
                isQuestionPlayingAudio={isQuestionPlayingAudio}
                isDescriptionPlayingAudio={isDescriptionPlayingAudio}
              />
              <button
                className={isSuccess ? "btn btn-next" : "btn"}
                onClick={this.nextRoundHandler}
              >Next</button>
            </div>
          </React.Fragment>
        }
      </div>
    );
  }
};
