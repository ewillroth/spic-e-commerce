import React, {useEffect, useState} from 'react';
import Login from './Login';
import Dashboard from './Dashboard'
import axios from 'axios'

const Admin = () => {

	const [user, setUser] = useState(false)

	const getUser = async () => {
		let response = await axios.get('/api/user')
		//if response is a user
		if (response.data !== "no current user"){
			setUser(response.data)
		} else {
			console.log('no user logged in')
		}
	}
	useEffect(()=>{getUser()}, [])
	
	return (
		user?<Dashboard/>:<Login/>
	)
}

export default Admin;