// Custom Cursor
let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = (dets.x - 125) + "px";
  cursorBlur.style.top = (dets.y - 125) + "px";
});

// GSAP ScrollTrigger Animations
gsap.registerPlugin(ScrollTrigger);

// Animate nav bar on scroll
gsap.to("#nav", {
  backgroundColor: "black",
  height: "90px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }
});

// Animate footer on scroll
gsap.to("#footer", {
  backgroundColor: "rgba(165, 42, 42, 0.2)",
  height: "40px",
  duration: 1,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    start: "bottom 30%",
    end: "bottom 10%",
    scrub: 1
  }
});

// Animate background color of #main as user scrolls
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -80%",
    scrub: 2
  }
});

// Feature Card Animation
document.querySelectorAll('.feature-card').forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: index * 0.2,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "top 60%",
      scrub: 3,
    }
  });
});

// Cursor scale on hover for elements
const hoverables = document.querySelectorAll("h4, button, .feature-card");

hoverables.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(2)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
  });
});
