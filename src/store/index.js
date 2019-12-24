import { createStore } from 'redux'
import { rootReducers } from './reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const store = createStore(rootReducers, devToolsEnhancer())

export function makeStore () {
  return createStore(rootReducers)
}
