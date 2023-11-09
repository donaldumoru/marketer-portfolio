// // DARK MODE BUTTON

// let stylesheet = document.getElementById("stylesheet");
// let toggleButton = document.getElementById("toggle-button");
// let showMode = document.getElementById("show-mode");


// const currentTime = new Date().getHours();

// console.log(currentTime)

// let counter = 0; // Initialize the counter

// if (currentTime >= 17 || currentTime < 8) {
//     stylesheet.setAttribute("href", "css/style.css"); // Set initial state to dark mode for nighttime
//     showMode.textContent = "You are currently viewing my website in dark mode";
// } else {
//     stylesheet.setAttribute("href", "css/lightmode.css"); // Set initial state to light mode for daytime
//     showMode.textContent = "You are currently viewing my website in light mode";

//     toggleButton.checked = true; // Set the toggle button to the "on" state
// }

// toggleButton.addEventListener("change", switcher);

// function switcher() {
//     if (toggleButton.checked) {

//         stylesheet.setAttribute("href", "css/lightmode.css");
//         showMode.textContent = "You are currently viewing my website in light mode"
//     } else {

//         stylesheet.setAttribute("href", "css/style.css");
//         showMode.textContent = "You are currently viewing my website in dark mode"
//     }

// }



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
//     const mode = sessionStorage.getItem("preferredMode");

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
//         sessionStorage.setItem("preferredMode", "light");
//         stylesheet.setAttribute("href", "css/lightmode.css");
//         showMode.textContent = "You are currently viewing my website in light mode";
//     } else {
//         sessionStorage.setItem("preferredMode", "dark");
//         stylesheet.setAttribute("href", "css/style.css");
//         showMode.textContent = "You are currently viewing my website in dark mode";
//     }

//     console.log(stylesheet);
// }

// window.onload = function () {

//     if (document.body.id === "index-page") {
//         sessionStorage.clear();
//         setInitialModeBasedOnTime();
//     };

//     if (document.body.id === "saved-mode") {
//         // Check if the preferredMode is not already set in localStorage
//         if (!sessionStorage.getItem("preferredMode")) {
//             setInitialModeBasedOnTime();
//         }
//     }
// }


let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//     section.forEach((i) => {
//         let top = window.scrollY;
//         let offset = i.offsetTop - 150;
//         let height = i.offsetHeight;
//         let id = i.getAttribute("id");

//         if (top >= offset && top < offset + height) {
//             menu.forEach((link) => {
//                 link.classList.remove("active");
//                 document
//                     .querySelector("header nav a[href*=" + id + "]")
//                     .classList.add("active");
//             });
//         }
//     });
// };

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
