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

        $(window).scroll(function() {
if ($(window).scrollTop() > 50) {
    $('.navbar1').css('background', 'white');
    $('.navbar1').css('opacity', '0.9');	//Opacidad del navbar
} else {
    $('.navbar1').css('background', 'transparent');
}
});
