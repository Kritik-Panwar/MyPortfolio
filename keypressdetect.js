let presskey = document.querySelector(".presskey");
let show = document.querySelector(".result");
let code = document.querySelector(".num");
let keys = document.querySelector(".keys");
let whatkey = document.querySelector(".whatkey");
let whatcode = document.querySelector(".whatcode");



document.addEventListener("keydown",(e)=>{
    let space;
    space = e.keyCode == 32 ? "Space" : e.key;

    presskey.style.display = "none";
    show.style.display = "block";
    code.innerText = e.keyCode;
    keys.innerText = space.toUpperCase();
    whatkey.innerText =  space;
    whatcode.innerText =  e.keyCode;








    console.log(e);
})