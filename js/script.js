console.log("Hello everyone! :D");

let button = document.querySelector(".js-button");
let image = document.querySelector(".js-image");
let activityName = document.querySelector(".js-button--activityName");

button.addEventListener("click", () => {
    image.classList.toggle("hide");
    activityName.innerText = image.classList.contains("hide") ? "pokaż" : "usuń";

})