
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCZR-6vD2eNFovUIGDxkbt0roBsGjE4SeM",
//     authDomain: "dinsey-project.firebaseapp.com",
//     projectId: "dinsey-project",
//     storageBucket: "dinsey-project.appspot.com",
//     messagingSenderId: "855131288979",
//     appId: "1:855131288979:web:6508586b0af7dac2ad2466",
//     measurementId: "G-3500Y6GT6S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const db = app.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage()


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import auth related functions
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Storage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZR-6vD2eNFovUIGDxkbt0roBsGjE4SeM",
    authDomain: "dinsey-project.firebaseapp.com",
    projectId: "dinsey-project",
    storageBucket: "dinsey-project.appspot.com",
    messagingSenderId: "855131288979",
    appId: "1:855131288979:web:6508586b0af7dac2ad2466",
    measurementId: "G-3500Y6GT6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize auth
const provider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider
const storage = getStorage(app); // Initialize Storage

export { auth, provider, storage };
export default db;