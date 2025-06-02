import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gowithporto-d892a.firebaseapp.com",
  projectId: "gowithporto-d892a",
  storageBucket: "gowithporto-d892a.firebasestorage.app",
  messagingSenderId: "692527782331",
  appId: "1:692527782331:web:ca363cc0dc0b49a56ecc9e",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
