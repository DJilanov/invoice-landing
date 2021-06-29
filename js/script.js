const  burger = document.querySelector('.burger');
const  nav = document.querySelector('.mobile');
burger.addEventListener('click', function () {
    nav.classList.toggle('toggle-active');
    burger.style.visibility = "hidden";
});

const closebtn = document.querySelector('.closebtn');
closebtn.addEventListener('click', function() {
    nav.classList.remove('toggle-active');
    burger.style.visibility = "visible";
});
