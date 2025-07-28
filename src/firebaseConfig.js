// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfxm4zKhL2lpvEqj0CtVRtZC0cqVdCPs4",
    authDomain: "softwares-2fd89.firebaseapp.com",
    projectId: "softwares-2fd89",
    storageBucket: "softwares-2fd89.firebasestorage.app",
    messagingSenderId: "58510647690",
    appId: "1:58510647690:web:e0d2dba30886032ec86873",
    measurementId: "G-80EDC1YRR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);