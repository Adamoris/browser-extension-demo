// Import necessary methods
// import { signup, login, signout } from './authentication.js';

// Get HTML elements
const logoutButton = document.getElementById("btnLogout");
// const loginButton = document.getElementById("btnLogin");
// const emailInput = document.getElementById("txtEmail");
// const passwordInput = document.getElementById("txtPassword");

logoutButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({
        command: "signout"
    }, function(response) {
        if(response.result === 'success') {
            // Handle successful logout
            window.location.href = "popup.html";
        } else {
            // Handle logout failure
        }
    });
});

// loginButton.addEventListener('click', function() {
//   var email = document.getElementById('txtEmail').value;
//   var password = document.getElementById('txtPassword').value;

//   chrome.runtime.sendMessage({
//       command: "login",
//       email: email,
//       password: password
//   }, function(response) {
//       if(response.result === 'success') {
//           // Handle successful login
//           window.location.href = "home.html";
//       } else {
//           // Handle login failure
//       }
//   });
// });

// signupButton.addEventListener('click', function() {
//   var email = document.getElementById('txtEmail').value;
//   var password = document.getElementById('txtPassword').value;

//   chrome.runtime.sendMessage({
//       command: "signup",
//       email: email,
//       password: password
//   }, (response) => {
//       if(response.result === 'success') {
//           // Handle successful sign up
//           console.log("User successfully signed up.");
//       } else {
//           // Handle sign up failure
//           console.log("User sign up failed.");
//       }
//   });
// });