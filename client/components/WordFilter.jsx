import React from 'react'
import {connect} from 'react-redux'

import {filterWords} from '../actions'

function submitFilter (e, dispatch) {
  dispatch(filterWords(e.currentTarget.value))
}

const WordFilter = (props) => {
  return (
    <input onChange={e => {
      submitFilter(e, props.dispatch)
    }} placeholder='filter words' />
  )
}

export default connect()(WordFilter)