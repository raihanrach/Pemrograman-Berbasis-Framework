import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3s5O7KE1kgMqcPUD0-P2vy0e-E4sPypY",
    authDomain: "minggu11.firebaseapp.com",
    projectId: "minggu11",
    storageBucket: "minggu11.appspot.com",
    messagingSenderId: "927480011216",
    appId: "1:927480011216:web:62abc67c34150829a001d5"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;