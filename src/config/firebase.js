import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';


const app = initializeApp(firebaseConfig);
// Use your own configs!
const firebaseConfig = {
  apiKey: "AIzaSyCa7nwHS5RBhipX2UJ9ZO6sL9zh7xVVM7U",
  authDomain: "bidding-bunch.firebaseapp.com",
  databaseURL: "https://bidding-bunch-default-rtdb.firebaseio.com",
  projectId: "bidding-bunch",
  storageBucket: "bidding-bunch.appspot.com",
  messagingSenderId: "309856139276",
  appId: "1:309856139276:web:0d2a9c4dfd5f7b6c1ed629"
};


export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();