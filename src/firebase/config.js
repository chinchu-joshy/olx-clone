import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkThql9iOEzazmmbx-HBJ3U7XSpVOufH4",
    authDomain: "olx-sample-89450.firebaseapp.com",
    projectId: "olx-sample-89450",
    storageBucket: "olx-sample-89450.appspot.com",
    messagingSenderId: "187838167396",
    appId: "1:187838167396:web:3c453edec1f38f94ffe271",
    measurementId: "G-G5Z9JW6HP7"
  };
export default firebase.initializeApp(firebaseConfig)