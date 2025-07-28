// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "softwares-2fd89.firebaseapp.com",
    databaseURL: "https://softwares-2fd89-default-rtdb.firebaseio.com",
    projectId: "softwares-2fd89",
    storageBucket: "softwares-2fd89.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
