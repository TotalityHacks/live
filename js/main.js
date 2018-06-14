/*
  * Totality Live
  * Written by Gautam Mittal
  * June 2018
*/

// Request permission for Desktop notifications
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

// Push notification
function pushNotification(title, body) {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification(title, {
      icon: 'https://totalityhacks.com/totality-sun-200.png',
      body: body,
    });

    notification.onclick = function () {
      window.open("https://live.totalityhacks.com");
    };

  }

}

// pushNotification('Dinner Served!', 'Come to the Expo Floor to get some snacks!')
