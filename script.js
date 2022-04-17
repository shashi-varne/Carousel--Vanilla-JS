const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

const setSlidePosition = (slide, index) => {
  slide.style.left = `${index * slideWidth}px`;
};
slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide) => {
  if (!targetSlide) return;
  console.log(targetSlide.style.left);
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const udpateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(currentSlide, nextSlide);

  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  udpateDots(currentDot, nextDot);
});

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(currentSlide, prevSlide);

  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  udpateDots(currentDot, prevDot);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target;
  if (!targetDot) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => {
    console.log(dot, targetDot);
    return dot === targetDot;
  });
  const targetSlide = slides[targetIndex];
  //   if (targetIndex === 0) {
  //     prevButton.classList.add("hide-button");
  //     nextButton.classList.remove("hide-button");
  //   } else if (targetIndex === slides.length - 1) {
  //     prevButton.classList.remove("hide-button");
  //     nextButton.classList.add("hide-button");
  //   } else {
  //     prevButton.classList.remove("hide-button");
  //     nextButton.classList.remove("hide-button");
  //   }

  moveToSlide(currentSlide, targetSlide);
  udpateDots(currentDot, targetDot);
});
