const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;
let autoSlideInterval;
let autoSlideActive = true;

const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
    s.style.transition = "transform 0.5s ease";
  });
};

const activateDot = (slide) => {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    ?.classList.add("dots__dot--active");
};

const updateLeftButton = () => {
  btnLeft.style.display = curSlide === 0 ? "none" : "block";
};

const nextSlide = () => {
  curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
  goToSlide(curSlide);
  activateDot(curSlide);
  updateLeftButton();
};

const prevSlide = () => {
  if (curSlide > 0) curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
  updateLeftButton();
};

const init = () => {
  slides.forEach((slide) => (slide.style.userSelect = "none"));
  goToSlide(0);
  activateDot(0);
  updateLeftButton();
  startAutoSlide();
};
init();

// Stop auto slide permanently after user interaction
const stopAutoSlide = () => {
  if (autoSlideActive) {
    clearInterval(autoSlideInterval);
    autoSlideActive = false;
  }
};

// Button navigation
btnRight.addEventListener("click", () => {
  nextSlide();
  stopAutoSlide();
});
btnLeft.addEventListener("click", () => {
  prevSlide();
  stopAutoSlide();
});

// Dot navigation
dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    curSlide = +e.target.dataset.slide;
    goToSlide(curSlide);
    activateDot(curSlide);
    updateLeftButton();
    stopAutoSlide();
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
    stopAutoSlide();
  }
  if (e.key === "ArrowRight") {
    nextSlide();
    stopAutoSlide();
  }
});

// Swipe / Drag
let startX = 0;
let isDragging = false;

slides.forEach((slide) => {
  slide.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    stopAutoSlide();
  });
  slide.addEventListener("touchmove", (e) => e.preventDefault());
  slide.addEventListener("touchend", (e) =>
    handleSwipe(e.changedTouches[0].clientX)
  );

  slide.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    isDragging = true;
    stopAutoSlide();
    e.preventDefault();
  });
  slide.addEventListener("mousemove", (e) => {
    if (isDragging) e.preventDefault();
  });
  slide.addEventListener("mouseup", (e) => {
    if (isDragging) {
      isDragging = false;
      handleSwipe(e.clientX);
    }
  });
  slide.addEventListener("mouseleave", (e) => {
    if (isDragging) {
      isDragging = false;
      handleSwipe(e.clientX);
    }
  });
});

function handleSwipe(endX) {
  const diff = startX - endX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide();
    else prevSlide();
  }
  startX = 0;
}

// Auto slide
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}
