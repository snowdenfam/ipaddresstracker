
const API_KEY = 'at_yJPEKZlkt1Set90ViGAwCOA8a9VSi';
const IP_API_URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`;


/* define constants that match elements in the DOM, such as submitButton, ip_address, location, timezone, and isp.*/

const button = document.querySelector('.btn');
const ip_address = document.querySelector('.ip-address');
const region = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');


const button = document.querySelector('.btn');
button.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the form from submitting


  // make a GET request to the IP_API_URL
  fetch(`${IP_API_URL}`)
    .then(response => response.json())
    .then(data => {
      // update the elements in the DOM with the data from the API
      ip_address.innerHTML = data.ip;
      location.innerHTML = data.location.region;
      timezone.innerHTML = data.location.timezone;
      isp.innerHTML = data.isp;
    });
});