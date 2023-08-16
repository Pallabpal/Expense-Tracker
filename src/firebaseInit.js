// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG58NqU4l__ztfJsYd_5ylTf0GaXr-nAo",
  authDomain: "expenses-3ec54.firebaseapp.com",
  projectId: "expenses-3ec54",
  storageBucket: "expenses-3ec54.appspot.com",
  messagingSenderId: "290594280523",
  appId: "1:290594280523:web:b564fb175810adc056a9ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);