var menu = document.querySelector(".menu-box");

function showMenu() {
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}
