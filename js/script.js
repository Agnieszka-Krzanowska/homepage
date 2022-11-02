{
    const welcome = () => {
        console.log("Hello everyone! :D");
    };

    welcome();

    const hideImage = () => {
        const image = document.querySelector(".js-image");
        const activityName = document.querySelector(".js-button--activityName");

        image.classList.toggle("hide");
        activityName.innerText = image.classList.contains("hide") ? "pokaż" : "usuń";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", hideImage);
    };

    init();

}