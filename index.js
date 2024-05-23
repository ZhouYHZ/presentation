window.addEventListener('load', () => {
    let currentIndex = 0;
    //DOM
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
    scrollToSlide(currentIndex);
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
    } else {
        document.getElementsByClassName("time")[0].innerHTML = i;
        document.getElementsByClassName("time")[1].innerHTML = i;
        document.getElementsByClassName("time")[2].innerHTML = i;
        document.getElementsByClassName("time")[3].innerHTML = i;
    }
    i = i + 1;
};

window.addEventListener('load', () => {
    const block = document.querySelector('.space');
    const button = document.querySelector('.bar');
    let activity = false;

    function x_value(event) {
        const Range = block.getBoundingClientRect();
        const current = event.clientX - Range.left;
        const value = Math.max (0, Math.min (current, Range.width));
        console.log (value);
        const inter = value / Range.width;
        output (inter);
        button.style.transform = `translate(${inter * 80 - 2}vw,7vw)`;
    }

    function output(inter) {
        if (inter <= 0.5) {
            document.getElementsByClassName("note")[0].innerHTML = "1 hour"
        } else if (inter > 0.5) {
            document.getElementsByClassName("note")[0].innerHTML = "2 hour"
        }
    }

    block.addEventListener('mousedown', (event) => {
        activity = true;
        x_value(event); 
    });

    block.addEventListener('mousemove', (event) => {
        if (activity == true) {
            x_value(event);
        }
    });

    block.addEventListener('mouseup', () => {
        activity = false;
    });

    block.addEventListener('mouseleave', () => {
        activity = false;
    });
});