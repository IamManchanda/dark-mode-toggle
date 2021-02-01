const checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;

function handleToggle() {
  if (checkbox.checked) {
    htmlElement.classList.toggle("transition");
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    htmlElement.classList.toggle("transition");
    htmlElement.setAttribute("data-theme", "light");
  }
}

checkbox.addEventListener("click", handleToggle);
