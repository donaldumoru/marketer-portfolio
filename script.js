// DARK MODE BUTTON

let stylesheet = document.getElementById("stylesheet");
let toggleButton = document.getElementById("toggle-button");
let showMode = document.getElementById("show-mode");

toggleButton.addEventListener("change", switcher);

function switcher() {
    if (toggleButton.checked) {

        stylesheet.setAttribute("href", "css/lightmode.css");
        showMode.textContent = "You are currently viewing my website in light mode"
    } else {

        stylesheet.setAttribute("href", "css/style.css");
        showMode.textContent = "You are currently viewing my website in dark mode"
    }

}
