// var body = document.body;
// var textContent = body.innerText;
// console.log(textContent);

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if (request.action == 'startScraping') {
//         var body = document.body;
//         var textContent = body.innerText;
        
//         var url = window.location.href;
//         var hostname = new URL(url).hostname;
        
//         sendResponse({data: textContent, hostname: hostname, success: true});
//       }
//     }
//   );
  
chrome.runtime.sendMessage({command: "signup", email: "", password: ""}, function(response) {
    console.log(response.result);
});