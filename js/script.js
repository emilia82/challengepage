    const welcome = () => {
        console.log("Cześć Wszystkim! Wpadajcie na wyzwanie, kto NIE wpada ten PARÓWKA!! Ten kto wpada, ten wygrywa");
    
}
{
    const newBackgroundColour = () => {
        const container = document.querySelector(".container");
        container.classList.toggle("newBackgroundColour");
    };

    const hideTable = () => {
        const table = document.querySelector(".js-table");
        const hideTableButton = document.querySelector(".js-hideTableButton");

        table.classList.toggle("hidenTable");
        if (table.classList.contains("hidenTable")) {
            hideTableButton.innerText = "Pokaż kalendarz treningów";
        } else {
            hideTableButton.innerText = "Ukryj kalendarz treningów";
        }
    };

    const init = () => {
        const changeBackgroundColourButton = document.querySelector(".js-changeBackgroundColourButton");
        const hideTableButton = document.querySelector(".js-hideTableButton");

        changeBackgroundColourButton.addEventListener("click", newBackgroundColour);
        hideTableButton.addEventListener("click", hideTable);
    };

    const myImage = document.querySelector("img");
    myImage.onclick = function () {

        let mySrc = myImage.getAttribute("src");
        if (mySrc === "images/Emilia-Wyzwanie.jpg") {
            myImage.setAttribute("src", "images/Emilia-Challenger.jpg");
        } else {
            myImage.setAttribute("src", "images/Emilia-Challenger.jpg");
        }
    };

    init();

}
