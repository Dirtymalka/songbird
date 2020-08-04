import React from 'react';
import birdImg from '../../assets/bird.jpg';
import BIRDS_DATA from '../../constants/dataBird';
import './description-block.scss';

export default class DescriptionBlock extends React.Component {
  render() {
    const {
      clickedIndexBird,
      round,
      dataIndex,
    } = this.props;

    console.log(clickedIndexBird)

    if (clickedIndexBird !== null) {
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
                  <audio controls>
                    <source src={BIRDS_DATA[round][clickedIndexBird].audio} type="audio/mpeg" />
                  </audio>
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
