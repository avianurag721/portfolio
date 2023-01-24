import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcm0f1jKA8ifbVPZ9P7lvTBTWrGJHEpCU",
  authDomain: "form-e1f4e.firebaseapp.com",
  projectId: "form-e1f4e",
  storageBucket: "form-e1f4e.appspot.com",
  messagingSenderId: "663294027856",
  appId: "1:663294027856:web:406dc09bd97fa1611e4955",
  measurementId: "G-963XD18NV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth };