// document.getElementById('start-scraping').addEventListener('click', () => {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, {action: 'startScraping'}, function(response) {
//         if (response.success) {
//           document.getElementById('output').textContent = response.data;
//         }
//       });
//     });
//   });
  
document.getElementById('start-scraping').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'startScraping'}, function(response) {
        if (response.success) {
          document.getElementById('output').textContent = response.data;
          document.getElementById('publication').textContent = response.hostname;

            // Send the data to the Flask server
            fetch('http://localhost:5000/scrape', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                text: response.data,
                url: response.hostname
                })
            });
        }
      });
    });
  });
  
  
// fetch('http://localhost:5000/process', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({data: 'some data'})
// }).then(response => response.json())
//   .then(data => console.log(data))
//   .catch((error) => {
//     console.error('Error:', error);
// });
