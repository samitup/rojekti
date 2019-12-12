const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');

const cors = require('cors');
app.use(cors());

const { db } = require('./util/admin');

const {
  getAllScreams,
  postOneScream,
  getScream,
  commentOnScream,
  deleteScream
} = require('./handlers/screams');
const {
  signup,
  login,
  getAuthenticatedUser,
} = require('./handlers/users');

// Viestien reitit
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);
app.delete('/scream/:screamId', FBAuth, deleteScream);
app.post('/scream/:screamId/comment', FBAuth, commentOnScream);

// Käyttäjien reitit
app.post('/signup', signup);
app.post('/login', login);
app.get('/user', FBAuth, getAuthenticatedUser);


exports.api = functions.region('europe-west1').https.onRequest(app);

// Funkti viestin poistamiseen
exports.onScreamDelete = functions
  .region('europe-west1')
  .firestore.document('/screams/{screamId}')
  .onDelete((snapshot, context) => {
    const screamId = context.params.screamId;
    const batch = db.batch();
    return db
      .collection('comments')
      .where('screamId', '==', screamId)
      .get()
      .then((data) => {
        data.forEach((doc) => {
          batch.delete(db.doc(`/comments/${doc.id}`));
        });
        return batch.commit();
      })
      .catch((err) => console.error(err));
  });