import React from 'react'
import {connect} from 'react-redux'

import {delWord} from '../actions'

class Word extends React.Component {
  constructor (props) {
    super(props)
    this.deleteWord = this.deleteWord.bind(this)
  }
 
  deleteWord(evt) {
    const wordId = Number(evt.target.getAttribute('data-id'))
    this.props.dispatch(delWord(wordId))
  }
  render () {
    return (
      <div>
      <p>{this.props.word}</p>
      <button data-id={this.props.id} value={this.props.word} 
        onClick={this.deleteWord}>
        X
      </button>
    </div>
    )
  }
}

export default connect()(Word)
