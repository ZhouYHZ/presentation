window.addEventListener('load', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function scrollToSlide(index) {
        const targetPosition = index * window.innerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            scrollToSlide(currentIndex);
        }
    }

    function previousSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            scrollToSlide(currentIndex);
        }
    }

    // set mouse wheel activity
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            nextSlide();
        } else {
            previousSlide();
        }
    });

    // // set ArrowDown activity
    window.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowDown') {
            nextSlide();
            event.preventDefault(); // block
        }
    });

    // set ArrowUp activity
    window.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowUp') {
            previousSlide();
            event.preventDefault(); // block
        }
    });

    // default slide
    scrollToSlide(currentIndex);
});