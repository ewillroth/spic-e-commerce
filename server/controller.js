const {db} = require('../src/firebase')

const addEmail = (req,res,next) => {
	let emailsRef = db.ref('emails/')
	emailsRef.once('value')
	.then(response=>{
		let emails = response.val()
		//check if email is already in db
		if (Object.values(emails).includes(req.body.email)){
			res.status(200).json("email is already in db")
		} else {
			emails.push(req.body.email)
				.then(response => res.status(200).json('email is added'))
				.catch(error => console.log(error) || res.status(400).json('couldnt add email'))
		}
	})
}

module.exports = {
	addEmail
}