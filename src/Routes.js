import React, { Fragment, } from "react"
import { Route, Redirect } from "react-router-dom"
//import UserView from "./Views/UserView"
import RegisterView from "./views/RegisterView"
import LoginView from "./views/LoginView"
import HomeView from "./views/HomeView"
import HistoryView from "./views/HistoryView"
 
function Routes () {
  return (
    <Fragment>
      <Route exact path="/">
        <Route exact path="/history" component={HistoryView} />
        
      </Route>
      <Route exact path="/login" component={LoginView}/>
      <Route exact path="/register" component={RegisterView}/>
      <Route exact path="/home" component={HomeView} />
      <Route exact path="/history" component={HistoryView} />
      {/*<Route exact path="/users" component={UserView}/>*/}
    </Fragment>
  )
}

export default Routes