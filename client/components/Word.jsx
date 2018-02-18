import React from 'react'

class Word extends React.Component {
  constructor (props) {
    super(props)
    this.deleteWord = this.deleteWord.bind(this)
  }
 
  deleteWord(evt) {
    console.log(evt.target.value)
  }
  render () {
    return (
      <div>
      <p>{this.props.word}</p>
      <button value={this.props.word} 
        onClick={this.deleteWord}>
        X
      </button>
    </div>
    )
  }
}

export default Word
