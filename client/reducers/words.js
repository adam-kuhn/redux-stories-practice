import {ADD_WORD} from '../actions'
import {DEL_WORD} from '../actions'
import {FILT_WORD} from '../actions'

const words = (state = [], action) => {
  switch (action.type) {
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

    case FILT_WORD:
    return state.filter(words => {
      return words.word.includes(action.letters)
    })

    default:
      return state
  }
}

export default words
