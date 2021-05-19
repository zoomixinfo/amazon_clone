import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxfY-sod4R5m2RAZ2yf7Vz3JXKQpxgtZI",
    authDomain: "fir-d75eb.firebaseapp.com",
    projectId: "fir-d75eb",
    storageBucket: "fir-d75eb.appspot.com",
    messagingSenderId: "686330316461",
    appId: "1:686330316461:web:90a594a515022f1f7b6824",
    measurementId: "G-06MSY2DHCM"
})
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  };