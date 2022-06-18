// particles script
window.onload = function () {
  Particles.init({
    selector: ".background",
    sizeVariations: 6,
    maxParticles: 160,
    speed: 0.15,
    color: ["#A9FBC3", "#9AC4F8", "#E38C96", "#F3D77C"],
    minDistance: 120,
    connectParticles: false,
  });
};
1;

// Lock screen
// When the user "clicks" on Massachusettes State Government, a prompt shows with a message.

const modal = document.getElementById("massgov");
const modalOverLay = document.getElementById("overlay");

function overLay() {
  document.getElementById("overlay").style.display = "block";
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}
massgov.addEventListener("click", overLay);
massgov.addEventListener("click", openModal);

// function off() {
//   document.getElementById("overlay").style.display = "none";
// }
