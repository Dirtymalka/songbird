import React from 'react';
import './question-block.scss';
import bird from '../../assets/bird.jpg';
import BIRDS_DATA from '../../constants/dataBird';

export default class QuestionBlock extends React.Component {

  audioSrc = BIRDS_DATA[this.props.round][this.props.dataIndex].audio;
  audioElement = <audio controls>
    <source src={this.audioSrc} type="audio/mpeg" />
  </audio>;

  componentDidUpdate() {
    const audioSrc = BIRDS_DATA[this.props.round][this.props.dataIndex].audio;
    const audioElement = <audio controls>
      <source src={audioSrc} type="audio/mpeg" />
    </audio>;
    if (this.props.nextRound) {
      this.audioElement = <audio controls>
        <source src={this.audioSrc} type="audio/mpeg" />
      </audio>;
    }
  }

  render() {
    const {
      round,
      dataIndex,
      isGuessed,
    } = this.props;

    console.log(this.props)

    const audioSrc = BIRDS_DATA[round][dataIndex].audio;
    // const audioElement = <audio controls>
    //   <source src={audioSrc} type="audio/mpeg" />
    // </audio>;

    return (
      <div className="question-block">
        <img src={isGuessed ? BIRDS_DATA[round][dataIndex].image : bird} />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>{isGuessed ? BIRDS_DATA[round][dataIndex].name : '******'}</h3>
            </li>
            <li className="list-group-item">
              {/* <div className="audio-player"></div> */}
              {/* <audio src={BIRDS_DATA[0].audio}></audio> */}
              {this.audioElement}
            </li>
          </ul>
        </div>
      </div>
    );
  };
};
