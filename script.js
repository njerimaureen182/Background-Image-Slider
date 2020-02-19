const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

// to add event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


// callback function for nextBtn
function nextSlide() {
    // to animate container
    container.animate([{opacity:0.1},{opacity:1.0}],{duration:1000,fill:"forwards"});

    // to create an infinite loop:
    if (counter == 4) {
        counter = -1;
    }
    counter++;
    container.style.backgroundImage = `url(img/bg-${counter}.jpg)`;
}

// callback function for prevBtn
function prevSlide() {
    // to animate container
    container.animate([{opacity:0.1},{opacity:1.0}],{duration:1000,fill:"forwards"});

    if (counter == 0) {
        counter = 5;
    }
    counter--;
    container.style.backgroundImage = `url(img/bg-${counter}.jpg)`;
}
