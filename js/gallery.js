const images = [
  "images/gallery1.jpg",
  "images/gallery2.jpg",
  "images/gallery3.jpg"
];
let index = 0;
const container = document.getElementById('galleryContainer');
const img = document.createElement('img');
img.src = images[index];
container.appendChild(img);
setInterval(() => {
  index = (index + 1) % images.length;
  img.src = images[index];
}, 4000);
