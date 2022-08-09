const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle){

    navToggle.addEventListener('click', ()=>{

        navMenu.classList.add("show-menu");

    });

};


if(navClose){

    navClose.addEventListener('click', ()=>{

        navMenu.classList.remove("show-menu");

    });

};


const navLink = document.querySelectorAll('.nav__link');

function linkAction(){

    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');

};

navLink.forEach(n => n.addEventListener('click', linkAction));


const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){

    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    };

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    };

};

skillsHeader.forEach((el) =>{

    el.addEventListener('click', toggleSkills)
    
});


if($('#education-span').hasClass('qualification__button-focus')){

}else{
            
    $('#education-span').addClass('qualification__button-focus');
    $('#work-span').removeClass('qualification__button-focus');

};

$('#education-span').click(function() {

    if($('#education-content').hasClass('qualification__none')){

        $('#education-content').removeClass('qualification__none');
        $('#education-content').addClass('qualification__block');

        $('#work-content').addClass('qualification__none') && $('#work-content').removeClass('qualification__block');
        
        $('#education-span').addClass('qualification__button-focus');
        $('#work-span').removeClass('qualification__button-focus');

    };

});

$('#work-span').click(function() {

    if($('#work-content').hasClass('qualification__none')){

        $('#work-content').removeClass('qualification__none');
        $('#work-content').addClass('qualification__block');

        $('#education-content').addClass('qualification__none') && $('#education-content').removeClass('qualification__block');

        $('#work-span').addClass('qualification__button-focus');
        $('#education-span').removeClass('qualification__button-focus');
        
    };

});

const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){

    modalViews[modalClick].classList.add('active__modal');

};

modalBtns.forEach((modalBtn, i) => {

    modalBtn.addEventListener('click', () => {

        modal(i);

    });

});

modalCloses.forEach((modalClose) => {

    modalClose.addEventListener('click', () => {

        modalViews.forEach((modalView) => {

            modalView.classList.remove('active__modal');

        });

    });

});

var swiper = new Swiper(".mySwiper", {
    
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})