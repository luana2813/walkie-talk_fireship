import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAy9YFLQn-Mz6twcCLYT2AZuOU6iuzhkns",
  authDomain: "walkie-talk.firebaseapp.com",
  databaseURL: "https://walkie-talk.firebaseio.com",
  projectId: "walkie-talk",
  storageBucket: "walkie-talk.appspot.com",
  messagingSenderId: "81607746844",
  appId: "1:81607746844:web:133ca3ebaf7db73a1446d9"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
