import { createBrowserHistory } from 'history'

import { store } from 'store'
import { navigate } from 'store/actions'

export const history = createBrowserHistory()

history.listen((location, action) => {
  store.dispatch(navigate(location))
})
store.dispatch(navigate(history.location))
