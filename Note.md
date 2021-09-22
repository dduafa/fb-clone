
npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNC5YmJz5DGfus7o19npwrC44VYczIN9Y",
  authDomain: "fb-clone-dfd54.firebaseapp.com",
  projectId: "fb-clone-dfd54",
  storageBucket: "fb-clone-dfd54.appspot.com",
  messagingSenderId: "669167604396",
  appId: "1:669167604396:web:5c559fb256e493b4cf4509",
  measurementId: "G-RPTPBHK5KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)


npm install -g firebase-tools

Sign in to Google
firebase login

Initiate your project
Run this command from your app’s root directory:

firebase init


When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:

firebase deploy