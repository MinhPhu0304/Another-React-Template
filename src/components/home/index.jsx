import React, { useEffect } from 'react'

import { store } from 'store'
import { changeGreetings } from 'store/actions'

export function Home () {
  useEffect(() => {
    store.dispatch(changeGreetings('everyone'))
  })
  return (
    <div>
      <p>Hello from React Redux</p>
    </div>
  )
}
