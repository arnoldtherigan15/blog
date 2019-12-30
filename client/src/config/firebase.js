import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: `${process.env.VUE_APP_API_KEY}`,
  authDomain: `${process.env.VUE_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.VUE_APP_PROJECT_ID}`
})

export const firebaseConfig = {
  db: firebase.firestore(),
  auth: firebase.auth(),
  firebase
}
