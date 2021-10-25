// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUf3ZtHovgHZ3nRKo3q0gBHYz4IMhANCs",
  authDomain: "instagram-2-yt-204e2.firebaseapp.com",
  projectId: "instagram-2-yt-204e2",
  storageBucket: "instagram-2-yt-204e2.appspot.com",
  messagingSenderId: "612713263458",
  appId: "1:612713263458:web:579bf192788e544a583c3b",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
