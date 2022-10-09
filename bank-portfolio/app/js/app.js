/* <i class="bx bx-x"></i> */
const hamburger = document.querySelector(".hamburger");
console.log(hamburger);
hammenu = "bx-menu";

const removeMenu = () => {
    hamburger.classList.remove("bx-menu");
    hamburger.classList.toggle("bx-x");
};

const addMenu = () => {
    hamburger.classList.remove("bx-x");
    hamburger.classList.toggle("bx-menu");
};

hamburger.addEventListener("click", () => {
    console.log("clicked");
    hamburger.classList.contains(hammenu) ? removeMenu() : addMenu();
});
