// DARK MODE BUTTON

let stylesheet = document.getElementById("stylesheet");
let toggleButton = document.getElementById("toggle-button");
let showMode = document.getElementById("show-mode");


const currentTime = new Date().getHours();

console.log(currentTime)

let counter = 0; // Initialize the counter

if (currentTime >= 17 || currentTime < 8) {
    stylesheet.setAttribute("href", "css/style.css"); // Set initial state to dark mode for nighttime
    showMode.textContent = "You are currently viewing my website in dark mode";
} else {
    stylesheet.setAttribute("href", "css/lightmode.css"); // Set initial state to light mode for daytime
    showMode.textContent = "You are currently viewing my website in light mode";

    toggleButton.checked = true; // Set the toggle button to the "on" state
}

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

