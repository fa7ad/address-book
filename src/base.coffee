import rebase from 're-base'
import firebase from 'firebase'

if process.env.NODE_ENV isnt 'production'
  console.table process.env

config =
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING

app = firebase.initializeApp config
base = rebase.createClass app.database()

export {app, base}