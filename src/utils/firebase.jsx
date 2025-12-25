// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO9ouHdfYOTp0Gn5WJwGWPUwZtXigUIn0",
  authDomain: "netflixgpt-d49e1.firebaseapp.com",
  projectId: "netflixgpt-d49e1",
  storageBucket: "netflixgpt-d49e1.firebasestorage.app",
  messagingSenderId: "975834700",
  appId: "1:975834700:web:30cabb6eea31ee8fb66ee9",
  measurementId: "G-9TV3R0GDN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()