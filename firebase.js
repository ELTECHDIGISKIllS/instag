import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyARrTLzufNcnW0gSSq8kFeWovQNyJD5aaA",
  authDomain: "instag-b94b3.firebaseapp.com",
  projectId: "instag-b94b3",
  storageBucket: "instag-b94b3.appspot.com",
  messagingSenderId: "165616143097",
  appId: "1:165616143097:web:67eef282f59349ebcc3028"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);

export { app, db, storage, auth };
