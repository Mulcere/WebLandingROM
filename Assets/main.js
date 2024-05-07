let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

// Function to show a specific slide
function showSlide(index) {
    // Ensure index is within bounds
    if (index >= carouselItems.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = carouselItems.length - 1;
    } else {
        currentIndex = index;
    }

    // Update the transform of carousel-inner to show the correct slide from the right
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update the active class on the carousel items and dots
    carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === currentIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Function to move to the next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Function to navigate to a specific slide when a dot is clicked
function goToSlide(index) {
    showSlide(index);
}

// Automatically change slides every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 5000);

// Initialize the carousel with the first slide
showSlide(currentIndex);
