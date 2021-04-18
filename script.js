window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0 );
});

const hamburger = document.querySelector('.hamburger-area');
const sidebar = document.querySelector('.sidebar');
let buttonOpen = false;

hamburger.addEventListener('click',()=>{
    if (!buttonOpen) {
        sidebar.classList.add('open');
        buttonOpen = true;
    }
    else{
        sidebar.classList.remove('open');
        buttonOpen = false;
    }
})