const vector = document.querySelectorAll(".vector-img");

const btn = document.querySelector(".btn-img");

// function set opacity 0 gallery image
function galleryImgOpacity() {
  for (vect of vector) {
    vect.classList.toggle("show-img");
    vect.classList.toggle("img-thumbnail");
  }
}
// function set opacity 1 gallery image
function galleryImgOpacity1() {
  for (vect of vector) {
    vect.classList.add("show-img");
    vect.classList.add("img-thumbnail");
  }
}

btn.addEventListener("click", function () {
  galleryImgOpacity();
});

// THEME VAR
const theme = document.querySelector("#home");
const lightTheme = document.querySelector(".light-theme");
const darkTheme = document.querySelector(".dark-theme");
const navbar = document.querySelector(".navbar");
const text = document.querySelector(".text-light");
const wavesColor = document.querySelectorAll(".waves-img");
const firstWavesColor = document.querySelector(".first-waves-img");
const footerColor = document.querySelector(".footer-container");
const footerText = document.querySelector(".footer-text");

// lightTheme function
function lightThemeChange() {
  theme.classList.replace("bg-dark", "bg-light");
  navbar.classList.replace("bg-dark", "bg-primary");
  text.classList.replace("text-light", "text-dark");
  for (waves of wavesColor) {
    // waves[0].setAttribute("fill", "#ffff");
    waves.setAttribute("fill", "#0d6efd");
  }
  firstWavesColor.setAttribute("fill", "#f8f9fa");
  footerColor.classList.replace("bg-white", "bg-primary");
  footerText.style.color = "white";
  galleryImgOpacity1();
}

function darkThemeChange() {
  theme.classList.replace("bg-light", "bg-dark");
  navbar.classList.replace("bg-primary", "bg-dark");
  text.classList.replace("text-dark", "text-light");
  for (waves of wavesColor) {
    // waves[0].setAttribute("fill", "#ffff");
    waves.setAttribute("fill", "#fff");
  }
  firstWavesColor.setAttribute("fill", "#212529");
  footerColor.classList.replace("bg-primary", "bg-white");
  galleryImgOpacity();
}

lightTheme.addEventListener("click", function () {
  lightThemeChange();
});

darkTheme.addEventListener("click", function () {
  darkThemeChange();
});
