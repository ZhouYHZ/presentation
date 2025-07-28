window.addEventListener('load', () => {
    // DOM HTML
    // Page count function and get slide element.
    var count = 0;
    const slides = document.querySelectorAll('.slide');

    function scrollToSlide(index) {
        let targetPosition = index * window.innerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        // Message(index);
    }

    function nextSlide() {
        if (count < slides.length - 1) {
            count++;
            scrollToSlide(count);
        }
    }

    function previousSlide() {
        if (count > 0) {
            count--;
            scrollToSlide(count);
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

    window.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowDown') {
            nextSlide();
            // block
            event.preventDefault();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowUp') {
            previousSlide();
            event.preventDefault();
        }
    });

    // default slide
    scrollToSlide(count);
});

var i = 1;
setInterval(function(){myTimer ()},1000);

function myTimer () {
    if (i >= 60) {
        let s = i;
        let m = 0;
        while (s >= 60) {
            s = s - 60;
            m = m + 1;
        }
        let sec = i - m * 60;
        document.getElementsByClassName("time")[0].getElementsByTagName("p")[0].innerHTML = m + ":" + sec;
    } else {
        document.getElementsByClassName("time")[0].getElementsByTagName("p")[0].innerHTML = i;
    }
    i = i + 1;
};

window.addEventListener('load', () => {
    const block = document.querySelector('.space');
    const button = document.querySelector('.bar');
    var activity = false;
    output (0);

    function element_position(event) {
        let range = block.getBoundingClientRect();
        let current = event.clientX - range.left;
        let value = Math.max (0, Math.min (current, range.width));
        let inter = value / range.width;
        output (inter);
        button.style.transform = `translateX(${inter * 80 - 2}vw)`;
    }

    function output(inter) {
        let text = document.querySelector('.note p');
        text.innerHTML = inter.toFixed(2);
    }

    block.addEventListener('mousedown', (event) => {
        activity = true;
        element_position(event); 
    });

    block.addEventListener('mousemove', (event) => {
        if (activity == true) {
            element_position(event);
        }
    });

    block.addEventListener('mouseup', () => {
        activity = false;
    });

    block.addEventListener('mouseleave', () => {
        activity = false;
    });
});