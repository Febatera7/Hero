import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Logon from '../src/pages/Logon'
import Register from '../src/pages/Register'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}