// Navbar shadow on scroll

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";

}
else{

header.style.boxShadow="none";

}

});


// Reveal Animation

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",reveal);

function reveal(){

sections.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

const screen=window.innerHeight;

if(top<screen-100){

sec.style.opacity="1";
sec.style.transform="translateY(0px)";

}

});

}

sections.forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(80px)";
sec.style.transition="1s";

});

reveal();