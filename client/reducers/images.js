import {ADD_IMAGE} from '../actions'

const initialState = []

function images (state = [], action) {
  switch(action.type) {
    case ADD_IMAGE:
    return [...state, {
      id: action.id,
      source: action.source
    }
    ]
    default:
    return state
  }
}

export default images