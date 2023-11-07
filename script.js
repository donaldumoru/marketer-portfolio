// DARK MODE BUTTON

let stylesheet = document.getElementById("stylesheet");
let switchButton = document.getElementById("switch");

counter = 0;

switchButton.addEventListener("click", switcher)

function switcher() {

    const layouts = ["css/style.css", "css/darkmode.css"];

    counter++

    stylesheet.setAttribute("href", layouts[counter]);

    if (counter == 1) { counter = 0 - 1; };

    if (layouts[counter] === "css/style.css") {
        switchButton.textContent = "Dark Mode";
    } else {
        switchButton.textContent = "Light Mode";
    }

}
