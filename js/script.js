/*SWİPER SLİDER*/

var swiper = new Swiper('.swiper-container', {
pagination: {
el: '.swiper-pagination',
dynamicBullets: false,
},
});


/*Responsive Nav Menu Transparent*/


var x = window.matchMedia("(max-width: 993px)");
var y = window.matchMedia("(max-width: 768px)");

 window.onscroll = function() {transparent()};

function transparent(){
    if(document.body.scrollTop > 950 || document.documentElement.scrollTop > 950){
        document.querySelector('.nav').style.backgroundColor = 'rgba(160, 82, 45, 0.9)';
        document.querySelector('.logo').style.color = '#fff';
        
    }else if(x.matches && document.documentElement.scrollTop > 600){
        document.querySelector('.nav').style.backgroundColor = 'rgba(160, 82, 45, 0.9)';
        document.querySelector('.logo').style.color = '#fff';
    }else if(y.matches && document.documentElement.scrollTop > 450){
        document.querySelector('.nav').style.backgroundColor = 'rgba(160, 82, 45, 0.9)';
        document.querySelector('.logo').style.color = '#fff';
    }else{
        document.querySelector('.nav').style.backgroundColor = 'transparent';
        document.querySelector('.logo').style.color = '#8b4513';
    }
}


/*Responsive Nav Menu*/

const navMenu=() => {
    const navbarToggler= document.querySelector('.navbar-toggler');
    const nav= document.querySelector('.nav-list');

    navbarToggler.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navbarToggler.classList.toggle('toggle');
        document.querySelector('.nav').style.backgroundColor = 'rgba(160, 82, 45, 0.9)';
        document.querySelector('.logo').style.color = '#fff';
    })
};
navMenu();


/*SCROLL REVEAL ANIMATIONS */

ScrollReveal().reveal('.ani-left', { 
    origin:'left',
    distance:'10rem',
    duration:1000,
    easing:'ease-in' });

ScrollReveal().reveal('.ani-right', { 
    origin:'right',
    distance:'10rem',
    duration:1000,
    easing:'ease-in' });

 ScrollReveal().reveal('.ani-fade-up', { 
    opacity:0,
    easing:'ease-in' });

ScrollReveal().reveal('.ani-bottom', { 
    origin:'bottom',
    distance:'10rem',
    duration:1000,
    easing:'ease-in' });

ScrollReveal().reveal('.ani-delay', { 
    delay:500});

ScrollReveal().reveal('.ani-delay-1', { 
    delay:1000});
ScrollReveal().reveal('.ani-delay-2', { 
    delay:1500});
ScrollReveal().reveal('.ani-delay-3', { 
    delay:2000});
ScrollReveal().reveal('.ani-delay-4', { 
    delay:5000});

 
 
/*Services-Slider*/

const serviceChange=() =>{
    let firstChild, lastChild;
    const arrowLeft= document.querySelector('#arrow-left');
    const arrowRight= document.querySelector('#arrow-right');
    const servicesAll=document.querySelector('#services-slider')

    document.addEventListener('click',() => {
        if(event.target===arrowLeft) {
            lastChild=servicesAll.lastElementChild;
            servicesAll.insertAdjacentElement('afterbegin',lastChild);
        }else if (event.target===arrowRight){
            firstChild=servicesAll.firstElementChild;
            servicesAll.insertAdjacentElement('beforeend',firstChild);
        }
    })
}

serviceChange() ;
        