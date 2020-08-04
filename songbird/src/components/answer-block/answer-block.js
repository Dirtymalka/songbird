import React from 'react';
import './answer-block.scss';
import BIRDS_DATA from '../../constants/dataBird';

export default class AnswerBlock extends React.Component {

  state = {
    unCorrectId: [],
    correctId: null,
  };

  birdClick = (id) => {
    const {
      dataIndex,
      birdClickHandler,
    } = this.props;
    const {
      unCorrectId,
    } = this.state;
    console.log(id, dataIndex)

    birdClickHandler(id);

    if (id - 1 === dataIndex) {
      this.setState({ correctId: id });
      return;
    }

    const newUnCorrectID = [ ...unCorrectId ];
    if (!newUnCorrectID.includes(id)) {
      newUnCorrectID.push(id);
    }
    this.setState({ unCorrectId: newUnCorrectID });
  };


  render() {
    const {
      round,
    } = this.props;

    const {
      unCorrectId,
      correctId,
    } = this.state;

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
