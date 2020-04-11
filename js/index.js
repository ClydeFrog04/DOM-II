// Your code goes here
//const busImg = document.getElementsByClassName("intro")[0].childNodes[1];
const busImg = document.querySelector(".intro img");
console.log(busImg);

//I do realise that this is just making a hover style, but I wanted to write a js version of hover to practice different ways of doing things
busImg.addEventListener("mouseover", () => {
    busImg.style.opacity = "50%";
});
busImg.addEventListener("mouseleave", () => {
    busImg.style.opacity = "100%";
});

const navItems = document.querySelectorAll(".nav-link");
navItems.forEach((navItem) => {
    navItem.addEventListener("click", (event) => {
        alert(event.x);
        event.preventDefault();
    });
});

const signUpBtns = document.querySelectorAll(".destination .btn");

signUpBtns.forEach((signUpBtn) => {
    signUpBtn.addEventListener("dblclick", (event) => {
        //using gsap animations for the animations in this project! Seemed like a good time to learn how to use this library. Later that day... just noticed this was our stretch task...
        let animationDuration = .5;
        const tl = gsap.timeline();
        tl.to(signUpBtn, {duration: animationDuration / 2, y: -10});
        tl.to(signUpBtn, {duration: animationDuration, y: 0, ease: "bounce"});
    });
});

//apply style to all images
const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("mouseenter", (event) => {
        image.style.transform = "scale(1.3)";
        image.style.transition = "all 0.3s";
    });
    image.addEventListener("mouseleave", (event) => {
        image.style.transform = "scale(1)";
    });
});

//Welcome to the fun bus text
const welcomeH2 = document.querySelector(".intro h2");
let animDuration = 2;
const tl = gsap.timeline();
tl.set(welcomeH2, {transformOrigin: "25% 25%"});
tl.to(welcomeH2, {
    duration: animDuration, rotation: 360,
    onComplete: () => {
        welcomeH2.textContent = "Welcome To Fun Bus!";
    }
});
tl.pause(0);
welcomeH2.addEventListener("wheel", (event) => {
    welcomeH2.textContent = "You found the easter egg!";
    tl.play(0);
    //console.log(tl.endTime());
});


//footer animation
//todo: make this work
const footerP = document.querySelector(".footer p");
footerP.addEventListener("select",(event)=>{
    console.log(event.target);
    //const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    //console.log(selection);
});
/*
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}
 */

let timeoutID;
const introP = document.querySelector(".intro p");
introP.addEventListener("wheel", (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = "limegreen";
    clearTimeout(timeoutID);
    timeoutID = setTimeout(resetIntroP, 50);
});

function resetIntroP(){
    introP.style.backgroundColor = "white";
}

body = document.querySelector("body");
let bodyTimeout;
body.addEventListener("wheel", (event) =>{
    body.style.backgroundColor = "rebeccapurple";
    clearTimeout(bodyTimeout);
    bodyTimeout = setTimeout(resetBody, 50);
});
function resetBody(){
    body.style.backgroundColor = "white";
}