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

// when user presses submit they have either of two things happen. If they enter the wrong info, they get a notification of "access denied". If they add password is correct, user is able to press submit to disable modal/overlay.

function onSubmit(event) {
  console.log("event");
  password = document.getElementById("passwordInput").value;

  if (document.getElementById("resultPw").value === "1234") {
    closeModal();
  } else {
    resultP.innerText = "Access Denied, Please try again";
    console.log();
  }
}

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

// if (submit) {
//
// }
