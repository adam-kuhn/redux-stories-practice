import React from 'react'
import {connect} from 'react-redux'
import Word from './Word'

class WordFilter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filtered: []
    }
    this.filterWords = this.filterWords.bind(this)
  }
  // look the current list of words and see if which ones include the value typed into the filter input
  filterWords(evt) {
    const filtering = this.props.words.filter(input => {
      return input.word.includes(evt.target.value)
    })
    // set state to filtered words
    this.setState({
      filtered: filtering
    })
  }
  render() {
    return (
      <div>
        {/* pass filtered array as props to Word component */}
      <input onChange={this.filterWords} placeholder='filter words' />
      {this.state.filtered.map(words => {
        return (<Word key={`filtered${words.id}`} word={words.word} />)
      })}
      </div>
    )
  }
}

// map state to props so we can access original word list
function mapStateToProps (state) {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(WordFilter)