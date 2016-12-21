import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

const devtools = window.devToolsExtension || (() => noop => noop)

export default initialState => {
  return createStore(
    reducers,
    initialState,
    compose(devtools())
  )
}
