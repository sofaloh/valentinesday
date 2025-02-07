function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; 
    heart.style.left = Math.random() * 100 + "vw"; 
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 
    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}
setInterval(createHeart, 300); 
let audio = new Audio ("George_Michael_-_Careless_Whisper_b128f0d300 (mp3cut.net).mp3");
let audioStopped = false;
  document.addEventListener("click", function () {
    if (!audioStopped && audio.paused) {
      audio.play();
      audio.loop = true;
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    let img = document.getElementById("clickableImage");
    let clickCount = 0;
    let scale = 1; 
    img.addEventListener("click", function () {
        clickCount++;

        if (clickCount < 4) {
            scale += 0.2; 
            img.style.transform = `scale(${scale})`;
        } else {
          if (!audioStopped){
          audio.pause();
          audio.currentTime = 0;
          audioStopped = true;
          }
          let video = document.createElement("video");
          video.src = "0206(1).mp4";
          video.id = "vidosik";
          video.controls = false;
          video.autoplay = true;
          video.style.width = "130px";
          video.loop = true;
          img.replaceWith(video);
          let p = document.getElementById("label");
          p.style.visibility = "visible";
          let imaga = document.getElementById("imaga");
          imaga.style.visibility = "visible";
          let label = document.getElementById("nazmi");
          label.style.visibility = "hidden";
        }
    });
});

