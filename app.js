const map=L.map('map').setView([22.9074872, 79.07306671],2);
const tileUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution='&copy; <a href="https://www.iitr.ac.in/">IIT Roorkee</a>❤️';
const tileLayer = L.tileLayer(tileUrl, {  attribution });
tileLayer.addTo(map);

