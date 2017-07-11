import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "Your api Key",
    authDomain: "your auto domain",
    databaseURL: "your url",
    projectId: "your project id",
    storageBucket: "your storage bucket",
    messagingSenderId: "your messenger id"
  })

  const db = database(app)

  export const auth = app.auth()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const githubProvider = new firebase.auth.GithubAuthProvider()
  export default Rebase.createClass(db)