/*=================== SHOW MENU ===================*/
const showMenu = (toggleId, navId) => {
    const toggling = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    // validate that the variable exist
    if (toggling && nav) {
        toggling.addEventListener("click", () => {
            // adding the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle("show-menu");
        });
    }
};

showMenu("nav-toggle", "nav-menu");

/*=================== REMOVE MENU MOBILE ===================*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // when we click eache nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=================== SCROLL SECTION ACTIVE LINK ===================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*=================== CHANGE BACKGROUND HEADER ===================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    // When the scroll is greater than 200 viewport height,
    // add the scroll-header class to the header tag
    if (this.scrollY >= 200) {
        nav.classList.add("scroll-header");
    } else {
        nav.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader);

/*=================== SHOW SCROLL TOP ===================*/
function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    // when the scroll is heigher then 560 viewport height,
    // add the show-scroll class to the 'a' tag with the scroll-top class
    if (this.scrollY >= 560) {
        scrollTop.classList.add("scroll-top");
    } else {
        scrollTop.classList.remove("scroll-top");
    }
}
window.addEventListener("scroll", scrollTop);

/*=================== DARK LIGHT THEME ===================*/
const themeButton = document.getElementById("theme-button");
const darktheme = "dark-theme";
const icontheme = "bx-sun";

// previously selected topic(if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darktheme) ? "dark" : "light";

const getCurrentIcon = () =>
    themeButton.classList.contains(icontheme) ? "bx-moon" : "bx-sun";

// we validate if user perviously choose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activate or deactivate the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darktheme
    );
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
        icontheme
    );
}
// Activate / Deactivate the theme with button
themeButton.addEventListener("click", () => {
    // Add / Remove the dark / icon theme
    document.body.classList.toggle(darktheme);
    themeButton.classList.toggle(icontheme);

    // we save the theme and the current icon that the user choose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=================== SCROLL REVEL ANIMATION  ===================*/
const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: true,
});

sr.reveal(
    `.home__data, .home__img,
    .about__data, .about__img,
    .services__content, .menu__content,
    .app__data, .app__img,
    .contact__data, .contact__button,
    .footer__content`,

    {
        interval: 200,
    }
);
