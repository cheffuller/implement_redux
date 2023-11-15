import { configureStore } from 'redux'
import reducers from './reducers'
import state from './state'

export default configureStore(reducers, state)