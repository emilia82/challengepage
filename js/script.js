console.log("Cześć Wszystkim! Wpadajcie na wyzwanie, kto NIE wpada ten PARÓWKA!! Ten kto wpada, ten wygrywa");

let changeBackgroundButton= document.querySelector(".changeBackgroundButton");
let container = document.querySelector(".container");

changeBackgroundButton.addEventListener("click", () => {
    container.classList.toggle("newBackground");
    

});
