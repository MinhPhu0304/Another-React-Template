import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Home } from './components/home'
import { Portal } from './components/portal'

import { store } from './store'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/">
          <Home />
        </Route>
        <Route exact path="/portal">
          <Portal />
        </Route>
      </Router>
    </Provider>
  )
}
