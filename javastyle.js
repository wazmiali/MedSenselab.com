// This containt is use to Image slider for a three images in a site.  (Start)
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
      if (index < 0) {
            index = slides.length - 1;
      } else if (index >= slides.length) {
            index = 0;
      }
      currentIndex = index;
      const offset = -currentIndex * 100;
      document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
      currentIndex += direction;
      showSlide(currentIndex);
}
setInterval(() => {
      changeSlide(1);
}, 3000);

// (Stop)


// Show the button when user scrolls down
window.onscroll = function () {
      let scrollBtn = document.getElementById("scrollUp");
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          scrollBtn.style.display = "block";
      } else {
          scrollBtn.style.display = "none";
      }
  };
  
  // Scroll to top when button is clicked
  document.getElementById("scrollUp").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

