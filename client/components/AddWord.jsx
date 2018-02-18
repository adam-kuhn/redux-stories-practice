import React from 'react'
import {connect} from 'react-redux'
import {addWord} from '../actions'

function submitWord (e, dispatch) {
  console.log(e.keyCode)
  // keyCode is the value of the keyboard
  // pressing enter is 13
  if (e.keyCode === 13) {
    dispatch(addWord(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const AddWord = (props) => (
  <input
    placeholder='Enter a word or phrase'
    // whenever a key is realesed (hence key up) do this action
    // submitWord then checks the keyCode of the keystroke, if is enter, then we dispatch our action as above
    onKeyUp={e => {
      // the connect() call below puts
      // dispatch directly on props
      submitWord(e, props.dispatch)
    }}
  />
)

export default connect()(AddWord)
