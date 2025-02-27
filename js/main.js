let btn = document.querySelector(".hamburger input");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  ul.classList.toggle("open");
});
