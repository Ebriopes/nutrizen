import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./Routes";
import Container from "@material-ui/core/Container";
import AuthContextProvider from "./context/AuthContext";
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <NavBar/>
        <Container maxWidth="lg">
          <Switch>
            <Routes />
          </Switch>
        </Container>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
