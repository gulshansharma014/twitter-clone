import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-YGDXdQ0C4gPF4lwTyCclAR2qBnZcwwA",
    authDomain: "twitter-clone-d3a28.firebaseapp.com",
    projectId: "twitter-clone-d3a28",
    storageBucket: "twitter-clone-d3a28.appspot.com",
    messagingSenderId: "994225755113",
    appId: "1:994225755113:web:8f114f1e4bb3e51b217178",
    measurementId: "G-2PDR7PE9MK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;