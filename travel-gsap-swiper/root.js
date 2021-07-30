/* ================== SHOW MENU ================== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    
    /* validate the veriable exist */
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // we added the 'show-menu' class in the div tag
            nav.classList.toggle('show-menu');
            console.log('done');
        })
    } else {
        console.log('problem');
    }
}

showMenu('nav-toggle', 'nav-id');

/* ================== SWIPER JS ================== */
let galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 0,
    slidesPerView: 0,
  });

let galleryTop = new Swiper(".gallery-top", {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
});


/* ================== POPUP ================== */
const btnOpenVideo = document.querySelectorAll('.islands__video-content'),
    islandsPopup = document.querySelector('#popup'),
    btnCloseVideo = document.querySelector('.islands__popup-close');

function poPup() {
    islandsPopup.classList.add('show-popup');
    console.log(btnOpenVideo);
    console.log(islandsPopup);
}

btnOpenVideo.forEach(b => {
    b.addEventListener('click', poPup);
});

btnCloseVideo.addEventListener('click', () => {
    islandsPopup.classList.remove('show-popup');
});

/* ================== GSAP ANIMATION ================== */
const controlImg = document.querySelectorAll('.controls__img');

function ScrollAnimation() {
    gsap.from(
        '.islands__subtitle',
        {
            opacity: 0,
            duration: .2,
            delay: .2,
            y: -20,
        }
    );
    
    gsap.from(
        '.islands__title',
        {
            opacity: 0,
            duration: .3,
            delay: .3,
            y: -20,
        }
    );
    
    gsap.from(
        '.islands__description',
        {
            opacity: 0,
            duration: .4,
            delay: .4,
            y: -20,
        }
    );
    
    gsap.from(
        '.islands__button',
        {
            opacity: 0,
            duration: .5,
            delay: .5,
            y: -20,
        }
    );
    
    gsap.from(
        '.islands__video-content',
        {
            opacity: 0,
            duration: .6,
            delay: .6,
            y: -20,
        }
    );

    islandsPopup.classList.remove('show-popup')
}

controlImg.forEach(c => {
    c.addEventListener('click', ScrollAnimation);
});