import React, {useEffect, useState} from 'react';
import Login from './Login';
import Dashboard from './Dashboard'
import axios from 'axios'

const Admin = () => {

	const [user, setUser] = useState('')

	const getUser = async () => {
		let response = await axios.get('/api/user')
		console.log(response)
		//if response is a user
		setUser(response)
	}
	useEffect(getUser, [])
	
	return (
		user?<Dashboard/>:<Login/>
	)
}

export default Admin;