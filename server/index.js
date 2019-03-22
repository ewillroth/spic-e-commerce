require('dotenv').config()
const {json} = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 4444

app.use(json())



app.listen(port, ()=>{
	console.log(`listening on ${port}`)
})