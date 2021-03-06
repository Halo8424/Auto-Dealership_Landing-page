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
  slideRunTime = 8000;

// Functions

let loadFirstSlide = () => {
  jumboSliderSlidesArry[0].classList.add("jumbo-slider__slide--active");
};

let highLightFirstLink = () => {
  jumboSliderNavLinksArry[activeSlide - 1].classList.add(
    "jumbo-slider__link--active"
  );
};

let deactivateFirstSlide = () => {
  jumboSliderSlidesArry[0].classList.remove("jumbo-slider__slide--active");
};

let activateSecoundSlide = () => {
  jumboSliderSlidesArry[1].classList.add("jumbo-slider__slide--active");
};

let removeActiveAndFilledClass = () => {
  for (let i = 0; i < jumboSliderSlidesArry.length; i++) {
    jumboSliderNavLinksArry[i].classList.remove("jumbo-slider__link--active");
    jumboSliderElipsisCirclesArry[i].classList.remove(
      "jumbo-slider__circle--filled"
    );
  }
};

let addActiveAndFilledClass = () => {
  jumboSliderNavLinksArry[activeSlide - 1].classList.add(
    "jumbo-slider__link--active"
  );
  jumboSliderElipsisCirclesArry[activeSlide - 1].classList.add(
    "jumbo-slider__circle--filled"
  );
};

let updateNavOnSlideChange = (activeSlide) => {
  removeActiveAndFilledClass();
  addActiveAndFilledClass(activeSlide);
};

let startSlider = () => {
  setInterval(() => {
    deactivateFirstSlide();
    activateSecoundSlide();

    if (activeSlide < jumboSliderSlidesArry.length) {
      activeSlide++;
      updateNavOnSlideChange(activeSlide);
    } else {
      activeSlide = 1;
      updateNavOnSlideChange(activeSlide);
    }

    container.appendChild(jumboSliderSlidesArry[0].cloneNode([true]));
    container.removeChild(jumboSliderSlidesArry[0]);
  }, slideRunTime);
};

let init = () => {
  loadFirstSlide();
  highLightFirstLink();
  startSlider();
};

init();
