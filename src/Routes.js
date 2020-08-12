import React, { Fragment } from "react"
import { Route, Redirect } from "react-router-dom"
import UserView from "./Views/UserView"
import RegisterView from "./Views/RegisterView"
import LoginView from "./Views/LoginView"

function Routes () {
  return (
    <Fragment>
      <Route exact path="/">
        <Redirect to="/register" />
      </Route>
      <Route exact path="/login" component={LoginView}/>
      <Route exact path="/register" component={RegisterView}/>
      <Route exact path="/users" component={UserView}/>
    </Fragment>
  )
}

export default Routes