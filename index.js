// particles script
// let particlesInstance;

// window.onload = function () {
//   particlesInstance = Particles.init({
//     selector: ".background",
//     sizeVariations: 6,
//     maxParticles: 160,
//     speed: 0.15,
//     color: ["#A9FBC3", "#9AC4F8", "#E38C96", "#F3D77C"],
//     minDistance: 120,
//     connectParticles: false,
//   });
// };

// Lock screen
// When the user "clicks" on Massachusettes State Government, a modal shows with a message & password.

// const modal = document.getElementById("massgov");
// const modalOverLay = document.getElementById("overlay");
// const exit = document.querySelector(".close");
// const submit = document.querySelector(".submit-button");

// select overlay for the modal to appear and stop background scrolling
// function overLay() {
//   document.getElementById("overlay").style.display = "block";
//   document.documentElement.style.overflow = "hidden";
//   document.body.scroll = "no";
// }

// select massgov for the modal to appear
// function openModal() {
//   document.getElementById("massgov").style.display = "block";
// }

// adding click for to overlay and massgov functions
// if (modal) {
//   modal.addEventListener("click", overLay);
// }
// if (modalOverLay) {
//   modalOverLay.addEventListener("click", openModal);
// }

// set function of close modal and allow scrolling to continue

// give a variable a password string
// const acceptedPassword = "puppy-jam-sesh";
// const pw = document.getElementById("passwordInput");
// const resultP = document.querySelector("#result");

// when user presses submit they have either of two things happen. If they enter the wrong info, they get a notification of "access denied". If they add password is correct, user is able to press submit to disable modal/overlay.

// function onSubmit(event) {
//   console.log("event");
//   password = document.getElementById("passwordInput").value;

//   if (document.getElementById("resultPw").value === "puppy-jam-sesh") {
//     closeModal();
//   } else {
//     resultP.innerText = "I'm sorry the password is, please try again.";
//     result.style.color = "red";
//     document.querySelector(".form-box").style.borderColor = "red";
//     // console.log();
//   }
// }

// function closeModal() {
//   document.getElementById("overlay").style.display = "none";
//   document.getElementById("massgov").style.display = "none";
//   document.documentElement.style.overflow = "scroll";
//   document.body.scroll = "yes";
// }

// adding click to activate close modal function
// if (exit) {
//   exit.addEventListener("click", closeModal);
// }

//darkmode theme script//
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  const storageKey = "theme";
  const prefersDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const applyTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);

    // 1. Remove aria-pressed (since the label itself changes)
    toggle.removeAttribute("aria-pressed");

    // 2. Set the text to the OPPOSITE of the current theme
    // If it's dark, show "Light mode". If it's light, show "Dark mode".
    const isDark = theme === "dark";
    toggle.textContent = isDark ? "Light mode" : "Dark mode";

    // 3. Update aria-label for clarity (Optional)
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
  };

  const savedTheme = localStorage.getItem(storageKey);
  const initialTheme = savedTheme || (prefersDark() ? "dark" : "light");
  applyTheme(initialTheme);

  toggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const particlesToggle = document.querySelector(".particles-toggle");
//   if (!particlesToggle) {
//     return;
//   }

//   const applyParticlesState = (isPaused) => {
//     particlesToggle.setAttribute("aria-pressed", String(isPaused));
//     particlesToggle.textContent = isPaused ? "Play" : "Pause";
//     particlesToggle.setAttribute(
//       "aria-label",
//       isPaused ? "Play animation" : "Pause animation",
//     );
//   };

//   applyParticlesState(false);

//   particlesToggle.addEventListener("click", () => {
//     if (!particlesInstance) {
//       return;
//     }

//     const isPaused = particlesToggle.getAttribute("aria-pressed") === "true";

//     if (isPaused) {
//       particlesInstance.resumeAnimation();
//       applyParticlesState(false);
//     } else {
//       particlesInstance.pauseAnimation();
//       applyParticlesState(true);
//     }
//   });
// });

// // Get the input field
// let enter = document.getElementByClassName("submit-button");

// // Execute a function when the user presses a key on the keyboard
// input.addEventListener("keypress", function (event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementByClassName("submit-button").click();
//   }
// });

// Scroll fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".project-card").forEach((el) => {
    el.classList.add("fade-in-up");
    observer.observe(el);
  });

  document.querySelectorAll(".speaking-card").forEach((el, i) => {
    el.classList.add("fade-in-up");
    el.style.transitionDelay = `${i * 0.07}s`;
    observer.observe(el);
  });
});

// Toggle project image on tap/click for touch devices
document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".project-thumbnail-wrapper");
  const isSmallScreen = () => window.matchMedia("(max-width: 780px)").matches;

  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", (event) => {
      if (!isSmallScreen()) {
        return;
      }

      const card = wrapper.closest(".project-card");
      if (!card) {
        return;
      }

      event.preventDefault();
      card.classList.toggle("is-toggled");
    });
  });

  // Scroll fade-in (.fade-in and .reveal)
  const fadeEls = document.querySelectorAll(".fade-in, .reveal");
  if (fadeEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    fadeEls.forEach((el) => observer.observe(el));
  }
});
