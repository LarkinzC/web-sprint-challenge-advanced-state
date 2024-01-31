import React from 'react'
import { connect } from 'react-redux'
import { inputChange} from '../state/action-creators'

export function Form(props) {

const { newQuestion, newTrueAnswer, newFalseAnswer} = props.form
  
  const onChange = evt => {
    const { value, id } = evt.target
    props.inputChange(value.trim(), id)
    console.log(newQuestion, newFalseAnswer, newTrueAnswer)
  }

  

  const onSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} value={newQuestion} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} value={newTrueAnswer} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} value={newFalseAnswer} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" type='submit' disabled={!(newQuestion && newFalseAnswer && newTrueAnswer)}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state) => ({
  form: state.form
})


export default connect( mapStateToProps, { inputChange })(Form)
