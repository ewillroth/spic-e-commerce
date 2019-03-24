import React, {useEffect, useState} from 'react';
import Login from './Login';
import axios from 'axios'

const Admin = () => {

	const [user, setUser] = useState('')

	const getUser = async () => {
		let response = await axios.get('/api/user')
		console.log(response)
	}
	useEffect(getUser, [])
	
	return (
		<div></div>
	)
}

export default Admin;