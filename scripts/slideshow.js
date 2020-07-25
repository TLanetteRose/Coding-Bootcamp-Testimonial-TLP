let slideIndex = 1;
showSlides(slideIndex);

//Next /previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slides');
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: 
        //prev
        e.preventDefault();
        slideIndex--;
        showSlides(slideIndex);
        break;
        case 39: 
        //next 
        e.preventDefault();
        slideIndex++;
        showSlides(slideIndex);
        break;
    }
}