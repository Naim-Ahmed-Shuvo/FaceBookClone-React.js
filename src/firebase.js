// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCvYvbi5OPCIfVKWhHdJFNXp4ljnYLvgDk",
  authDomain: "fb-clone-react-dc08a.firebaseapp.com",
  projectId: "fb-clone-react-dc08a",
  storageBucket: "fb-clone-react-dc08a.appspot.com",
  messagingSenderId: "775165087237",
  appId: "1:775165087237:web:109976f54b554acaf3966c",
  measurementId: "G-M3W96DTR14",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider}
export default db;