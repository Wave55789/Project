
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const recentMentorContent = document.querySelector(".recent-mentor-content");

let scrollAmount = 300;

arrowLeft.addEventListener("click", () => {
  recentMentorContent.scrollLeft -= scrollAmount;
});

arrowRight.addEventListener("click", () => {
  recentMentorContent.scrollLeft += scrollAmount;
});
