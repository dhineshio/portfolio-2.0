// BG SCROLLING ANIMATION
/* Set width of all animated text to match container */
let parent = document.querySelectorAll(".animate-text");
for (let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px";
}

// ! SCROLL TITLE ANIMATION TRIGGER
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var firstPageHeight = document.querySelector(".header").offsetHeight;
  var secondPageThreshold = firstPageHeight;
  // Check if the scroll position is beyond the threshold for the second page
  if (scrollPosition >= secondPageThreshold) {
    const spans = document.querySelectorAll(".title span");
    spans.forEach((span, idx) => {
      if (!span.classList.contains("active")) {
        // Initial animation
        setTimeout(() => {
          span.classList.add("active");
        }, 750 * (idx + 1));
      }
    });
    // Remove the scroll event listener once the animation starts
    window.removeEventListener("scroll", arguments.callee);
  }
});
