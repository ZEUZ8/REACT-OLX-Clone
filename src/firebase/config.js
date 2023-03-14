import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyArYVYwc3kneHKiFjFFN5j-q9caMsVstNw",
    authDomain: "olx-clone-6aa3d.firebaseapp.com",
    projectId: "olx-clone-6aa3d",
    storageBucket: "olx-clone-6aa3d.appspot.com",
    messagingSenderId: "822070622936",
    appId: "1:822070622936:web:7111b0455466b0e3ca75ad",
    measurementId: "G-LTG0WQTNY9"
};

export default firebase.initializeApp(firebaseConfig);