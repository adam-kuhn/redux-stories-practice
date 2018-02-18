import {combineReducers} from 'redux'

import words from './words'
import images from './images'
import filter from './filter'

export default combineReducers({
  words,
  images,
  filter,
})
