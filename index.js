
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

const API_KEY = 'at_cu4hfDxm1O4NN25Gez1wGkXacpny2';
const IP_API_URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`;


/* define constants that match elements in the DOM, such as button, ip_address, region, timezone, and isp.*/
const button = document.querySelector('.submitButtonIMG');
const ip_address = document.querySelector('.ip-address');
const region = document.querySelector('.location');
const timezone = document.querySelector('.header__ip-timezone');
const isp = document.querySelector('.header__ip-isp');

