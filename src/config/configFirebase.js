// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV8DBvvqr00a5PVVQ8ZLU9-rEjYSBCE7I",
  authDomain: "booking-app-9c153.firebaseapp.com",
  projectId: "booking-app-9c153",
  storageBucket: "booking-app-9c153.appspot.com",
  messagingSenderId: "1008523222024",
  appId: "1:1008523222024:web:736dad37c1b9101e5885bd",
  measurementId: "G-JR8RJR4TRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
// const analytics = getAnalytics(app);