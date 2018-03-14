function getStylesheet() {
  var now = new Date();
  var hours = now.getHours();
  //ochtend 6-10
      if (hours >= 6 && hours < 10) {
       document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
      }
  //overdag 10-12
      else if (hours >= 10 && hours < 12) {
       document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
      }
  //middag 12-17
      else if (hours >= 12 && hours < 17) {
       document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
      }
  //namiddag 17-20
      else if (hours >= 17 && hours < 20) {
       document.write("<link rel='stylesheet' href='evening.css' type='text/css'>");
      }
  //avond 20-24
      else if (hours >= 20 && hours < 24) {
       document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
      }
  //avond 24-6
      else if (hours >= 24 && hours < 6) {
        document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
          }
      else {
        document.write("<link rel='stylesheet' href='challenge2.css' type='text/css'>");
       }
}

getStylesheet();


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
