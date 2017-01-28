import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'

import Schedule from './react/pages/schedule.jsx'
import Clients from './react/pages/clients.jsx'
import reducers from './redux/reducers'

require('!style!css!sass!../static/style/general.scss')

const preloadedState = JSON.parse(localStorage.getItem('store'))

let store

if (preloadedState) {
  store = createStore(
    reducers,
    preloadedState,
  )
} else {
  store = createStore(
    reducers,
  )
}

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
})

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Schedule} />
      <Route path="/clients" component={Clients} />
    </Router>
  </Provider>,
  document.getElementById('app'),
)
