import React from 'react' // 引入react
import {
  HashRouter as
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import App from './containers/app'
import Setting from './containers/setting/index'

const Routes = (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact  path='/' component={Setting} />
      </Switch>
    </App>
  </BrowserRouter>
)
export default Routes