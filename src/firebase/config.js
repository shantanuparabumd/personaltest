import {initializeApp} from "firebase/app"
import { getAuth } from 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUYQS6jM7_GKnoGrsL5_yQ--JyHa3LNE8",
  authDomain: "personal-website-d7de1.firebaseapp.com",
  projectId: "personal-website-d7de1",
  storageBucket: "personal-website-d7de1.appspot.com",
  messagingSenderId: "970083758635",
  appId: "1:970083758635:web:7551d5aa6046c29002706e",
  measurementId: "G-PSE0B5S6YW"
};

//nit firebase

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth()

export {auth}


