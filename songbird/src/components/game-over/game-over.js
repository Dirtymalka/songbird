import React from 'react';
import './game-over.scss';

export default class GameOver extends React.Component {

  render() {
    const {
      score,
      startNewGame,
    } = this.props;

    if (score === 30) {
      return (
        <div className="jumbotron game-over">
          <h1 className="display-3 text-center">Ура!</h1>
          <h2>Это абсолютная победа!</h2>
          <p className="lead text-center">{`Вы прошли викторину и набрали максимальные ${score} из 30 возможных баллов`}</p>
          <button
            className="btn btn-next btn-game-over"
            onClick={startNewGame}
          >Попробовать еще раз!</button>
        </div>
      )
    }

    return (
      <div className="jumbotron game-over">
        <h1 className="display-3 text-center">Поздравляем!</h1>
        <p className="lead text-center">{`Вы прошли викторину и набрали ${score} из 30 возможных баллов`}</p>
        <button
          className="btn btn-next btn-game-over"
          onClick={startNewGame}
        >Попробовать еще раз!</button>
      </div>
    )
  }
}
