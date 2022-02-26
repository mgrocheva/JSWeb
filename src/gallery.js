let imageIndex = 1;
showImages(imageIndex);

function plusImages(n) {
  showImages(imageIndex += n);
}

function currentImage(n) {
  showImages(imageIndex = n);
}

function showImages(n) {
  let i;
  let images = document.getElementsByClassName("myImages");
  let slides = document.getElementsByClassName("demo");
  if (n > images.length) {imageIndex = 1}
  if (n < 1) {imageIndex = images.length}
  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
  }
  images[imageIndex-1].style.display = "block";
  slides[imageIndex-1].className += " active";
}