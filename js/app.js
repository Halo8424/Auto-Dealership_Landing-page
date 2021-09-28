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

let deactivateFirstSlide = ()=>{jumboSliderSlidesArry[0].classList.remove("jumbo-slider__slide--active")};

let activateSecoundSlide = ()=>{jumboSliderSlidesArry[1].classList.add("jumbo-slider__slide--active")};

let updateNavOnSlideChange = (activeSlide) => {
  console.log(`Current: ${activeSlide}`);
  for(let i = 0; i < jumboSliderSlidesArry.length; i++){
    jumboSliderNavLinksArry[i].classList.remove("jumbo-slider__link--active");
    jumboSliderElipsisCirclesArry[i].classList.remove("jumbo-slider__circle--filled");
  }
  jumboSliderNavLinksArry[activeSlide-1].classList.add("jumbo-slider__link--active");
  jumboSliderElipsisCirclesArry[activeSlide-1].classList.add("jumbo-slider__circle--filled");
};





let startSlider = () => {  
  setInterval(() => {
   console.log(`Current: ${activeSlide}`)
   deactivateFirstSlide();
   activateSecoundSlide();
   
   
    if(activeSlide < jumboSliderSlidesArry.length){
        activeSlide++;
        updateNavOnSlideChange(activeSlide);
    } else{
        activeSlide = 1
    };

    container.appendChild(jumboSliderSlidesArry[0].cloneNode([true]));
    container.removeChild(jumboSliderSlidesArry[0]);
   
  }, 6000)
};

let init = () => {
  loadFirstSlide();
  highLightFirstLink();
//   updateNavOnSlideChange();
  startSlider();

};

// init();
