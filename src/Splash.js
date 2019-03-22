import React, {useState, useEffect} from 'react';
import logo from './assets/spicyboys.png';
import {emailValidator} from './functions';
import axios from 'axios';

const Splash = () => {

	const [email, setEmail] = useState('')

	const handleChange = e => {
		switch(e.target.name) {
			case 'email':
				setEmail(e.target.value)
				break;
			default:
				console.log('handleChange fired without valid input name')
		}
	}

	const handleEmailSubmit = e => {
		e.preventDefault()
		if(emailValidator(email)){
			console.log('submitting form')
			axios.post('/api/email', {email})
			.then(response=>{
				console.log(response)
				setEmail('')
			})
			.catch(error=>{
				console.log(error)
			})
		} else {
			alert('enter a valid email')
		}
	}

	return (
		<main className='Splash'>
			<img className="logoImg" src={logo} alt="Plant icon made by Pixel perfect from www.flaticon.com"/>
			<p id="tagline">Craft spices coming soon. Sign up below for updates.</p>
			<form onSubmit={handleEmailSubmit} className="emailForm">
				<div className="input">
					<label className={email?"inputlabel":"hide"} htmlFor="email">email</label>
					<input value={email} placeholder="email" name="email" onChange={handleChange} id="email"></input>
				</div>
				<button>Submit</button>
			</form>
		</main>
	)
}

export default Splash;