const button = document.getElementById("imageBtn");
const counterElement = document.getElementById("counter");

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

  counter++;
  counterElement.textContent = `Images Changed: ${counter}`;
});

fullscreenBtn.addEventListener("click", function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

// document.body.style.transition = "background-image 0.5s ease-in-out";
