// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOU API KEY",
  authDomain: "YOUR DOMAIN",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGEBUCKET",
  messagingSenderId: "YOUR MESSAGINGSENDER ID",
  appId: "YOUR APP ID",
  measurementId: "YOUR MEASUREMENTID"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
