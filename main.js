//Go top button function
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

//NAVBAR
const body = document.querySelector("body");
const navBar1 = document.querySelector(".navbar1");
const menu1 = document.querySelector(".navbar1_menu");
const menuBtn = document.querySelector(".menu_btn");
const cancelBtn = document.querySelector(".cancel_btn");
menuBtn.onclick = ()=>{
    menu1.classList.add("active");
    menuBtn.classList.add("hide");
}
cancelBtn.onclick = ()=>{
    menu1.classList.remove("active");
    menuBtn.classList.remove("hide");
}
menu1.onclick = ()=>{
    menu1.classList.remove("active");
    menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
    this.scrollY > 20 ? navBar1.classList.add("sticky") : navBar1.classList.remove("sticky");
}

    (window).scroll(function() {
if ($(window).scrollTop() > 50) {
    $('.navbar1').css('background', 'white');
    $('.navbar1').css('opacity', '0.9');	//Opacidad del navbar
} else {
    $('.navbar1').css('background', 'transparent');
}
});


//NAV TIENDA
(function() {

    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".nav_tienda a");
    const colors = ["orange"];
    function mouseenterFunc() {
        if (!this.parentNode.classList.contains("active")) {
        for (let i = 0; i < links.length; i++) {
            if (links[i].parentNode.classList.contains("active")) {
            links[i].parentNode.classList.remove("active");
            }
            links[i].style.opacity = "0.25";
        }

        this.parentNode.classList.add("active");
        this.style.opacity = "1";

        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left + window.pageXOffset;
        const top = this.getBoundingClientRect().top + window.pageYOffset;
        const color = colors[Math.floor(Math.random() * colors.length)];

        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.borderColor = color;
        target.style.transform = "none";
        }
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", (e) => e.preventDefault());
        links[i].addEventListener("mouseenter", mouseenterFunc);
    }

    function resizeFunc() {
        const active = document.querySelector(".mynav li.active");

        if (active) {
        const left = active.getBoundingClientRect().left + window.pageXOffset;
        const top = active.getBoundingClientRect().top + window.pageYOffset;

        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        }
    }

    window.addEventListener("resize", resizeFunc);

})();

/* ADD REST BUTTON */
// const plus = document.querySelector(".plus"),
// minus = document.querySelector(".minus"),
// num = document.querySelector(".num");

// let a = 0;

// plus.addEventListener("click", ()=>{
//     a++;
//     // a = (a < 10) ? "0" + a : a;
//     num.innerText = a;
//     console.log(a);
// });
// minus.addEventListener("click", ()=>{
//     if(a > 0){
//         a--;
//         // a = (a > 1) ? "0" + a : a;
//         num.innerText = a;
//     }
// });


/* Funcion selector dias envios */
const lunes = document.getElementById("lunes-1");
const martes = document.getElementById("martes-2");
const miercoles = document.getElementById("miercoles-3");
const jueves = document.getElementById("jueves-4");
const viernes = document.getElementById("viernes-5");

const lunes_op = document.getElementById("op-1-lunes");
const martes_op = document.getElementById("op-2-martes");
const miercoles_op = document.getElementById("op-3-miercoles");
const jueves_op = document.getElementById("op-4-jueves");
const viernes_op = document.getElementById("op-5-viernes");

lunes_op.style.display = "block";
martes_op.style.display = "none";
    miercoles_op.style.display = "none";
    jueves_op.style.display = "none";
    viernes_op.style.display = "none";


lunes.onclick = function(){
    lunes_op.style.display = "block";
    martes_op.style.display = "none";
    miercoles_op.style.display = "none";
    jueves_op.style.display = "none";
    viernes_op.style.display = "none";

    /* COLOR NARANJA AL CLICKEAR*/
    lunes_op.style.color = "fca55e";
    martes_op.style.color = "#000";
    miercoles_op.style.color = "#000";
    jueves_op.style.color = "#000";
    viernes_op.style.color = "#000";
}

martes.onclick = function(){
    martes_op.style.display = "block";
    lunes_op.style.display = "none";
    miercoles_op.style.display = "none";
    jueves_op.style.display = "none";
    viernes_op.style.display = "none";
}

miercoles.onclick = function(){
    miercoles_op.style.display = "block";
    martes_op.style.display = "none";
    lunes_op.style.display = "none";
    jueves_op.style.display = "none";
    viernes_op.style.display = "none";
}

jueves.onclick = function(){
    jueves_op.style.display = "block";
    miercoles_op.style.display = "none";
    martes_op.style.display = "none";
    lunes_op.style.display = "none";
    viernes_op.style.display = "none";
}

viernes.onclick = function(){
    viernes_op.style.display = "block";
    jueves_op.style.display = "none";
    miercoles_op.style.display = "none";
    martes_op.style.display = "none";
    lunes_op.style.display = "none";
}

/* Funcion selector granel - envasados */

const btnop1 = document.getElementById("op-1");
const btnop2 = document.getElementById("op-2");
const op1Text = document.getElementById("op-1-text");
const op2Text = document.getElementById("op-2-text");

btnop1.onclick = function(){
    op1Text.style.display = "block";
    op2Text.style.display = "none";
    btnop1.style.borderBottom = "3px solid #E2700B";
    btnop2.style.borderBottom = "none";
}

btnop2.onclick = function(){
    op1Text.style.display = "none";
    op2Text.style.display = "block";
    btnop1.style.borderBottom = "none";
    btnop2.style.borderBottom = "3px solid #E2700B";
}