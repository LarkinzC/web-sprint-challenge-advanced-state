import React from 'react'
import { connect } from 'react-redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from '../state/action-types'
import {useState} from 'react'

 function Wheel(props) {
  const [activeCog, setActiveCog] = useState(0);

  const handleClockwiseClick = () => {
    props.dispatch({ type: MOVE_CLOCKWISE });
    setActiveCog((prevCog) => (prevCog + 1) % 6); 
  };

  const handleCounterClockwiseClick = () => {
    props.dispatch({ type: MOVE_COUNTERCLOCKWISE });
    setActiveCog((prevCog) => (prevCog - 1 + 6) % 6);
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`cog ${activeCog === i ? 'active' : ''}`}
            style={{ '--i': i }}
          >
            {activeCog === i ? 'B' : ''}
          </div>
        ))}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterClockwiseClick}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={handleClockwiseClick}>
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

export default connect(mapStatetoProps)(Wheel)