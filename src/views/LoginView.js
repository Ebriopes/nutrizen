import React, { useState, useContext } from "react";
import {useHistory} from 'react-router-dom';
import { loginUser } from "../services/UserServices";
import LoginForm from "../components/LoginForm";
import { Grid } from "@material-ui/core";
import { AuthContext } from "../context/AuthContext";

function LoginView() {
  const history = useHistory();
  const token = useContext(AuthContext);
  const { setAuthToken } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onSubmit = async () => {
    const data = await loginUser(user);
    if (data) {
      setAuthToken(data.token);
    }
  };

  const onType = (event) => {
    switch (event.target.id) {
      case "email":
        setUser({
          ...user,
          email: event.target.value,
        });
        break;
      case "password":
        setUser({
          ...user,
          password: event.target.value,
        });
        break;

      default:
        break;
    }
  };

  return (
    <Grid container justify="center" style={{marginTop: "5vh"}} >
      {!token.token ? <></>: history.push('/home') }
      <LoginForm onSubmit={onSubmit} onType={onType} />
    </Grid>
  );
}

export default LoginView;
