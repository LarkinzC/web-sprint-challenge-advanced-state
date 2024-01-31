import React from 'react'
import { connect } from 'react-redux'
import {useState} from 'react'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

 function Wheel(props) {
  // const handleClockwiseClick = () => {
  //   props.dispatch({ type: MOVE_CLOCKWISE });
  //   setActiveCog((prevCog) => (prevCog + 1) % 6); 
  // };

  // const handleCounterClockwiseClick = () => {
  //   props.dispatch({ type: MOVE_COUNTERCLOCKWISE });
  //   setActiveCog((prevCog) => (prevCog - 1 + 6) % 6);
  // };
const {moveClockwise, moveCounterClockwise, wheel} = props
  return (
    <div id="wrapper">
      <div id="wheel">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`cog ${wheel === i ? 'active' : ''}`}
            style={{ '--i': i }}
          >
            {wheel === i ? 'B' : ''}
          </div>
        ))}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={moveClockwise}>
          Clockwise
        </button>
      </div>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
      wheel: state.wheel
  }
}

export default connect(mapStatetoProps, {moveClockwise, moveCounterClockwise})(Wheel)