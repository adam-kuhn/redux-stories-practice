import {ADD_IMAGE} from '../actions'
import {DEL_IMAGE} from '../actions'

const initialState = []

function images (state = [], action) {
  switch(action.type) {
    case ADD_IMAGE:
      return [...state, {
      id: action.id,
      source: action.source
    }
    ]

     case DEL_IMAGE:
      return state.filter(images => {
       return images.id !== action.id
    })

    default:
    return state
  }
}

export default images