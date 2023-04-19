import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSMcDaAsXJF8A-90b5SFemfo4DbxHaCeo",
  authDomain: "breeze-authentication.firebaseapp.com",
  projectId: "breeze-authentication",
  storageBucket: "breeze-authentication.appspot.com",
  messagingSenderId: "654116363933",
  appId: "1:654116363933:web:9be18a3b551320459d7e74",
  measurementId: "G-PJHG46E5F1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
