import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGHQ7-FWKF5lhN81DvSBo1Rdd5W5w2ReA",
  authDomain: "amzhtw.firebaseapp.com",
  projectId: "amzhtw",
  storageBucket: "amzhtw.appspot.com",
  messagingSenderId: "982213768239",
  appId: "1:982213768239:web:cf814a06e930f1f12502da",
  measurementId: "G-G4MJE00X05"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };