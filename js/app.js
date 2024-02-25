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



let imageIndex = 0;


const imageSources = [
    "./img/robo8.png",
    "./img/robo9.png"
];


function changeImage() {

    const robotImg = document.getElementById("robot");


    robotImg.src = imageSources[imageIndex];


    imageIndex = (imageIndex + 1) % imageSources.length;
}


changeImage();


setInterval(changeImage, 5000);