document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.icon'); // Najdeme ikonu

      // Přepínání aktivní třídy
      header.classList.toggle('active');
      content.classList.toggle('open');

      // Změna textu ikony
      if (content.classList.contains('open')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          icon.textContent = '-'; // Změní se na "-"
      } else {
          content.style.maxHeight = 0;
          icon.textContent = '+'; // Změní se zpět na "+"
      }
  });
});


let currentIndex = 0;
const images = ["images/areal1.jpg", "images/areal2.jpg", "images/areal3.jpg", "images/areal4.jpg", "images/areal5.jpg", "images/areal6.jpg", "images/areal7.jpg"];

function openGallery(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[currentIndex];
    document.getElementById("lightbox").style.display = "flex";
}

function closeGallery(event) {
    if (event.target.classList.contains("lightbox") || event.target.classList.contains("close")) {
        document.getElementById("lightbox").style.display = "none";
    }
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("lightbox-img").src = images[currentIndex];
}

