
  function getIP(json) {
    document.getElementById("ip-address").innerHTML = " " + json.ip;
}

var script = document.createElement("script");
script.src = "https://api.ipify.org?format=jsonp&callback=getIP";
document.head.appendChild(script);