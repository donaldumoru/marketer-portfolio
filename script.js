// DARK MODE BUTTON

let stylesheet = document.getElementById("stylesheet");
let toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("change", switcher);

function switcher() {
    if (toggleButton.checked) {
        // Switch to dark mode
        stylesheet.setAttribute("href", "css/lightmode.css");
    } else {
        // Switch to light mode
        stylesheet.setAttribute("href", "css/style.css");

    }

}

