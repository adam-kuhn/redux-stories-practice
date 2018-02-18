import React from 'react'
import {connect} from 'react-redux'

import {addImg} from '../actions'

function submitImage (e, dispatch) {
  if (e.keyCode === 13) {
    console.log(e.currentTarget.value)
    dispatch(addImg(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const AddImage = (props) => {
  return (
    <input placeholder='image url'
    onKeyUp={e => {
      submitImage(e, props.dispatch)
    }} />
  )
}

export default connect()(AddImage)