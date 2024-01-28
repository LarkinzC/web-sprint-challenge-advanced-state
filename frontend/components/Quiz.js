import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, setQuiz, selectAnswer, setMessage } from '../state/action-creators';

function Quiz(props) {
  const { quiz, fetchQuiz, selectAnswer } = props;
  const [ submitDisabled, setSubmitDisabled] = useState(true)
  const [ answerIndex, setAnswerIndex ] = useState(null)

  useEffect(() => {
    if (!quiz) {
      fetchQuiz();
    }
  }, [quiz, fetchQuiz]);
  
  useEffect(() => {
    console.log('answerIdx', answerIndex)
    setSubmitDisabled(answerIndex === null)
    console.log('sbmdisabled', submitDisabled)
  }, [answerIndex])

  const handleAnswerSelection = (answerIndex) => {
    setAnswerIndex(answerIndex)
    selectAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    fetchQuiz()
  }

  return (
    <div id="wrapper">
      {quiz ? (
        <>
          <h2>{quiz?.question}</h2>
          <div id="quizAnswers">
            <div className={`answer ${answerIndex === 0 ? 'selected' : ''}`} onClick={() => handleAnswerSelection(0)}>
              {quiz.answers[0].text}
              <button>
              {answerIndex === 0 ? 'SELECTED' : 'Select'}
              </button>
            </div>
            <div className={`answer ${answerIndex === 1 ? 'selected' : ''}`} onClick={() => handleAnswerSelection(1)}>
            {quiz.answers[1].text}
              <button>
              {answerIndex === 1 ? 'SELECTED' : 'Select'}
              </button>
            </div>
          </div>
          <button id="submitAnswerBtn" onClick={handleSubmitAnswer} disabled={submitDisabled}>
            Submit answer
          </button>
        </>
      ) : 'Loading next quiz...'}
    </div>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz,
  selectedAnswer: state.selectedAnswer 
});

export default connect(mapStateToProps, { setQuiz, selectAnswer, setMessage, fetchQuiz })(Quiz);