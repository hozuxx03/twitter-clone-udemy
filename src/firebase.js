import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4fLLKN27YgmTsMFA4xZDbXmLjzdbE7Hw",
    authDomain: "twitter-clone-udemy-d5192.firebaseapp.com",
    projectId: "twitter-clone-udemy-d5192",
    storageBucket: "twitter-clone-udemy-d5192.appspot.com",
    messagingSenderId: "287834632602",
    appId: "1:287834632602:web:cbd6b2e1986c65a02d4a23"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;