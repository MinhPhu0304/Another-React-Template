import { combineReducers } from 'redux'

import { CHANGE_GREETINGS } from '../actions'

import { page } from './page'

export const rootReducers = combineReducers({ greeting, page })

function greeting (state, action) {
  switch (action.type) {
    case CHANGE_GREETINGS:
      return {
        ...state,
        greeting: action.greeting
      }
    default: 
      return {
        ...state,
        greeting: 'Hello from  Redux'
      }
  }
}
