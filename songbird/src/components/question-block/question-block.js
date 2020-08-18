import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './question-block.scss';
import bird from '../../assets/bird.jpg';
import BIRDS_DATA from '../../constants/dataBird';

export default class QuestionBlock extends React.Component {

  player = React.createRef();

  componentDidUpdate() {
    const {
      isGuessed,
      isPlayingAudio,
      stopPlayAudio,
      isDescriptionPlayingAudio,
      isQuestionPlayingAudio,
    } = this.props;

    if(isGuessed && isQuestionPlayingAudio) {
      stopPlayAudio('isQuestionPlayingAudio');
      this.player.current.audio.current.pause();
    }

    if (!isQuestionPlayingAudio) {
      this.player.current.audio.current.pause();
    }
  }


  render() {
    const {
      round,
      dataIndex,
      isGuessed,
      startPlayAudio,
      stopPlayAudio,
    } = this.props;

    const audioSrc = BIRDS_DATA[round][dataIndex].audio;

    return (
      <div className="question-block">
        <img src={isGuessed ? BIRDS_DATA[round][dataIndex].image : bird} />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>{isGuessed ? BIRDS_DATA[round][dataIndex].name : '******'}</h3>
            </li>
            <li className="list-group-item">
              <AudioPlayer
                src={audioSrc}
                controls
                customAdditionalControls={[]}
                ref={this.player}
                onPlay={() => startPlayAudio('isQuestionPlayingAudio')}
                onPause={() => stopPlayAudio('isQuestionPlayingAudio')}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  };
};
