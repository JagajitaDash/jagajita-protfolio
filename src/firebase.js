// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9uM8cFFsoRkzQYPWE0KDvkMoXVOHEEMo",
  authDomain: "portfolio-contact-fb13c.firebaseapp.com",
  projectId: "portfolio-contact-fb13c",
  storageBucket: "portfolio-contact-fb13c.appspot.com",
  messagingSenderId: "854591528768",
  appId: "1:854591528768:web:c9b77f0bb92b99a4a2a4a5",
  measurementId: "G-C1P8V6XRP2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
