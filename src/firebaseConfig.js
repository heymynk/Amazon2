// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArH6oLzyUTxw_0UQkaZB437-v3vnm6aKs",
  authDomain: "my2-b7da8.firebaseapp.com",
  projectId: "my2-b7da8",
  storageBucket: "my2-b7da8.appspot.com",
  messagingSenderId: "239823225086",
  appId: "1:239823225086:web:9b19796850a461c7ad25af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);   

export const auth = getAuth(app)