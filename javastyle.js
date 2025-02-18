// This content is used for an image slider with three images on a site. (Start)
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-image");

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  currentIndex = index;
  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-slide"
  ).style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
  currentIndex += direction;
  showSlide(currentIndex);
}
setInterval(() => {
  changeSlide(1);
}, 3000);
// (Stop)

// Show the button when the user scrolls down
window.onscroll = function () {
  let scrollBtn = document.getElementById("scrollUp");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top when the button is clicked
document.getElementById("scrollUp").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Gallery

// JavaScript to handle the gallery image clicks and modal
let currentImageIndex = 0;
const galleryImages = document.querySelectorAll(".gallery-item img");

// Function to open modal with the clicked image
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentImageIndex = index;
    openModal(img.src);
  });
});

function openModal(src) {
  document.getElementById("image-modal").style.display = "block";
  document.getElementById("modal-img").src = src;
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}

// Function to navigate to the next or previous image
function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  } else if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }
  document.getElementById("modal-img").src = galleryImages[currentImageIndex].src;
}

// Slider animation handling
// Get the slider track element
const sliderTrack = document.querySelector(".slider-track");

// Variable to store animation state
let isPaused = false;

// Function to pause the animation
function pauseAnimation() {
  if (!isPaused) {
    sliderTrack.style.animationPlayState = "paused";
    isPaused = true;
  }
}

// Function to resume the animation
function resumeAnimation() {
  if (isPaused) {
    sliderTrack.style.animationPlayState = "running";
    isPaused = false;
  }
}

// Add event listeners to each image
const sliderImages = document.querySelectorAll(".slider-track img");
sliderImages.forEach((img) => {
  img.addEventListener("click", pauseAnimation);
  img.addEventListener("mouseleave", resumeAnimation);
});
