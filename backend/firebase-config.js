// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLnhL6MfZt2kQg5u4DGgEzEfWpNNLUYus",
  authDomain: "myfirstapp-9bda2.firebaseapp.com",
  projectId: "myfirstapp-9bda2",
  storageBucket: "myfirstapp-9bda2.firebasestorage.app",
  messagingSenderId: "587058107322",
  appId: "1:587058107322:web:c152b229eb9f475f210383",
  measurementId: "G-3Y3JTT1LVF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
