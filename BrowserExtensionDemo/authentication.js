// // Import Firebase
// import * as firebase from "firebase/app";
// import "firebase/auth";

// // Initialize Firebase
// const app = firebase.initializeApp({
//   apiKey: "AIzaSyDSE-CS0_5LCdzpsYm1LCzPNiBZcvi2nbQ",
//   authDomain: "factorial-c73p.firebaseapp.com",
//   databaseURL: "https://factorial-c73p-default-rtdb.firebaseio.com",
//   projectId: "factorial-c73p",
//   storageBucket: "factorial-c73p.appspot.com",
//   messagingSenderId: "284541340670",
//   appId: "1:284541340670:web:be8b6a79488378a59a0eaf",
//   measurementId: "G-NTL2961BZ2"
// });

// // Make auth and firestore references
// const auth = firebase.auth();

// // Sign Up Function
// const signup = (email, password) => {
//     console.log("Attempting to create user with email: " + email + " and password: " + password + ".");
//   return auth.createUserWithEmailAndPassword(email, password);
// }

// // Sign In Function
// const login = (email, password) => {
//     console.log("Attempting to sign in user with email: " + email + " and password: " + password + ".");
//   return auth.signInWithEmailAndPassword(email, password);
// }

// // Sign Out Function
// const signout = () => {
//   return auth.signOut();
// }

// // Export the necessary methods
// export {
//   signup,
//   login,
//   signout
// };
