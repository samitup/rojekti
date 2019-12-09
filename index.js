const functions = require('firebase-functions');

const app = require('express')();

const FBauth = require('./util/fbAuth')

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login } = require('./handlers/users')


//Scream routes:
//Hakee screamit
 app.get('/screams', getAllScreams );
 //Postaa yhden screamin
 app.post('/scream' , FBauth , postOneScream );

 //users route
app.post('/signup' ,signup );
app.post('/login', login);

 

exports.api = functions.region('europe-west1').https.onRequest(app);