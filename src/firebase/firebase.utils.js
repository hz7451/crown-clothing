import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtKzuxFNeYNh2YNlGMSKhwsGF-nqP52aQ",
    authDomain: "crown-db-b191e.firebaseapp.com",
    projectId: "crown-db-b191e",
    storageBucket: "crown-db-b191e.appspot.com",
    messagingSenderId: "284353692679",
    appId: "1:284353692679:web:72067d91fb5fe6b4e756a2",
    measurementId: "G-HD4VKR5RHN"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;