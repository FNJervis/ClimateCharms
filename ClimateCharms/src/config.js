// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQgVtcLJ68RnKXxcc6tBiWX4YvT_QduzM",
  authDomain: "climatecharms.firebaseapp.com",
  projectId: "climatecharms",
  storageBucket: "climatecharms.appspot.com",
  messagingSenderId: "869075136413",
  appId: "1:869075136413:web:c911efe8e5040c0b51c974",
  measurementId: "G-NRYHY4SDMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};