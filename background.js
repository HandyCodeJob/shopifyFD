chrome.browserAction.onClicked.addListener(function(tab) {
  /* 
  No tabs or host permissions needed!
  */
  chrome.tabs.executeScript({
    code: 'var shopifyFD = document.createElement("script");shopifyFD.type = "text/javascript";shopifyFD.src = "https://rawgit.com/HandyCodeJob/shopifyFD/master/shopifyFD.js";document.getElementsByTagName("head")[0].appendChild(shopifyFD);'
  });
});
