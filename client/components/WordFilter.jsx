import React from 'react'
import {connect} from 'react-redux'
import Word from './Word'

import {filterWords} from '../actions'

class WordFilter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filtered: []
    }
    this.filterWords = this.filterWords.bind(this)
  }
  filterWords(evt) {
    const filtering = this.props.words.filter(input => {
      return input.word.includes(evt.target.value)
    })
    this.setState({
      filtered: filtering
    })
  }
  render() {
    return (
      <div>
      <input onChange={this.filterWords} placeholder='filter words' />
      {this.state.filtered.map(words => {
        return (<Word key={`filtered${words.id}`} word={words.word} />)
      })}
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(WordFilter)