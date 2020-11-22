let date = new Date();
let updated = document.lastModified;

document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("last-updated").innerHTML = updated;