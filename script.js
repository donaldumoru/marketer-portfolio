// let stylesheet = document.getElementById("stylesheet");
// let toggleButton = document.getElementById("toggle-button");
// let showMode = document.getElementById("show-mode");

// // Function to set the initial mode based on the user's current time
// function setInitialModeBasedOnTime() {
//     const currentTime = new Date().getHours();

//     if (currentTime >= 17 || currentTime < 8) {
//         stylesheet.setAttribute("href", "css/style.css"); // Set initial mode to dark mode from 17:00 to 8:00
//         showMode.textContent = "You are currently viewing my website in dark mode";
//         toggleButton.checked = false;
//     } else {
//         stylesheet.setAttribute("href", "css/lightmode.css"); // Set mode to light mode from 8:00 to 16:59
//         showMode.textContent = "You are currently viewing my website in light mode";
//         toggleButton.checked = true; // Set the toggle button to the "on" state
//     }
// }

// setInitialModeBasedOnTime();

// // Function to set the mode based on the user's preference in storage
// function setModeFromStorage() {
//     const mode = localStorage.getItem("preferredMode");

//     if (mode === "dark") {
//         stylesheet.setAttribute("href", "css/style.css");
//         showMode.textContent = "You are currently viewing my website in dark mode";
//         toggleButton.checked = false;
//     } else {
//         stylesheet.setAttribute("href", "css/lightmode.css");
//         showMode.textContent = "You are currently viewing my website in light mode";
//         toggleButton.checked = true;
//     }
// }


// setModeFromStorage();


// toggleButton.addEventListener("change", switcher);

// function switcher() {
//     if (toggleButton.checked) {
//         localStorage.setItem("preferredMode", "light");
//         stylesheet.setAttribute("href", "css/lightmode.css");
//         showMode.textContent = "You are currently viewing my website in light mode";
//     } else {
//         localStorage.setItem("preferredMode", "dark");
//         stylesheet.setAttribute("href", "css/style.css");
//         showMode.textContent = "You are currently viewing my website in dark mode";
//     }

//     console.log(stylesheet);
// }

// window.onload = function () {

//     if (document.body.id === "index-page") {
//         localStorage.clear();
//         setInitialModeBasedOnTime();
//     };

//     if (document.body.id === "saved-mode") {
//         // Check if the preferredMode is not already set in localStorage
//         if (!localStorage.getItem("preferredMode")) {
//             setInitialModeBasedOnTime();
//         }
//     }
// };
