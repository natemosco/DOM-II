// Your code goes here
// this is syntactic sugar that allows easier coding:
const $ = s=> document.querySelector(s);
const $$ = s=> document.querySelectorAll(s);
//ON CLICK!
document.querySelector(".intro img").onclick = e =>{
    let destination = prompt("Where would you like to go?", "Myrtle Beach?");
    $(".intro h2").textContent += ` Lets go to ${destination}`;
}
//ONLOAD + see CSS for added animation class. called  .animation  this uses bounce
tl = new TimelineMax();
window.onload = e =>{
    $$("img").forEach(e=>{
        e.classList.add("animation")
    })
}
    