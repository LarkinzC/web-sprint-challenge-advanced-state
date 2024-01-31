import React from 'react';
import { connect } from 'react-redux';

function Message(props) {
  const { infoMessage } = props;


  return (
    <div id="message">
      {infoMessage === 'Nice job! That was the correct answer' ? 'Nice job! That was the correct answer' : 'What a shame! That was the incorrect answer'}
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedAnswer: state.selectedAnswer,
  quiz: state.quiz,
  infoMessage: state.infoMessage
});

export default connect(mapStateToProps)(Message);