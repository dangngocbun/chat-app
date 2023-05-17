import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD8-QhofOJRAhPFFgaiW3KUuXK07PfI3Oo",
  authDomain: "chat-app-998d5.firebaseapp.com",
  projectId: "chat-app-998d5",
  storageBucket: "chat-app-998d5.appspot.com",
  messagingSenderId: "55137146767",
  appId: "1:55137146767:web:c8f357101d0c02f5021dfa",
  measurementId: "G-MTEER06LZ2"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();