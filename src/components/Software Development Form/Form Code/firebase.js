// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAfxm4zKhL2lpvEqj0CtVRtZC0cqVdCPs4",
    authDomain: "softwares-2fd89.firebaseapp.com",
    databaseURL: "https://softwares-2fd89-default-rtdb.firebaseio.com",
    projectId: "softwares-2fd89",
    storageBucket: "softwares-2fd89.appspot.com",
    messagingSenderId: "1:58510647690:web:e0d2dba30886032ec86873",
    appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
