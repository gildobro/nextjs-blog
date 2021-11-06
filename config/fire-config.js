// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// require('firebase/firestore');
// import 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlkSBTEewPoqR-vFDwFMtjE4ELca4UlvU",
  authDomain: "blogapp-3d21f.firebaseapp.com",
  projectId: "blogapp-3d21f",
  storageBucket: "blogapp-3d21f.appspot.com",
  messagingSenderId: "723202303237",
  appId: "1:723202303237:web:40034d09a20500622d436c"
};

try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }

const fire = firebase;
export default fire;
// Initialize Firebase
//const app = initializeApp(firebaseConfig);