try {
    self.importScripts('firebase/firebase-app.js', 'firebase/firebase-analytics.js', 'firebase/firebase-auth.js');
    // var firebaseConfig = {
    //     apiKey: "AIzaSyC-9tPz8Zc9KzYtK5zE2qZk0d6O5y5Qn5o",
    //     authDomain: "browserextensiondemo.firebaseapp.com",
    //     databaseURL: "https://browserextensiondemo.firebaseio.com",
    //     projectId: "browserextensiondemo",
    //     storageBucket: "browserextensiondemo.appspot.com",
    //     messagingSenderId: "1005694304339",
    //     appId: "1:1005694304339:web:4e0b3e5c4e8a0c0e"
    // };
    var firebaseConfig = {
        apiKey: "AIzaSyDSE-CS0_5LCdzpsYm1LCzPNiBZcvi2nbQ",
        authDomain: "factorial-c73p.firebaseapp.com",
        databaseURL: "https://factorial-c73p-default-rtdb.firebaseio.com",
        projectId: "factorial-c73p",
        storageBucket: "factorial-c73p.appspot.com",
        messagingSenderId: "284541340670",
        appId: "1:284541340670:web:be8b6a79488378a59a0eaf",
        measurementId: "G-NTL2961BZ2"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase is initialized");

      chrome.runtime.onMessage.addListener((msg, sender, resp) => {
        if (msg.command == 'login') {
            console.log("Attempting to sign in user with email: " + msg.email + " and password: " + msg.password + ".");
            firebase.auth().signInWithEmailAndPassword(msg.email, msg.password).then(function() {
                console.log("User successfully signed in.");
                resp({result: "success"});
            }).catch(function(error) {
                console.log("User sign in failed.");
                resp({result: "failure"});
            });
            return true;
        }
        if (msg.command == 'signup') {
            console.log("Attempting to create user with email: " + msg.email + " and password: " + msg.password + ".");
            firebase.auth().createUserWithEmailAndPassword(msg.email, msg.password).then(function() {
                console.log("User successfully created.");
                resp({result: "success"});
            }).catch(function(error) {
                console.log("User creation failed.");
                resp({result: "failure"});
            });
            return true;
        }
      });

} catch(e) {
    console.log("Firebase is not initialized due to error: " + e + ".");
}