console.log("background.js is running");

// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

// The user clicked the button!
function buttonClicked(tab) {
    // 'tab' is an object with information about the current open tab
    // This will work if popup is disabled else it is overrided by default by the popup.html
    console.log("Clicked");
    console.log(tab);
}
// $.ajax({
//     url: "http://localhost:3000/save-products",
//     data: { test: "test data" },
//     type: 'POST',
//     success: function (response) {
//         console.log('response:', response);
//     },
//     error: function (response) {
//         console.log('response:', response);
//     }
// });

function handleMessage(request, sender, sendResponse) {
    console.log("Message from the content script:");
    console.log(request);
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/save-products",
        data: request,
        success: function (response) {
            console.log("response:", response);
        },
        error: function (response) {
            console.log("response:", response);
        },
    });
    sendResponse({ response: "Response from background script" });
}

chrome.runtime.onMessage.addListener(handleMessage);