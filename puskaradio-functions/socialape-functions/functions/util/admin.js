

const admin = require("firebase-admin");
const serviceAccount = require("../socialape-80e0b-firebase-adminsdk-6mhrn-f95404ae47.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://socialape-80e0b.firebaseio.com"
  });

  const db = admin.firestore();

  module.exports = { admin, db }