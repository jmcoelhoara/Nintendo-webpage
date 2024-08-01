
let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);


document.querySelectorAll('.buy-now-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
        
    });
});
