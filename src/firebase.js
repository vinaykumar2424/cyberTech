// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCmAT7shHRhX1dRVYzZ7sD_o_gCMnieAWU",
  authDomain: "cybertech-206b4.firebaseapp.com",
  projectId: "cybertech-206b4",
  storageBucket: "cybertech-206b4.appspot.com",
  messagingSenderId: "147173661623",
  appId: "1:147173661623:web:de037ee9c3a1f0050be632",
  measurementId: "G-3BR5F3WPRX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();