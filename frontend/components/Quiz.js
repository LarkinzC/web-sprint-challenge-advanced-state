import React, { useEffect }from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, setQuiz, selectAnswer, setMessage } from '../state/action-creators'










function Quiz(props) {

const { quiz, selectAnswer } = props


function test() {
  fetchQuiz()
}


  useEffect(() => {
    console.log('useEffect')
    if (quiz === null) {
      console.log('fetchQuiz')
      fetchQuiz()
    }
  }, [])

  return (
   
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{quiz?.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>  
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={test}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectAnswer: state.selectAnswer
  }
}

export default connect(mapStateToProps, {setQuiz, selectAnswer, setMessage, fetchQuiz })(Quiz)