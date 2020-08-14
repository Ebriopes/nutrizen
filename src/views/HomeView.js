import React, { useContext,} from 'react';
import { AuthContext } from '../context/AuthContext';
import UserQV from '../components/userQuickView'
import { useHistory } from 'react-router-dom';

function HomeView() {
	const history = useHistory()
	const {token} = useContext(AuthContext);

	const verifyUser = ()=>{
		return token ? <UserQV></UserQV> : history.push('/login');
	  }
	
	return (
		<div>{verifyUser()}</div>
	)
}

export default HomeView;
