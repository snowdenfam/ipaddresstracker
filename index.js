
  function getIP(json) {
    document.getElementById("ip-address").innerHTML = " " + json.ip;
}

function getLocation(json) {
  document.getElementById("location").innerHTML = " " + json.location.region;
}



var script = document.createElement("script");
script.src = "https://api.ipify.org?format=jsonp&callback=getIP";
document.head.appendChild(script);


var script = document.createElement("script");
script.src = "https://api.ipify.org?format=jsonp&callback=getLocation";
document.head.appendChild(script);


function showIpAddress() {
  var ipAddress = document.getElementById("txtInputData").value;
  document.getElementById("ip-address").innerHTML = "" + ipAddress;
}

function showLocation() {
  var ipAddress = document.getElementById("txtInputData").value;
  document.getElementById("location").innerHTML = "" + location;
}

