import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/reducer'
import axiosInstance from '../utils/ajax'
// import { createLogger } from 'redux-logger'
import axiosMiddleware from 'redux-axios-middleware'
import axiosMiddlewareConfig from '../utils/axios_middleware_config'

const middleware = [axiosMiddleware(axiosInstance,axiosMiddlewareConfig),thunk]
const Store = createStore(reducers,compose(
  applyMiddleware(...middleware),
))

export default Store;