

function getStylesheet() {
      var currentTime = new Date().getHours();
      if (1 <= currentTime&&currentTime < 6) {
       document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
      }
      if (6 <= currentTime&&currentTime < 12) {
       document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
      }
      if (12 <= currentTime&&currentTime < 18) {
       document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
      }
      if (18 <= currentTime&&currentTime < 24) {
       document.write("<link rel='stylesheet' href='evening.css' type='text/css'>");
      }
      if (24 <= currentTime&&currentTime <= 24) {
       document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
      }

}

getStylesheet();

window.setInterval("checkForRefresh()", 60000);

function checkForRefresh() {
   var now = new Date();
   if (now.getHours() == 10 && now.getMinutes() == 0) {
      window.location.reload(false);
   }
   if (now.getHours() == 12 && now.getMinutes() == 0) {
      window.location.reload(false);
   }
   if (now.getHours() == 17 && now.getMinutes() == 0) {
      window.location.reload(false);
   }
   if (now.getHours() == 20 && now.getMinutes() == 0) {
      window.location.reload(false);
   }
   if (now.getHours() == 6 && now.getMinutes() == 0) {
      window.location.reload(false);
   }
   if (now.getHours() == 14 && now.getMinutes() == 36) {
      window.location.reload(false);
      document.alert
   }
}

getStylesheet();

//klok
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
