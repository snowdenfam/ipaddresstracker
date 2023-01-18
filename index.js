
  function getIP(json) {
    document.getElementById("ip-address").innerHTML = " " + json.ip;
}

var script = document.createElement("script");
script.src = "https://api.ipify.org?format=jsonp&callback=getIP";
document.head.appendChild(script);


function showIpAddress() {
  var originalName = document.getElementById("txtInputData").value;
  document.getElementById("show_name").innerHTML = "Your Name is :" + originalName;
}