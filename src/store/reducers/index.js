import { combineReducers } from 'redux'

import { CHANGE_GREETINGS } from '../actions'

export const rootReducers = combineReducers({ greeting })

function greeting (state, action) {
  switch(action.type) {
    case CHANGE_GREETINGS:
      return {
        ...state,
        greeting: action.greeting
      }
    default: 
      return {
        greeting: 'Hello from  Redux'
      }
  }
}