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

reveal();




function revealBox() {
    var revealBox = document.querySelectorAll(".revealss");

    for (var i = 0; i < revealBox.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealBox[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealBox[i].classList.add("active");
        } else {
            revealBox[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealBox);

revealBox();


function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}