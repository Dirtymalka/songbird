import React from 'react';
import './question-block.scss';
import bird from '../../assets/bird.jpg';
import BIRDS_DATA from '../../constants/dataBird';

export default class QuestionBlock extends React.Component {

  render() {
    const {
      round,
      dataIndex,
      isGuessed,
    } = this.props;

    console.log(this.props)

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
              <audio controls>
                <source src={BIRDS_DATA[round][dataIndex].audio} type="audio/mpeg" />
              </audio>
            </li>
          </ul>
        </div>
      </div>
    );
  };
};
