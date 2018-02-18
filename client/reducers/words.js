import {DEL_WORD} from '../actions'

const words = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORD':
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

export default words
