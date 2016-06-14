// Adapted from https://developer.chrome.com/extensions/storage
//
// Saves options to chrome.storage
function save_options() {
  // Get values from form
  var webhookUrl = document.getElementById('webhookUrl').value;
  var notificationSecret = document.getElementById('notificationSecret').value;
  // Set the vars in sync and return "success message"
  chrome.storage.sync.set({
    webhookUrl: webhookUrl,
    notificationSecret: notificationSecret
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores default values using the preferences stored in chrome.storage.
function restore_options() {
  // Use default value
  chrome.storage.sync.get({
    webhookUrl: 'https://cc1f6cf2.ngrok.io/campaign/webhook/',
    notificationSecret: "See https://bakdrop-staging.myshopify.com/admin/settings/notifications"
  }, function(items) {
    // Set the form values
    document.getElementById('webhookUrl').value = items.webhookUrl;
    document.getElementById('notificationSecret').value = items.notificationSecret;
  });
}

// Add the event listeners
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
