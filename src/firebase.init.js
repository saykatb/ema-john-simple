// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM9pbmGME_bkLGZo03DJlRjEwGTiA2SPw",
  authDomain: "ema-john-simple-79988.firebaseapp.com",
  projectId: "ema-john-simple-79988",
  storageBucket: "ema-john-simple-79988.appspot.com",
  messagingSenderId: "97791661639",
  appId: "1:97791661639:web:385b97f099bbae708ac362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;