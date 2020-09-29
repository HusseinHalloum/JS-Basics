var imgs = Array.from(document.querySelectorAll(".img"));

imgs.forEach((img, i) => {
    img.addEventListener('mouseover', function () {
      img.src = "images/image" + (i + 1) + "_2.jpg";
    });
  });