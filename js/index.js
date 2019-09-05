// Your code goes here
// this is syntactic sugar that allows easier coding:
const $ = s=> document.querySelector(s);
const $$ = s=> document.querySelectorAll(s);

//#1 ON CLICK!
document.querySelector(".intro img").onclick = e =>{
    let destination = prompt("Where would you like to go?", "Myrtle Beach?");
    $(".intro h2").innerHTML += `<span id="iframe"> - lets got to ${destination}</span>`;
    
//#3 ON BDL CLICK     HIDDEN EASTER EGG 
    if(destination.toLowerCase() === "myrtle beach?"){
        $("#iframe").ondblclick = e => {
            let iframe = document.createElement("iframe");
            iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106194.67088069287!2d-78.94902005523504!3d33.719725635783306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890068953b552101%3A0xbc0fb115b5d09618!2sMyrtle%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1567543283748!5m2!1sen!2sus";
            iframe.style.width = "100%"; 
            iframe.style.height = "400px"; 
            $(".intro").append(iframe)
        }
    }
}

//#2ONLOAD + see CSS for added animation class. called  .animation  this uses bounce
tl = new TimelineMax();
window.onload = e =>{
    $$("img").forEach(e=>{
        e.classList.add("animation")
    })
}
//#4 ON COPY HAHAHAHA
$$("p").forEach(e=>{
    e.oncopy= e =>{
    e.target.textContent = "";
    }
})

// #5 ON SCROLL
window.onscroll = e =>{
    $$('img').forEach(e=>{
    e.style.position = "relative";
    e.style.left = `${window.pageYOffset / 20}px`;
    })
}
//#6 MOUSE ENTER &&  #7MOUSE LEAVE
$$("img").forEach(element=>{
    element.onmouseenter = e =>{
        e.target.style.transform = "rotateY(180deg)";
        e.target.style.transition = "1s";
    }
})
$$("img").forEach(element=>{
    element.onmouseleave = e =>{
        e.target.style.transform = "rotateY(0deg)";
        e.target.style.transition = "3s";
    }
})

//#8 ON WHEEL
let count = 0
$("img").onwheel = e =>{
    count +=20;
    e.preventDefault();
    e.target.style.transform = `rotateX(${count}deg)`
}

// #9 && 10  DRAGOVER and DROP
let globalDrag;
$$('p,h1,h2,h3').forEach(element=>{
    element.ondrag = e =>{
    globalDrag = e.target.parentElement 
    }
})
//divs with class="text-content" are made to be dropzone areas
$$('div, header').forEach(element=>{
    element.ondragover = e =>{
        e.preventDefault();
    }
    element.ondrop = e=> {
        let text = e.dataTransfer.getData('text'); 
        e.target.textContent += text; // event targets the div that is having stuff dropped ONDROP
        globalDrag.textContent = globalDrag.textContent.replace(text,"");
    }
})
// psudoCode:
// $$ -> array of divs/class text-content.
//element is instance of index in array due to for each loop
//e is the reference to the event


//* [X] Stop the navigation from items from refreshing the page by using `preventDefault()`
$$("a").forEach(element =>{
    element.onclick = e =>{
        e.preventDefault();
    }
})
// $(".home").onclick = e =>{
//     e.stopPropagation()
// }
$("body").onclick = e =>{
    $("body").style.background = `url(https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
}