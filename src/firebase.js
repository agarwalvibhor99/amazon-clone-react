import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBu8Eg9fqG78cTngHyG0hiSOXbSw4Lvh0Y",
  authDomain: "clone-31176.firebaseapp.com",
  databaseURL: "https://clone-31176.firebaseio.com",
  projectId: "clone-31176",
  storageBucket: "clone-31176.appspot.com",
  messagingSenderId: "1098890628971",
  appId: "1:1098890628971:web:3c19c433f7f1375e02862e",
  measurementId: "G-L938XHPWMH",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
