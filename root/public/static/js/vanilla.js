window.onload = () => {


    const SLIDES_COUNT = 2;
    const SLIDE_INTERVAL = 3000;
    
    var nextSlideBtn = document.querySelector("#next");
    var previousSlideBtn = document.querySelector("#previous");
    
    var slideStart = 1;

    var currentSlide = document.querySelector("[data-slide='" + slideStart + "']");
    var lastSlide = -1;

    var forwards = true;
    
    var handler = () => {

        changeSlide();
        slideStart++;

    };

    // var interval = setInterval(handler, SLIDE_INTERVAL);

    // previousSlideBtn.addEventListener("click", (e)=>{
    //     clearInterval(interval);
        
    //     changeSlide();
    //     slideStart--;
    // });

    // nextSlideBtn.addEventListener("click", (e)=>{
    //     clearInterval(interval);
    //     slideStart++;
    //     changeSlide();
    // });


    const changeSlide = ()=>{

        if(slideStart == 0){
            return;
        }

        if(slideStart == (SLIDES_COUNT)){
            slideStart = 1;
            forwards = !forwards;
        };

        currentSlide = document.querySelector("[data-slide='" + slideStart + "']");
        console.log(currentSlide);
        if(currentSlide == null){
            return;
        }
        if(forwards){
            currentSlide.classList.remove("animateBackward");
            currentSlide.classList.add("animateForward");
        }else{
            currentSlide.classList.remove("animateForward");
            currentSlide.classList.add("animateBackward");
        }

        interval = setInterval(handler, SLIDE_INTERVAL);

    }


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