// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqonQ-u5_uwt3fwhtZxZH1NDvXZJfX23Q",
  authDomain: "pantry-app-969e3.firebaseapp.com",
  projectId: "pantry-app-969e3",
  storageBucket: "pantry-app-969e3.appspot.com",
  messagingSenderId: "282738394306",
  appId: "1:282738394306:web:6d35c41d9e0ef73e8ae75b",
  measurementId: "G-XN12QJ3SMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
const firestore = getFirestore(app);
export { firestore, analytics };