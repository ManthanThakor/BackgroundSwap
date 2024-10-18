const button = document.getElementById("imageBtn");
const resetBtn = document.getElementById("resetBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const fullscreenStatus = document.getElementById("fullscreenStatus");
const counterElement = document.getElementById("counter");
const currentImageURLElement = document.getElementById("currentImageURL");

let counter = 0;

button.addEventListener("click", function () {
  const images = [
    "https://images3.alphacoders.com/135/1350069.jpeg",
    "https://artfiles.alphacoders.com/111/111042.jpg",
    "https://getwallpapers.com/wallpaper/full/4/d/d/271136.jpg",
    "https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp",
    "https://getwallpapers.com/wallpaper/full/f/1/0/75230.jpg",
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];
  console.log(
    `Random Value Index for array: ${Math.floor(Math.random() * images.length)}`
  );
  console.log(`Image Array Length ${images.length}`);
  console.log(`Random value : ${Math.floor(Math.random() * 4)}`);

  document.body.style.backgroundImage = `url(${randomImage})`;
  currentImageURLElement.textContent = `Current Image URL: ${randomImage}`;

  counter++;
  counterElement.textContent = `Images Changed: ${counter}`;
});

resetBtn.addEventListener("click", function () {
  counter = 0;
  counterElement.textContent = `Images Changed: ${counter}`;
});

fullscreenBtn.addEventListener("click", function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    fullscreenStatus.textContent = "Fullscreen mode is active";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      fullscreenStatus.textContent = "Exited fullscreen mode";
    }
  }
});
