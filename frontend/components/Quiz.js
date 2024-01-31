import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, setQuiz, selectAnswer, setMessage, resetForm, postAnswer } from '../state/action-creators';

function Quiz(props) {
  const { quiz, fetchQuiz, selectedAnswer, selectAnswer } = props

  useEffect(() => {
    if (!quiz) {
      fetchQuiz();
    }
  }, [quiz, fetchQuiz]);
  

  console.log('selected answer',selectedAnswer)

  return (
    <div id="wrapper">
      {quiz ? (
        <>
          <h2>{quiz?.question}</h2>
          <div id="quizAnswers">
            <div className={`answer ${selectedAnswer === 0 ? 'selected' : ''}`} >
              {quiz.answers[0].text}
              <button onClick={() => selectAnswer(0)}>
              {selectedAnswer === 0 ? 'SELECTED' : 'Select'}
              </button>
            </div>
            <div className={`answer ${selectedAnswer === 1 ? 'selected' : ''}`} >
            {quiz.answers[1].text}
              <button onClick={() => selectAnswer(1)}>
              {selectedAnswer === 1 ? 'SELECTED' : 'Select'}
              </button>
            </div>
          </div>
          <button id="submitAnswerBtn" onClick={() => props.postAnswer(quiz.quiz_id, quiz.answers[selectedAnswer].answer_id)} disabled={selectedAnswer === null}>
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

export default connect(mapStateToProps, { setQuiz, selectAnswer, setMessage, fetchQuiz, resetForm, postAnswer })(Quiz);