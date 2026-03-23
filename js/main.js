document.addEventListener("DOMContentLoaded", (event) => {
  let allPlayBtn = document.querySelectorAll(".play-btn");
  let videoContainer = document.querySelector(".modal-video");

  allPlayBtn.forEach((e) => {
    e.addEventListener("click", function () {
      let videoLink = e.getAttribute("data-video");

      addVideo(videoContainer, videoLink, "video/mp4");
      console.log(e)

      videoContainer.classList.add("active");
    });
  });

  function addVideo(element, src, type) {
    element.replaceChildren();

    const video = document.createElement("video");
    video.classList.add("animate__animated");
    video.classList.add("animate__slideInUp");

    video.autoplay = true;
    video.controls = true;
    video.id = "video";
    video.type = type;
    video.src = src;
    video.currentTime = 0;
    
    element.appendChild(video);

    video.play();
  }

  function hideVideo() {
    videoContainer.replaceChildren();
    videoContainer.classList.remove("active");
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hideVideo();
    }
  });

  document.addEventListener("mouseup", function (e) {
    if (!video.contains(e.target)) {
      hideVideo();
    }
  });
});
