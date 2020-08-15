
import React, { useState, useEffect, useContext } from "react";
import HistoryCard from "../components/HistoryCard";
import { getHistory } from "../services/HistoryServices";
import { AuthContext } from "../context/AuthContext";

function HistoryView(props) {
  const {token} = useContext(AuthContext)
  const [state, setState] = useState({
    records: [],
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (state.length <= 0) {
      const data = await getHistory();
      console.log(data)
      setState({
        ...state,
        records: data.records,
      });
    }
  };

  const renderHistory = () => {
    if (state.length <= 0) {
      return <h3>Cargando usuarios...</h3>;
    } else {
      return state.records.map((record) => (
        <HistoryCard key={record.userId} date={record.checkdate} weight={record.weight} bodyfat={record.bodyfat} musclemass={record.musclemass} calories={record.calories}/>
      ));
    }
  };

  const verifyUser = ()=>{
    return true ? renderHistory() : props.history.push('/login');
  }

  return <div>{verifyUser()}</div>;
}

export default HistoryView;