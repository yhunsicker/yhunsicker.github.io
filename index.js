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
const submit = document.querySelector(".submit-button");

// select overlay for the modal to appear and stop background scrolling
function overLay() {
  document.getElementById("overlay").style.display = "block";
  document.documentElement.style.overflow = "hidden";
  document.body.scroll = "no";
}

// select massgov for the modal to appear
function openModal() {
  document.getElementById("massgov").style.display = "block";
}

// adding click for to overlay and massgov functions
modal.addEventListener("click", overLay);
modalOverLay.addEventListener("click", openModal);

// set function of close modal and allow scrolling to continue

// give a variable a password string
const acceptedPassword = "1234";
const pw = document.getElementById("passwordInput");
const resultP = document.querySelector("#result");

// function onSubmit(event) {
//   console.log("event");
// password = document.getElementById("passwordInput").value;

//   if (document.getElementById("pw").value === "1234") {
//   } else {
//     resultText("Access Denied, Please try again");
//   }
//   resultP.innerText = resultText;
// }

function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("massgov").style.display = "none";
  document.documentElement.style.overflow = "scroll";
  document.body.scroll = "yes";
}

// adding click to activate close modal function
if (exit) {
  exit.addEventListener("click", closeModal);
}

if (submit) {
  submit.addEventListener("click", closeModal);
}
