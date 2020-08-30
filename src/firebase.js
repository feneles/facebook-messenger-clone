import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAMGpgnuu3VTVPazQWH3cw6D280U3FpjW0",
  authDomain: "facebook-messenger-clone-a8ff6.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-a8ff6.firebaseio.com",
  projectId: "facebook-messenger-clone-a8ff6",
  storageBucket: "facebook-messenger-clone-a8ff6.appspot.com",
  messagingSenderId: "135647697230",
  appId: "1:135647697230:web:5dad4f396029cb69f6661f",
  measurementId: "G-4LDD3PGMWT",
});

const db = firebaseApp.firestore();

export default db;
