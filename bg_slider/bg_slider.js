const body = document.body;
const right = document.getElementById('right');
const left = document.getElementById('left');

const slides = document.querySelectorAll('.slide');

let activeSlide = 0; 

right.addEventListener('click', moveRight);
left.addEventListener('click', moveLeft);

function moveRight() {
    if (activeSlide <= 1 ) {
        activeSlide++;
    }
    else {
        activeSlide = 0;
    }
    setBgForBody ();
    setActiveSlide ();
}
function moveLeft() {
    if (activeSlide >= 1) {
        activeSlide--;
    }
    else {
        activeSlide = 4;
    }
    setBgForBody ();
    setActiveSlide ();
}

function setBgForBody () {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide () {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[activeSlide].classList.add('active');
}