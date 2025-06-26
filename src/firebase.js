import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBchH8GwCUh0gQ15TIifU2JIygZBWM8Ywo",
  authDomain: "trackx-d2e87.firebaseapp.com",
  projectId: "trackx-d2e87",
  storageBucket: "trackx-d2e87.firebasestorage.app",
  messagingSenderId: "369433485570",
  appId: "1:369433485570:web:8027bd39b02efdff95a21b",
  measurementId: "G-F5H71FS0H8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
