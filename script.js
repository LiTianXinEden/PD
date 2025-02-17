
document.querySelectorAll('.card-wrap').forEach(cardWrap => {
  const cardBg = cardWrap.querySelector('.card-bg');
  // Set background image from data attribute
  const bgImage = cardWrap.getAttribute('data-image');
  cardBg.style.backgroundImage = `url(${bgImage})`;
  // Mouse movement effect
  cardWrap.addEventListener('mousemove', (e) => {
      const rect = cardWrap.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to card
      const y = e.clientY - rect.top;  // Mouse Y relative to card
      const moveX = (x / rect.width - 0.5) * 30; // Increased movement intensity
      const moveY = (y / rect.height - 0.5) * 30;
      cardBg.style.transform = `scale(1.15) translateX(${moveX}px) translateY(${moveY}px)`;
  });
  cardWrap.addEventListener('mouseleave', () => {
      cardBg.style.transform = `scale(1) translateX(0) translateY(0)`;
  });
});
//===============================================
// when u scroll and then the content comes in
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));
//===============================================
// loading modal
document.addEventListener('DOMContentLoaded', () => {
  // Load the modal content from modals.html
  fetch('modals.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to load modals');
          }
          return response.text();
      })
      .then(data => {
          // Inject the modal HTML into the placeholder
          document.getElementById('modals-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading modals:', error));
});

//=============================================
let c = init("canvas"),
w = (canvas.width = window.innerWidth),
h = (canvas.height = window.innerHeight);
//initiation
class firefly{
constructor(){
  this.x = Math.random()*w;
  this.y = Math.random()*h;
  this.s = Math.random()*2;
  this.ang = Math.random()*2*Math.PI;
  this.v = this.s*this.s/4;
}
move(){
  this.x += this.v*Math.cos(this.ang);
  this.y += this.v*Math.sin(this.ang);
  this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
}
show(){
  c.beginPath();
  c.arc(this.x,this.y,this.s,0,2*Math.PI);
  c.fillStyle="#fddba3";
  c.fill();
}
}
let f = [];
function draw() {
if(f.length < 100){
  for(let j = 0; j < 10; j++){
   f.push(new firefly());
}
   }
//animation
for(let i = 0; i < f.length; i++){
  f[i].move();
  f[i].show();
  if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
     f.splice(i,1);
     }
}
}
let mouse = {};
let last_mouse = {};
canvas.addEventListener(
"mousemove",
function(e) {
  last_mouse.x = mouse.x;
  last_mouse.y = mouse.y;
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
},
false
);
function init(elemid) {
let canvas = document.getElementById(elemid),
  c = canvas.getContext("2d"),
  w = (canvas.width = window.innerWidth),
  h = (canvas.height = window.innerHeight);
c.fillStyle = "rgba(30,30,30,1)";
c.fillRect(0, 0, w, h);
return c;
}
window.requestAnimFrame = (function() {
return (
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback);
  }
);
});
function loop() {
window.requestAnimFrame(loop);
c.clearRect(0, 0, w, h);
draw();
}
window.addEventListener("resize", function() {
(w = canvas.width = window.innerWidth),
(h = canvas.height = window.innerHeight);
loop();
});
loop();
setInterval(loop, 1000 / 60);
