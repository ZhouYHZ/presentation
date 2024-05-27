window.addEventListener('load', () => {
    // DOM HTML
    // Page count function and get slide element.
    var count = 0;
    const slides = document.querySelectorAll('.slide');

    function Message(index) {
        const animation = document.querySelectorAll('.textbox span');
        if (index == 1) {
            animation.forEach(box => {
                box.style.animationPlayState = 'running';
            });
        }
    }

    function scrollToSlide(index) {
        let targetPosition = index * window.innerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
         Message(index);
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

    // set ArrowDown activity
    window.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowDown') {
            nextSlide();
            // block
            event.preventDefault();
        }
    });

    // set ArrowUp activity
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
        document.getElementsByClassName("time")[0].innerHTML = m + ":" + sec;
        document.getElementsByClassName("time")[1].innerHTML = m + ":" + sec;
        document.getElementsByClassName("time")[2].innerHTML = m + ":" + sec;
        document.getElementsByClassName("time")[3].innerHTML = m + ":" + sec;
        document.getElementsByClassName("time")[4].innerHTML = m + ":" + sec;
        document.getElementsByClassName("time")[5].innerHTML = m + ":" + sec;
    } else {
        document.getElementsByClassName("time")[0].innerHTML = i;
        document.getElementsByClassName("time")[1].innerHTML = i;
        document.getElementsByClassName("time")[2].innerHTML = i;
        document.getElementsByClassName("time")[3].innerHTML = i;
        document.getElementsByClassName("time")[4].innerHTML = i;
        document.getElementsByClassName("time")[5].innerHTML = i;
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
        if (inter > 1/3 && inter <= 2/3 ) {
            text.innerHTML = "> 3 hour: Get dependencies, anxiety and tension feel be increase."
        } else if (inter > 2/3 && inter <= 1) {
            text.innerHTML = "> 4 hour: Loss of sleep time, which mean 100% health damage."
        } else {
            text.innerHTML = "1~2 hour: Not affect timetable, but may lose study time.";
        }
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