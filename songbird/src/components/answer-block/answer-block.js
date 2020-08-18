import React from 'react';
import './answer-block.scss';
import BIRDS_DATA from '../../constants/dataBird';
import { calculateScore } from '../../utils/utils';
import win from '../../assets/win.mp3';
import error from '../../assets/error.mp3';

export default class AnswerBlock extends React.Component {

  state = {
    unCorrectId: [],
    correctId: null,
    isPlayingAudio: false,
  };

  counter = this.props.score;

  audio;
  audioPlay;

  componentDidUpdate() {
    if (this.props.nextRound) {
      this.setState({
        unCorrectId: [],
        correctId: null,
        isPlayingAudio: false,
      });
      this.props.startRound();
    }
  }

  birdClick = (id) => {
    const {
      dataIndex,
      birdClickHandler,
      updateScore,
      stopPlayAudio,
    } = this.props;

    const {
      unCorrectId,
      correctId,
    } = this.state;

    birdClickHandler(id);

    if (correctId) {
      stopPlayAudio('isDescriptionPlayingAudio');
      return;
    }

    if (id - 1 === dataIndex) {
      this.handlePlayAudio(win);
      this.setState({ correctId: id });
      this.counter = calculateScore(this.counter, true);
      updateScore(this.counter);
      stopPlayAudio('isDescriptionPlayingAudio');
      return;
    }

    const newUnCorrectID = [...unCorrectId];
    if (!newUnCorrectID.includes(id)) {
      this.handlePlayAudio(error);
      newUnCorrectID.push(id);
      this.setState({ unCorrectId: newUnCorrectID });
      this.counter = calculateScore(this.counter, false);
    }
    stopPlayAudio('isDescriptionPlayingAudio');

  };

  handlePlayAudio = (url) => {
    if (this.audioPlay) {
      this.audioPlay.then(() => {
        this.audio.pause();
        this.audio = new Audio(url);
        this.audioPlay = this.audio.play();
        this.audio.onplaying = () => {
          this.setState({ isPlayingAudio: true });
        };
        this.audio.onended = () => {
          this.setState({ isPlayingAudio: false });
        };
        this.audio.onpause = () => {
          this.setState({ isPlayingAudio: false });
        };
      });
    } else {
      this.audio = new Audio(url);
      this.audioPlay = this.audio.play();
      this.audio.onplaying = () => {
        this.setState({ isPlayingAudio: true });
      };
      this.audio.onended = () => {
        this.setState({ isPlayingAudio: false });
      };
      this.audio.onpause = () => {
        this.setState({ isPlayingAudio: false });
      };
    }
  }


  render() {
    const {
      round,
      dataIndex,
    } = this.props;

    const {
      unCorrectId,
      correctId,
    } = this.state;

    console.log(BIRDS_DATA[round][dataIndex].name)

    return (
      <div className="col-md-6 answer-block">
        <ul className="item-list list-group">
          {BIRDS_DATA[round].map((bird) => {
            const className = unCorrectId.includes(bird.id)
              ? "list-group-item error"
              : correctId === bird.id
                ? "list-group-item success"
                : "list-group-item";
            return (
              <li
                className={className}
                key={bird.id}
                onClick={() => this.birdClick(bird.id)}
              >
                <span className="li-btn"></span>
                {bird.name}
              </li>
            )
          })}
        </ul>
      </div>
    );
  };
};
