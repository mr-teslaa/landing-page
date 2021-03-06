const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    toggle && nav
        ? toggle.addEventListener("click", () => {
              nav.classList.toggle("show-menu"), console.log("done");
          })
        : console.log("problem");
};
showMenu("nav-toggle", "nav-id");
let galleryThumbs = new Swiper(".gallery-thumbs", {
        spaceBetween: 0,
        slidesPerView: 0,
    }),
    galleryTop = new Swiper(".gallery-top", {
        effect: "fade",
        loop: !0,
        thumbs: { swiper: galleryThumbs },
    });
const btnOpenVideo = document.querySelectorAll(".islands__video-content"),
    islandsPopup = document.querySelector("#popup"),
    btnCloseVideo = document.querySelector(".islands__popup-close");
function poPup() {
    islandsPopup.classList.add("show-popup"),
        console.log(btnOpenVideo),
        console.log(islandsPopup);
}
btnOpenVideo.forEach((b) => {
    b.addEventListener("click", poPup);
}),
    btnCloseVideo.addEventListener("click", () => {
        islandsPopup.classList.remove("show-popup");
    });
const controlImg = document.querySelectorAll(".controls__img");
function ScrollAnimation() {
    gsap.from(".islands__subtitle", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2,
        y: -20,
    }),
        gsap.from(".islands__title", {
            opacity: 0,
            duration: 0.3,
            delay: 0.3,
            y: -20,
        }),
        gsap.from(".islands__description", {
            opacity: 0,
            duration: 0.4,
            delay: 0.4,
            y: -20,
        }),
        gsap.from(".islands__button", {
            opacity: 0,
            duration: 0.5,
            delay: 0.5,
            y: -20,
        }),
        gsap.from(".islands__video-content", {
            opacity: 0,
            duration: 0.6,
            delay: 0.6,
            y: -20,
        }),
        islandsPopup.classList.remove("show-popup");
}
controlImg.forEach((c) => {
    c.addEventListener("click", ScrollAnimation);
});
