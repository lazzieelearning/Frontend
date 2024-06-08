// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogger-hunt.firebaseapp.com",
  projectId: "blogger-hunt",
  storageBucket: "blogger-hunt.appspot.com",
  messagingSenderId: "468676079708",
  appId: "1:468676079708:web:db965f1cbdb37e85523699"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);