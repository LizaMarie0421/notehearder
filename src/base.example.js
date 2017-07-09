import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'


const app = firebase.initializeApp({
    apiKey: "Your api Key",
    authDomain: "your auto domain",
    databaseURL: "your url",
    projectId: "your project id",
    storageBucket: "your storage bucket",
    messagingSenderId: "your messenger id"
  })

  const db = database(app)
  export default Rebase.createClass(db)