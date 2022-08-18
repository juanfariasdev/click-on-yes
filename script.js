

let isover= false;
document.querySelector("#no").addEventListener("mouseover",(function(){
    Move()
}), false)

document.querySelector("#noWithBorder").addEventListener("mouseover",(function(){
    Move()
}), false)

document.
querySelector("#no").addEventListener("mouseout",(function(){
    Move()
}), false)

function Move(){
    let e = document.querySelector('#noWithBorder');

    e.style.position = "absolute";

    e.style.right = Math.floor(Math.random() * 95) + "%"
    e.style.bottom = Math.floor(Math.random() * 95) + "%"


}