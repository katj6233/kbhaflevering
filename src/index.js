const darkMode = document.querySelector("#darkmode");
const lightMode = document.querySelector("#lightmode");
const main = document.querySelector("html");

darkMode.addEventListener("click", darkToggle);

lightMode.addEventListener("click", lightToggle);

function darkToggle() {
  console.log("hej");
  main.classList.add("dark");
}

function lightToggle() {
  console.log("hej");
  main.classList.remove("dark");
}
