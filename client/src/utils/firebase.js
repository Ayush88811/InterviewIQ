
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-f0494.firebaseapp.com",
  projectId: "interviewiq-f0494",
  storageBucket: "interviewiq-f0494.firebasestorage.app",
  messagingSenderId: "957691273195",
  appId: "1:957691273195:web:82637d64fb6b882f5003ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };

