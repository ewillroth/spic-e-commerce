import React, {useState, useEffect} from 'react'

const Dashboard = () => {

	const getEmails = () => {
		//hit endpoint to get all people signed up to email list
	}

	const [emails, setEmails] = useState([])

	useEffect(()=>{getEmails()}, [])

	return (
		<div>{emails.map(email=><p>email</p>)}</div>
	)
}

export default Dashboard;