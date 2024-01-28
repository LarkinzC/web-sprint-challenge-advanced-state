// ❗ You don't need to add extra action creators to achieve MVP
import { SET_QUIZ_INTO_STATE,
        RESET_FORM,
        SET_SELECTED_ANSWER,
        INPUT_CHANGE,
        SET_INFO_MESSAGE
       } from "./action-types"
import axios from 'axios'

// export const initialQuizState = {
//   quizData: null,
//   loading: false,
//   error: null
// }


export function moveClockwise() { }

export function moveCounterClockwise() { }

export function selectAnswer(isSelected) {
  return ({ type: SET_SELECTED_ANSWER, payload : isSelected })
 }

export function setMessage() { }

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
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // dispatch(resetForm())
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => { console.log(res)
      dispatch({ type: SET_QUIZ_INTO_STATE, payload: res.data })})
    .catch(err => {console.log(err)})
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
// export function postAnswer() {
//   return function (dispatch) {
//     // On successful POST:
//     // - Dispatch an action to reset the selected answer state
//     // - Dispatch an action to set the server message to state
//     // - Dispatch the fetching of the next quiz
//   }
// }
// export function postQuiz() {
//   return function (dispatch) {
//     // On successful POST:
//     // - Dispatch the correct message to the the appropriate state
//     // - Dispatch the resetting of the form
//   }
// }
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
