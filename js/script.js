{
    const welcome = () => {
    console.log("Cześć Wszystkim! Wpadajcie na wyzwanie, kto NIE wpada ten PARÓWKA!! Ten kto wpada, ten wygrywa");
}

const onChangeBacgroundClick = () => {
    container.classList.toggle("newBackground");
};

welcome();


let changeBackgroundButton= document.querySelector(".changeBackgroundButton");
let container = document.querySelector(".container");

changeBackgroundButton.addEventListener("click", onChangeBacgroundClick);
    

}

