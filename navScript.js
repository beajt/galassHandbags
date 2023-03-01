const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBar.classList.toggle("active");
});

document.querySelectorAll("navLink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBar.classList.remove("active");
  })
);
