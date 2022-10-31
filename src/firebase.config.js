import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEtX0utyxIxCstnCapESbc680KPRgVrhQ",
  authDomain: "house-marketplace-app-730b5.firebaseapp.com",
  projectId: "house-marketplace-app-730b5",
  storageBucket: "house-marketplace-app-730b5.appspot.com",
  messagingSenderId: "306576153853",
  appId: "1:306576153853:web:81be2994f813e2b083b294",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
