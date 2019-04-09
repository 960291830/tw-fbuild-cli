import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/reducer'
import axiosInstance from '../utils/ajax'
import axiosMiddlewareConfig from '../utils/axios_middleware_config'
//import { createLogger } from 'redux-logger'
import axiosMiddleware from 'redux-axios-middleware'


// const loggerMiddleware = createLogger()
// const middleware = [axiosMiddleware(axiosInstance, axiosMiddlewareConfig), thunk, createLogger]
const middleware = [axiosMiddleware(axiosInstance, axiosMiddlewareConfig), thunk]
const Store = createStore(reducers,compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f=>f
))

export default Store;