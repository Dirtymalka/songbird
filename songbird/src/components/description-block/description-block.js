import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import birdImg from '../../assets/bird.jpg';
import BIRDS_DATA from '../../constants/dataBird';
import './description-block.scss';

export default class DescriptionBlock extends React.Component {

  player = React.createRef();

  componentDidUpdate() {
    const {
      isGuessed,
      isPlayingAudio,
      stopPlayAudio,
      isQuestionPlayingAudio,
      isDescriptionPlayingAudio,
    } = this.props;

    if(isGuessed && isDescriptionPlayingAudio) {
      stopPlayAudio('isDescriptionPlayingAudio');
      this.player.current.audio.current.pause();
    }

    if (this.player.current && !isDescriptionPlayingAudio) {
      this.player.current.audio.current.pause();
    }
  }

  render() {
    const {
      clickedIndexBird,
      round,
      startPlayAudio,
      stopPlayAudio,
    } = this.props;

    if (clickedIndexBird !== null) {
      const audioSrc = BIRDS_DATA[round][clickedIndexBird].audio;
      return (
        <div className="col-md-6">
          <div className="bird-card">
            <div className="card-body">
              <img className="bird-img" src={BIRDS_DATA[round][clickedIndexBird].image} />
              <ul className="list-group">
                <li className="list-group-item">
                  <h4 className="bird-name">{BIRDS_DATA[round][clickedIndexBird].name}</h4>
                </li>
                <li className="list-group-item">
                  <span>{BIRDS_DATA[round][clickedIndexBird].species}</span>
                </li>
                <li className="list-group-item">
                  <AudioPlayer
                    src={audioSrc}
                    controls
                    autoPlay={false}
                    autoPlayAfterSrcChange={false}
                    customAdditionalControls={[]}
                    onPlay={() => startPlayAudio('isDescriptionPlayingAudio')}
                    onPause={() => stopPlayAudio('isDescriptionPlayingAudio')}
                    ref={this.player}
                  />
                </li>
              </ul>
            </div>
            <span className="bird-description">{BIRDS_DATA[round][clickedIndexBird].description}</span>
          </div>
        </div>
      );
    }
    return (
      <div className="col-md-6">
        <div className="bird-card">
          <p className="instruction">
            <span>Послушайте плеер.</span>
            <span>Выберите птицу из списка</span>
          </p>
        </div>
      </div>
    );
  }
};
