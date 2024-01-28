import React from 'react'
import { connect } from 'react-redux'
import { selectedAnswer } from '../state/action-creators'


function Message(props) {
  const { selectedAnswer, correctAnswer } = props
  
  const isCorrect = selectedAnswer === correctAnswer

  return <div id="message">
    {isCorrect ? 'Correct! Well done!' : 'Incorrect. Try again.'}
          </div>

}


const mapStateToProps = (state) => ({
  selectedAnswer: state.selectedAnswer,
  correctAnswer: state.correctAnswer
})

export default connect(mapStateToProps)(Message)