import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArH6oLzyUTxw_0UQkaZB437-v3vnm6aKs",
  authDomain: "my2-b7da8.firebaseapp.com",
  projectId: "my2-b7da8",
  storageBucket: "my2-b7da8.appspot.com",
  messagingSenderId: "239823225086",
  appId: "1:239823225086:web:9b19796850a461c7ad25af",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
