window.addEventListener('load', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function Message(index) {
        const  animation = document.querySelectorAll('.textbox');
        if (index == 1) {
            animation.forEach(box => {
                box.style.animationPlayState = 'running';
            });
        }
    }

    function scrollToSlide(index) {
        const targetPosition = index * window.innerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
         Message(index);
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

    // set ArrowDown activity
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

var i = 1;
var myVar = setInterval(function(){myTimer ()},1000);

function myTimer () {
    if (i >= 60) {
        let s = i;
        let m = 0;
        while (s >= 60) {
            s = s - 60;
            m = m + 1;
        }
        let sec = i - m * 60;
        document.getElementsByClassName("time")[0].innerHTML = m + ":" + sec;
        document.getElementsByClassName("time")[1].innerHTML = m + ":" + sec;
    } else {
        document.getElementsByClassName("time")[0].innerHTML = i;
        document.getElementsByClassName("time")[1].innerHTML = i;
    }
    i = i + 1;
}
