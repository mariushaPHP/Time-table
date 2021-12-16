import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJVVxbpiZjHWeMgz3bwKqclmN6RUkrkz8",
    authDomain: "timetableapp-ab3bc.firebaseapp.com",
    projectId: "timetableapp-ab3bc",
    storageBucket: "timetableapp-ab3bc.appspot.com",
    messagingSenderId: "835791312682",
    appId: "1:835791312682:web:246518900ab18c8fc9f053"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default firebase