import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC00EhOCnVW5yo1lC_nHR5J89Bk_N4nGjA",
  authDomain: "roomx75.firebaseapp.com",
  projectId: "roomx75",
  storageBucket: "roomx75.firebasestorage.app",
  messagingSenderId: "30346383945",
  appId: "1:30346383945:web:dfa71ed6530c869381e598",
  measurementId: "G-3RL9HL19N7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
