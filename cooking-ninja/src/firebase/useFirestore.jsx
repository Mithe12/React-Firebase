import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0tTuJGyssNAjoBoYb9fp1Hygwvit7tWk",
    authDomain: "fir-recipes-35258.firebaseapp.com",
    projectId: "fir-recipes-35258",
    storageBucket: "fir-recipes-35258.appspot.com",
    messagingSenderId: "241942459497",
    appId: "1:241942459497:web:0b138b1c808b3c8e759ef8",
    measurementId: "G-Z6QWB8MET4"
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
