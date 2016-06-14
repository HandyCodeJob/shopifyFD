// Get vars from chrome storage and return code stings
chrome.browserAction.onClicked.addListener(function(tab) {
  var webhookUrl, notificationSecret, code_string
  chrome.storage.sync.get(['webhookUrl', 'notificationSecret'], function (obj) {
    console.log("vals from storage", obj) 
    var webhookUrl_string = 'var webhookUrl_element = document.getElementById("webhookUrl") || document.createElement("input");' +
                            'webhookUrl_element.setAttribute("type", "hidden");' +
                            'webhookUrl_element.setAttribute("id", "webhookUrl");' +
                            'webhookUrl_element.setAttribute("value","' + obj.webhookUrl + '");' +
                            'document.getElementById("body").appendChild(webhookUrl_element);'
    var notification_string = 'var notificationSecret_element = document.getElementById("notificationSecret") || document.createElement("input");' +
                              'notificationSecret_element.setAttribute("type", "hidden");' +
                              'notificationSecret_element.setAttribute("id", "notificationSecret");' +
                              'notificationSecret_element.setAttribute("value","' + obj.notificationSecret + '");' +
                              'document.getElementById("body").appendChild(notificationSecret_element);'
    code_string = webhookUrl_string + notification_string
    chrome.tabs.executeScript({code: code_string})
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  // Loading deps code strings
  var sha_url = "https://rawgit.com/Caligatio/jsSHA/v2.1.0/src/sha256.js"
  var shopifyFD_url = "https://rawgit.com/HandyCodeJob/shopifyFD/master/shopifyFD.js"
  var sha_string = 'var sha = document.createElement("script");' +
                   'document.createElement("script");' +
                   'sha.type = "text/javascript";' +
                   'sha.src = "' + sha_url + '";' +
                   'document.getElementsByTagName("head")[0].appendChild(sha);'
  var shopifyFD_string = 'var shopifyFD = document.createElement("script");' +
                         'document.createElement("script");' +
                         'shopifyFD.type = "text/javascript";' +
                         'shopifyFD.src = "' + shopifyFD_url + '";' +
                         'document.getElementsByTagName("head")[0].appendChild(shopifyFD);'
  chrome.tabs.executeScript({code: sha_string + shopifyFD_string})
});

