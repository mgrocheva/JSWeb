let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let option = this.nextElementSibling;
    if (option.style.display === "block") {
      option.style.display = "none";
    } else {
      option.style.display = "block";
    }
  });
}


