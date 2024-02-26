// Type Js
var typed = new Typed('#element', {
    strings: ['<p><blockquote>Artificial intelligence is<br><b>THE FUTURE,</b><br>and the future is here.</blockquote></p>'],
    typeSpeed: 50,
});


// Header
let navBar = document.querySelector("#nav");
let navUl = document.querySelector("#nav-ul");

navBar.addEventListener("click", () => {

    if (navUl.style.display === "none" || navUl.style.display === "") {
        navUl.style.display = "flex";
        navUl.style.transform = "translateY(570px)";
    } else {

        navUl.style.transform = "translateY(-500px)";
        setTimeout(() => {
            navUl.style.display = "none";
        }, 1000);
    }
});


// Landing Container
let imageIndex = 0;
const imageSources = [
    "./img/robo8.png",
    "./img/robo9.png",
    "./img/robot10.png"
];

function changeImage() {

    const robotImg = document.getElementById("robot");
    robotImg.src = imageSources[imageIndex];
    imageIndex = (imageIndex + 1) % imageSources.length;
}

changeImage();
setInterval(changeImage, 5000);