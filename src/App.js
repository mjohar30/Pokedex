import React from 'react'
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route path="/404" component={NotFound}/>
          <Redirect from="*" to="/404"/> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
