require('dotenv').config()
const path = require('path');
const {json} = require('body-parser')
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const emailCtrl = require('./emailController')
const userCtrl = require('./userController')
const app = express()
const port = process.env.PORT || 4444

app.use(express.static(`${__dirname}/../build`));
app.use(json())
app.use(cors())
app.use(session({
	secret: process.env.SECRET,
	resave: true,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 3
	}
}))

app.post('/api/email', emailCtrl.addEmail)
app.get('/api/user', userCtrl.getUser)

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, ()=>{
	console.log(`listening on ${port}`)
})

