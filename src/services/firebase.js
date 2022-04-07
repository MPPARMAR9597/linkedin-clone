import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAWRYjDGQW3i6Mgp2eJU6Ec3KRJoB0Brdo",
    authDomain: "linkedin-clone-yt-7b5e7.firebaseapp.com",
    projectId: "linkedin-clone-yt-7b5e7",
    storageBucket: "linkedin-clone-yt-7b5e7.appspot.com",
    messagingSenderId: "709109768048",
    appId: "1:709109768048:web:993007ca76e24e918379b5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseDb = firebase.database().ref()
export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export default firebase