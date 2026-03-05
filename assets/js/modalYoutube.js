document.addEventListener("DOMContentLoaded", () => {
  const videoItems = document.querySelectorAll(".video-item");
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("youtube-player");
  const closeButton = document.querySelector(".close-button");

  // Open modal and play video
  videoItems.forEach((item) => {
    item.addEventListener("click", () => {
      const videoId = item.getAttribute("data-video-id");
      const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      player.src = videoUrl;
      modal.style.display = "flex";
    });
  });

  // Close modal and stop video
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    player.src = ""; // Stop the video
  });

  // Close modal on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      player.src = ""; // Stop the video
    }
  });
});
