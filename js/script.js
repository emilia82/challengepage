console.log("Cześć Wszystkim! Wpadajcie na wyzwanie, kto NIE wpada ten PARÓWKA!!");

let changeBackgroundButton= document.querySelector(".changeBackgroundButton");
let container = document.querySelector(".container");

changeBackgroundButton.addEventListener("click", () => {
    container.classList.toggle("newBackground");
    

});
