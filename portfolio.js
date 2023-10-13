let currentIndex = 1;
    
//Show current image
showSlides(currentIndex);
      
//Function to move Next
function plusSlides(n) {
    showSlides(currentIndex += n);
}

//Function to move back
function currentSlide(n) {
    showSlides(currentIndex = n);
}
      
//Initiate moving of slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("images");
    let dots = document.getElementsByClassName("navigation-dot");

    if (n > slides.length) {currentIndex = 1}
    if (n < 1) {currentIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[currentIndex-1].style.display = "block";
    dots[currentIndex-1].className += " active";
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))