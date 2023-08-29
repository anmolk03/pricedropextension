console.log("content.js is running")

// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
    if (request.message === "user clicked!") {
        // Do something!
        console.log("Got from background.js");
    }
}