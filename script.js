let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');






window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
    
    sections.forEach(section => {
    
    let top = window.scrollY;
    let height = section.offsetHeight;
    let offset = section.offsetTop - 100;
    let id = section.getAttribute('id');
    
    if( top >= offset && top < offset + height ) {
    
        navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('header .navbar a[href*='+ id + ']').classList.add('active');
            
        })
    
    }
    
    })
    
}


document.querySelector('#search-icon').addEventListener('click', () => {
    document.querySelector('#search-form').classList.toggle('active');
})


document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('#search-form').classList.remove('active');
})


// Swiper JS
var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
}); 


var swiper = new Swiper('.pista-slider', {
    spaceBetween: 20,
    centeredSides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    loop: true,
    breakPoints: {
    0: {
        slidePreView: 1
    },
    640: {
        slidePreView: 2
    },
    768: {
        slidePreView: 2
    },
    1024: {
        slidePreView: 3
    },
    },
}); 