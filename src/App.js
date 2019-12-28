import React from 'react'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { history } from 'store/history'

import { Home } from 'components/pages/home'
import { Portal } from 'components/pages/portal'

import { store } from './store'

export function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portal">
          <Portal />
        </Route>
      </Router>
    </Provider>
  )
}
