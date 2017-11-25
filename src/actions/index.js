import { v4 } from 'node-uuid'

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text
  }
}
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteAll = () => {
  return {
    type: 'DELETE_ALL'
  }
}

export const deleteCompleted = () => {
  return {
    type: 'DELETE_COMPLETED'
  }
}
