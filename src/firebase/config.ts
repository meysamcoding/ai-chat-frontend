import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5q3DNvnqR79sn_uArsWoASsbfgQOEByU",
  authDomain: "chat-ai-4a847.firebaseapp.com",
  projectId: "chat-ai-4a847",
  storageBucket: "chat-ai-4a847.firebasestorage.app",
  messagingSenderId: "174057440325",
  appId: "1:174057440325:web:7a5e208a5f1721d3080f2c",
  measurementId: "G-RTZ0JPV188"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
