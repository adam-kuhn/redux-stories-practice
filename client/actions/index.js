export const ADD_IMAGE = 'ADD_IMAGE'

let nextWordId = 0
let nextImg = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const addImg = (source) => {
  return {
    type: ADD_IMAGE,
    id: nextImg++,
    source
  }
}
