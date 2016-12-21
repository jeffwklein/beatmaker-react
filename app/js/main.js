import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../stylesheets/main.scss'
import App from './app'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)
