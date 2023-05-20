var body = document.body;
var textContent = body.innerText;
console.log(textContent);

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.action == 'startScraping') {
//         var body = document.body;
//         var textContent = body.innerText;
//         sendResponse({data: textContent, success: true});
//         }
//     }
// );

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == 'startScraping') {
        var body = document.body;
        var textContent = body.innerText;
        
        var url = window.location.href;
        var hostname = new URL(url).hostname;
        
        sendResponse({data: textContent, hostname: hostname, success: true});
      }
    }
  );
  
// chrome.runtime.onMessage.addListener(
//     (request, sender, sendResponse) => {
//       if (request.action === 'startScraping') {
//         // Scrape the page and send a response
//         const body = document.body;
//         const textContent = body.innerText;
//         const url = window.location.href;
//         const hostname = new URL(url).hostname;
  
//         chrome.runtime.sendMessage({data: textContent, hostname: hostname, success: true});
//       }
//     }
//   );
  