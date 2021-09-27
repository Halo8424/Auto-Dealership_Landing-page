let init = () =>{
    let container = document.getElementsByClassName("jumbo-slider__container")[0],
    jumboSliderSlidesArry = document.getElementsByClassName("jumbo-slider__slide"),
    jumboSliderElipsisCirclesArry = document.getElementsByClassName("jumbo-slider__circle"),
    jumboSliderNavLinksArry = document.getElementsByClassName("jumbo-slider__link"),
    activeSlide = 1,
    slideRunTime = 6000;

    jumboSliderSlidesArry[0].classList.add("jumbo-slider__slide--active");

    jumboSliderNavLinksArry[activeSlide-1].classList.add("jumbo-slider__link--active");
};

init();