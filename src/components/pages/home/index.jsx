import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { store } from 'store'
import { changeGreetings } from 'store/actions'

export function Home () {
  useEffect(() => {
    store.dispatch(changeGreetings('everyone'))
  })
  return (
    <div>
      <p>Hello from React Redux</p>
      <Link to="/portal">Click here to navigate to portal page</Link>
    </div>
  )
}
