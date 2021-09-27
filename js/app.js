// Global variables
let container = document.getElementsByClassName("jumbo-slider__container")[0],
  jumboSliderSlidesArry = document.getElementsByClassName(
    "jumbo-slider__slide"
  ),
  jumboSliderElipsisCirclesArry = document.getElementsByClassName(
    "jumbo-slider__circle"
  ),
  jumboSliderNavLinksArry =
    document.getElementsByClassName("jumbo-slider__link"),
  activeSlide = 1,
  slideRunTime = 6000;

// Functions
let loadFirstSlide = () => {
  jumboSliderSlidesArry[0].classList.add("jumbo-slider__slide--active");
};

let highLightFirstLink = () => {
  jumboSliderNavLinksArry[activeSlide - 1].classList.add(
    "jumbo-slider__link--active"
  );
};

let updateNavOnSlideChange = () => {
  console.log(`Current: ${activeSlide}`);
};

let startSlider = () => {
    let test = 1;
  setInterval(() => {
    console.log(test);
    test++;
  }, 6000)
};

let init = () => {
  loadFirstSlide();
  highLightFirstLink();
  updateNavOnSlideChange();
  startSlider();

  // let startSlider = () => {

  // };
};

// init();
