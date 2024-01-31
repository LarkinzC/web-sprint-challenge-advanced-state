// ❗ You don't need to add extra action creators to achieve MVP
import { SET_QUIZ_INTO_STATE,
        RESET_FORM,
        SET_SELECTED_ANSWER,
        INPUT_CHANGE,
        SET_INFO_MESSAGE,
        MOVE_CLOCKWISE,
        MOVE_COUNTERCLOCKWISE
       } from "./action-types"
import axios from 'axios'



export function moveClockwise() {
  return ({ type:MOVE_CLOCKWISE})
 }

export function moveCounterClockwise() {
  return({ type:MOVE_COUNTERCLOCKWISE})
 }

export function selectAnswer(answer) {
  return ({ type: SET_SELECTED_ANSWER, payload : answer })
 }

export function setMessage(quizID) {
  return ({ type: SET_INFO_MESSAGE, payload: quizID})
 }

export function setQuiz(quizData) { 
  return ({type: SET_QUIZ_INTO_STATE, payload: quizData})
}

export function inputChange() { }

export function resetForm() {
  return ({ type: RESET_FORM})
 }

// ❗ Async action creators

export function fetchQuiz() {
  return function (dispatch) {
    dispatch(resetForm());

    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        dispatch({ type: SET_QUIZ_INTO_STATE, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch(setMessage(null, null, null)); // Clear messages on error
      });
  }
}


export function postAnswer(quizID, answerID) {
  // console.log('Posting answer')
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios.post('http://localhost:9000/api/quiz/answer', { quiz_id: quizID, answer_id: answerID })
      .then(res => { console.log('PostResult', res)
        dispatch(selectAnswer(null))
        dispatch(setMessage(res.data.message));
        dispatch(fetchQuiz());
      })
      .catch(err => {
        console.log('Post Error', err);
        // dispatch(setMessage(null, null, null)); // Clear messages on error
      });
  }
}
// export function postQuiz() {
//   return function (dispatch) {
//     // On successful POST:
//     // - Dispatch the correct message to the the appropriate state
//     // - Dispatch the resetting of the form
//   }
// }
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
