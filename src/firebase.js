import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAKPiONf8oQr_mVG5HpUMl1h6hdpEqJGuc",
    authDomain: "tinder-clone-b20bd.firebaseapp.com",
    databaseURL: "https://tinder-clone-b20bd.firebaseio.com",
    projectId: "tinder-clone-b20bd",
    storageBucket: "tinder-clone-b20bd.appspot.com",
    messagingSenderId: "1659849569",
    appId: "1:1659849569:web:38e50d7bc9a09a78689320",
    measurementId: "G-N3ZTE95MG0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database