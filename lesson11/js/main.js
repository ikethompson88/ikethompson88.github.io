const longDate = {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric'
};

document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById('date').innerHTML = new Date().toLocaleDateString('en-us', longDate);

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function adjustRating(severity) {
	document.getElementById("ratingValue").innerHTML = severity;
}