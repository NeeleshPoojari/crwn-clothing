import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAKsCbbSE1LNeuoWn93I7XIxUUjb9xbs4k",
    authDomain: "crwn-db-28c63.firebaseapp.com",
    databaseURL: "https://crwn-db-28c63.firebaseio.com",
    projectId: "crwn-db-28c63",
    storageBucket: "crwn-db-28c63.appspot.com",
    messagingSenderId: "717983620465",
    appId: "1:717983620465:web:537e64b2afefaf433caad0",
    measurementId: "G-5D8MKPJLQX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
