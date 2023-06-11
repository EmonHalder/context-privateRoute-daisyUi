// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQMBFSkTslXwAwT_4Gwu-tGJfQv_3fqBU",
  authDomain: "authorization-context-daisyui.firebaseapp.com",
  projectId: "authorization-context-daisyui",
  storageBucket: "authorization-context-daisyui.appspot.com",
  messagingSenderId: "514580459813",
  appId: "1:514580459813:web:a8ee2780437d15e2e72acc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;