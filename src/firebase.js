var firebase = require('firebase')

// Initialize Firebase
var config = {
	apiKey: process.env.REACT_APP_FIREBASE_API,
	authDomain: "spicy-boys.firebaseapp.com",
	databaseURL: "https://spicy-boys.firebaseio.com",
	projectId: "spicy-boys",
	storageBucket: "spicy-boys.appspot.com",
	messagingSenderId: "675452609959"
};

var firebaseApp = firebase.initializeApp(config);
var db = firebaseApp.database()

module.exports = {
	db
}