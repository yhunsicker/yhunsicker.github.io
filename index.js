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
// When the user "clicks" on Massachusettes State Government, a modal shows with a message & password.

const modal = document.getElementById("massgov");
const modalOverLay = document.getElementById("overlay");
const exit = document.querySelector(".close");

// select overlay for the modal to appear
function overLay() {
  document.getElementById("overlay").style.display = "block";
}

// select massgov for the modal to appear
function openModal() {
  document.getElementById("massgov").style.display = "block";
}

// adding click for to overlay and massgov functions
modal.addEventListener("click", overLay);
modalOverLay.addEventListener("click", openModal);

// set function of close modal
function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("massgov").style.display = "none";
}

// adding click to activate close modal function
if (exit) {
  exit.addEventListener("click", closeModal);
}
