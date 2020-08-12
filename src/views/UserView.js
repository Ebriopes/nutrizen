import React, { useState, useEffect, useContext } from "react";
import UserCard from "../components/UserCard";
import { getUsers } from "../services/UserServices";
import { AuthContext } from "../context/AuthContext";

function UserView(props) {
  const {token} = useContext(AuthContext)
  const [state, setState] = useState({
    users: [],
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (state.users.length <= 0) {
      const data = await getUsers();
      setState({
        ...state,
        users: data.users,
      });
    }
  };

  const renderUsers = () => {
    if (state.users.length <= 0) {
      return <h3>Cargando usuarios...</h3>;
    } else {
      return state.users.map((user) => (
        <UserCard key={user._id} name={user.name} email={user.email} />
      ));
    }
  };

  const verifyUser = ()=>{
    console.log(token)
    return token ? renderUsers() : props.history.push('/login');
  }

  return <div className="Users">{verifyUser()}</div>;
}

export default UserView;
