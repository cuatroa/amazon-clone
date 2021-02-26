import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCa-ETjY7c8Nc83vaNY4ZzxkLdJjPXBdg8",
    authDomain: "clone-b3014.firebaseapp.com",
    projectId: "clone-b3014",
    storageBucket: "clone-b3014.appspot.com",
    messagingSenderId: "995838344882",
    appId: "1:995838344882:web:d6a0aec46bba5401f513ab",
    measurementId: "G-Q11JV61ZW9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };