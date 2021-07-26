
    const welcome = () => {
        console.log("Cześć Wszystkim! Wpadajcie na wyzwanie, kto NIE wpada ten PARÓWKA!! Ten kto wpada, ten wygrywa");
    
}

{
    const newBackgroundColour = () => {
        const container = document.querySelector(".container");
        container.classList.toggle("newBackgroundColour");
    };

    const init = () => {
        let changeBackgroundColourButton = document.querySelector(".changeBackgroundColourButton");
     
        changeBackgroundColourButton.addEventListener("click", "newBackgroundColour");
    };

    let myImage = document.querySelector("img");
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
