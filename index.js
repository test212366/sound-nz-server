require('dotenv').config()
const express = require('express'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	router = require('./routes/index'),
	app = express()

app.use(cors())
app.use(express.json({extended: true}))
app.use('/api', router)
 

;( async () => {
	try {
		await mongoose.connect('mongodb+srv://qwerty:qwert123@cluster0.acko9cz.mongodb.net/UsersDB?retryWrites=true&w=majority')
		app.listen(process.env.PORT || 5000, () => console.log('SERVER STARTED '))
	} catch(e) {
		console.log(e)
	}
})() 
 