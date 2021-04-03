import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCidQZnyvE-Wm0QyUY_OZYf3BFqgBCL6ZI",
    authDomain: "clone-7516d.firebaseapp.com",
    projectId: "clone-7516d",
    storageBucket: "clone-7516d.appspot.com",
    messagingSenderId: "79761602976",
    appId: "1:79761602976:web:e2fdb661aa01eeceda8cc5",
    measurementId: "G-3RBQYFCVDH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };