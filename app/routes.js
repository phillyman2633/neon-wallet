import React from 'react'
import { ROUTES } from './core/constants'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import LoginPrivateKey from './containers/LoginPrivateKey'
import TokenSale from './containers/TokenSale'
import CreateWallet from './containers/CreateWallet'
import Dashboard from './containers/Dashboard'
import LoginNep2 from './components/LoginNep2'
import Home from './components/Home'
import Settings from './components/Settings'
import LoginLocalStorage from './components/LoginLocalStorage'
import LoginTokenSale from './components/LoginTokenSale'
import EncryptKey from './components/EncryptKey'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path={ROUTES.DASHBOARD} component={Dashboard} />
    <Route path={ROUTES.CREATE_WALLET} component={CreateWallet} />
    <Route path={ROUTES.ENCRYPT_KEY} component={EncryptKey} />
    <Route path={ROUTES.LOGIN_PRIVATE_KEY} component={LoginPrivateKey} />
    <Route path={ROUTES.LOGIN_LOCAL_STORAGE} component={LoginLocalStorage} />
    <Route path={ROUTES.LOGIN_NEP2} component={LoginNep2} />
    <Route path={ROUTES.LOGIN_TOKEN_SALE} component={LoginTokenSale} />
    <Route path={ROUTES.TOKEN_SALE} component={TokenSale} />
    <Route path={ROUTES.SETTINGS} component={Settings} />
  </Route>
)
