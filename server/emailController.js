const {db} = require('../src/firebase')
const nodemailer = require('nodemailer')

const addEmail = (req,res,next) => {
	let emailsRef = db.ref('emails/')
	emailsRef.once('value')
	.then(response=>{
		let emails = response.val()
		//check if email is already in db
		if (Object.values(emails).includes(req.body.email)){
			res.status(200).json("email is already in db")
		} else {
			emailsRef.push(req.body.email)
				.then(response => res.status(200).json('email is added'))
				.catch(error => console.log(error) || res.status(400).json('couldnt add email'))
		}
	})
}

async function sendEmail(req, res) {
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: process.env.NODEMAILER_ACCOUNT,
			pass: process.env.NODEMAILER_PASS
		}
	});

	let mailOptions = {
		from: `"Spicy Boys" <${process.env.NODEMAILER_ACCOUNT}>`, // sender address
		to: ``, // list of receivers
		subject: ``, // Subject line
		text: ``, // plain text body
		html: `` // html body
	};

	// send mail with defined transport object
	await transporter.sendMail(mailOptions)
}

module.exports = {
	addEmail,
	sendEmail
}