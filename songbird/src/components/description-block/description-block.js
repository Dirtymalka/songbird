import React from 'react';
import birdImg from '../../assets/bird.jpg';
import './description-block.scss';

export default class DescriptionBlock extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="bird-card">
          <div className="card-body">
            <img className="bird-img" src={birdImg} />
            <ul className="list-group">
              <li className="list-group-item">
                <h4 className="bird-name">Bird name</h4>
              </li>
              <li className="list-group-item">
                <span>SDFSDW</span>
              </li>
              <li className="list-group-item">
                <div className="audio-player"></div>
              </li>
            </ul>
          </div>
          <span className="bird-description">Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.</span>
        </div>
      </div>
    );
  };
};
