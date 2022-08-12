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
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 0;

plus.addEventListener("click", ()=>{
    a++;
    // a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a);
});
minus.addEventListener("click", ()=>{
    if(a > 0){
        a--;
        // a = (a > 1) ? "0" + a : a;
        num.innerText = a;
    }
});
