import {ADD_WORD} from '../actions'
import {DEL_WORD} from '../actions'
import {FILT_WORD} from '../actions'

const filterWords = (state = [], action) => {
  switch (action.type) {
    case FILT_WORD: {
      return state.filter(words => {
        return words.word.includes(action.letters)
      })
    }
    case ADD_WORD:
    return [
      ...state,
      {
        id: action.id,
        word: action.word
      }
    ]
  case DEL_WORD:
  return state.filter(words => {
    return words.id !== action.id
  })
    default:
      return state
  }
}

export default filterWords