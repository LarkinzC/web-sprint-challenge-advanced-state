// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE,
        MOVE_COUNTERCLOCKWISE,
        SET_QUIZ_INTO_STATE,
        SET_SELECTED_ANSWER,
        SET_INFO_MESSAGE} from './action-types'
// import { initialQuizState } from './action-creators'



const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      return state + 1
    case MOVE_COUNTERCLOCKWISE:
      return state - 1
      default:
        return state
      }
}

export const initialState = null
function quiz(state = initialState, action) {
   switch(action.type) {
     case SET_QUIZ_INTO_STATE:
       return state = action.payload 
      default: 
      return state
   }
}

const initialSelectedAnswerState = false
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case SET_SELECTED_ANSWER: 
      return {
        ...state, selectedAnswer: action.payload
      }
    default: 
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case SET_INFO_MESSAGE:
      return state = action.payload
      default: 
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
