// Import necessary methods
// import { signup, login, signout } from './authentication.js';

// Get HTML elements
const signupButton = document.getElementById("btnSignUp");
const loginButton = document.getElementById("btnLogin");
const emailInput = document.getElementById("txtEmail");
const passwordInput = document.getElementById("txtPassword");

loginButton.addEventListener('click', function() {
  var email = document.getElementById('txtEmail').value;
  var password = document.getElementById('txtPassword').value;

  chrome.runtime.sendMessage({
      command: "login",
      email: email,
      password: password
  }, function(response) {
      if(response.result === 'success') {
          // Handle successful login
      } else {
          // Handle login failure
      }
  });
});

signupButton.addEventListener('click', function() {
  var email = document.getElementById('txtEmail').value;
  var password = document.getElementById('txtPassword').value;

  chrome.runtime.sendMessage({
      command: "signup",
      email: email,
      password: password
  }, (response) => {
      if(response.result === 'success') {
          // Handle successful sign up
          console.log("User successfully signed up.");
      } else {
          // Handle sign up failure
          console.log("User sign up failed.");
      }
  });
});

  
// document.getElementById('start-scraping').addEventListener('click', () => {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, {action: 'startScraping'}, function(response) {
//         if (response.success) {
//           document.getElementById('output').textContent = response.data;
//           document.getElementById('publication').textContent = response.hostname;

//             // Send the data to the Flask server
//             fetch('http://localhost:5000/scrape', {
//                 method: 'POST',
//                 headers: {
//                 'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                 text: response.data,
//                 url: response.hostname
//                 })
//             });
//         }
//       });
//     });
//   });
  
