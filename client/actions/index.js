export const DEL_WORD = 'DEL_WORD'

export const ADD_IMAGE = 'ADD_IMAGE'
export const DEL_IMAGE = 'DEL_IMAGE'


let nextWordId = 0
let nextImg = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}
export const delWord = (id) => {
  return {
    type: DEL_WORD,
    id 
  }
}

export const addImg = (source) => {
  return {
    type: ADD_IMAGE,
    id: nextImg++,
    source
  }
}

export const delImg = (id) => {
  return {
    type: DEL_IMAGE,
    id: id
  }
}


