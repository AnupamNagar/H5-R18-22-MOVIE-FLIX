// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy6BifgusDngF3YdHbhnoSeW3Sn6MfQ6c",
  authDomain: "encarta-2k22.firebaseapp.com",
  projectId: "encarta-2k22",
  storageBucket: "encarta-2k22.appspot.com",
  messagingSenderId: "321325493332",
  appId: "1:321325493332:web:f4245d2322fd7ad84611c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();