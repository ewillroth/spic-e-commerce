import React, {useState, useEffect} from 'react';
import logo from './assets/spicyboys.png';
import {emailValidator} from './functions';

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
					<input placeholder="email" name="email" onChange={handleChange} id="email"></input>
				</div>
				<button>Submit</button>
			</form>
		</main>
	)
}

export default Splash;