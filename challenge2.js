

function myFunction() {
    var hour = new Date().getHours()
//morning
    if (hour >= 6 && hour < 12 ) {
        document.getElementById("demo").innerHTML = "Morning";
        document.getElementById("txt").style.color = "yellow";
    }
//day
    else if (hour >= 12 && hour < 17 ) {
    	document.getElementById("demo").innerHTML = "Day";
      document.getElementById("txt").style.color = "blue";
    }
//evening
    else if (hour >= 17 && hour < 22 ) {
    	document.getElementById("demo").innerHTML = "Evening";
      document.getElementById("txt").style.color = "orange";
    }
//night
    else if (hour >= 22 && hour <= 24 ) {
        document.getElementById("demo").innerHTML = "Night";
        document.getElementById("txt").style.color = "white";
    }
    else if (hour >= 0 && hour < 6 ) {
        document.getElementById("demo").innerHTML = "Night";
        document.getElementById("txt").style.color = "white";
    }
//when I fck up
    else {
      document.getElementById("demo").innerHTML = "Gaat nie goed vriend";
      document.getElementById("txt").style.color = "red";
    }
}

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
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
