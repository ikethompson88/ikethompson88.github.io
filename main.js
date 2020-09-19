let date = new Date();
let updated = file.lastModified;

file.getElementById("year").innerHTML = date.getFullYear();
file.getElementById("last-updated").innerHTML = updated;