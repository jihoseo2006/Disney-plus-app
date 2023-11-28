// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXglSSASZgxMtrQiZXzZF-g_R1_aSQLJs",
  authDomain: "react-disney-plus-app-84425.firebaseapp.com",
  projectId: "react-disney-plus-app-84425",
  storageBucket: "react-disney-plus-app-84425.appspot.com",
  messagingSenderId: "350087740940",
  appId: "1:350087740940:web:01619bab92931c6045f829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;