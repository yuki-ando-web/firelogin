import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCiRGtD6-aQLCeysZo2qcfipwpg3rhih4c",
  authDomain: "nuxtjsfireauthfiresdewebapp.firebaseapp.com",
  projectId: "nuxtjsfireauthfiresdewebapp",
  storageBucket: "nuxtjsfireauthfiresdewebapp.appspot.com",
  messagingSenderId: "265129738583",
  appId: "1:265129738583:web:13a0b539d328569c8d7e12",
  measurementId: "G-3VBTLQET6X"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
    firebase.analytics()
}

export const auth = firebase.auth
export default firebase