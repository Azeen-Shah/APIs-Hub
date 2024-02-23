const accessKey = "ODq-F69aV_q9QZMMTSpL3qfvRqm76WnCQ22Mwx6UZAQ";

const formEl = document.querySelector("form");
const inputEL = document.getElementById("search-input");
const searchResult = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;



async function searchImage() {
    inputData = inputEL.value;
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(URL);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result"); // Fixed class name here

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResult.append(imageWrapper); // Fixed this line
    });

    page++;

    if (page > 1) {
        showMore.style.display = "block";
    }
}



formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});


showMore.addEventListener("click", () => {
    searchImage();
});