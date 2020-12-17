let date = new Date();
let updated = document.lastModified;

document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("last-updated").innerHTML = updated;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}