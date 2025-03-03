window.onload = () => {


    var SLIDE_INTERVAL = 6000;

    var nextSlideBtn = document.querySelector("#next");
    var previousSlideBtn = document.querySelector("#previous");
    var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
    const SLIDES_COUNT = 3;

    var slideStart = 1;

    var currentSlide = document.querySelector("[data-slide='" + slideStart + "']");
    var lastSlide = 1;

    var forwards = true;

    var handler = () => {

        slideStart++;
        changeSlide(1);

    };

    // var interval = setInterval(handler, SLIDE_INTERVAL);

    previousSlideBtn.addEventListener("click", (e) => {
        // clearInterval(interval);
        // SLIDE_INTERVAL += 1000;
        if (slideStart > 1) {
            slideStart--;

            changeSlide(0);
        }
    });

    nextSlideBtn.addEventListener("click", (e) => {
        // clearInterval(interval);
        // SLIDE_INTERVAL += 1000;
        slideStart++;
        changeSlide(1);
    });


    const changeSlide = (direction) => {
        console.log("Changing slide");
        console.log("Slide Start=" + slideStart);
        console.log("Last Slide=" + lastSlide);
        console.log("-----");
        if (slideStart == 0) {
            console.log("zero");
            slideStart = 1;
            lastSlide = 0;
            return;
        }

        if (slideStart == (SLIDES_COUNT + 1)) {
            slides.forEach(slide => {
                slide.classList.remove("animateBackward");
                slide.classList.remove("animateForward");
            });
            slideStart = 1;
            lastSlide = SLIDES_COUNT;
            forwards = !forwards;
        };
        console.log("Slide Start=" + slideStart);
        console.log("Last Slide=" + lastSlide);
        currentSlide = document.querySelector("[data-slide='" + slideStart + "']");
        console.log(currentSlide);
        if (currentSlide == null) {
            return;
        }
        if (direction == 1) {
            console.log("translateX(-" + (slideStart * 100) + "%);");
            slides.forEach(slide => {
                slide.style.transform = "translateX(-" + ((slideStart - 1) * 100) + "%)";
                // slide.classList.add("animateForward");
            });
        } else {
            console.log("translateX(" + ((slideStart - lastSlide) * 100) + "%);");

            slides.forEach(slide => {

                slide.style.transform = "translateX(-" + ((slideStart - 1) * 100) + "%)";
                // slide.classList.remove("animateForward");
            })
        }

        lastSlide = slideStart;
        // if (SLIDE_INTERVAL > 3000) { SLIDE_INTERVAL -= 1000; }
        // interval = setInterval(handler, SLIDE_INTERVAL);

    }


    var slideshowInterval = setInterval(handler, SLIDE_INTERVAL);


    window.onscroll = function () { myFunction() };
    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

}