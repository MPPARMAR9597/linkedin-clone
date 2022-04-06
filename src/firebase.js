import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWRYjDGQW3i6Mgp2eJU6Ec3KRJoB0Brdo",
    authDomain: "linkedin-clone-yt-7b5e7.firebaseapp.com",
    projectId: "linkedin-clone-yt-7b5e7",
    storageBucket: "linkedin-clone-yt-7b5e7.appspot.com",
    messagingSenderId: "709109768048",
    appId: "1:709109768048:web:993007ca76e24e918379b5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };