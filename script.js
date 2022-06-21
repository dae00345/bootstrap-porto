const vector = document.querySelectorAll(".vector-img");

const btn = document.querySelector(".btn-img");

btn.addEventListener("click", function () {
  for (vect of vector) {
    vect.classList.toggle("show-img");
    vect.classList.toggle("img-thumbnail");
  }
});
// const theme = document.querySelector("#home");
// const btn_theme = document.querySelector(".btn-theme");
// const navbar = document.querySelector(".navbar");

// btn_theme.addEventListener("click", function () {
//   theme.style.backgroundColor = "white";
//   theme.classList.toggle("bg-dark");
//   theme.classList.toggle("bg-danger");
//   navbar.classList.toggle("bg-dark");
//   navbar.classList.toggle("bg-danger");
//   btn_theme.classList.toggle("btn-primary");
//   btn_theme.classList.toggle("btn-secondary");
// });
