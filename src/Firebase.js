// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBSy_sNhkO0-ojVXCusOgU58cBFwWEMDBM",
    authDomain: "linkedin-clone-4d948.firebaseapp.com",
    projectId: "linkedin-clone-4d948",
    storageBucket: "linkedin-clone-4d948.appspot.com",
    messagingSenderId: "1027596119825",
    appId: "1:1027596119825:web:c9318fbe94f176883f26b0"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = firebase.auth();

  export { db, app, auth };