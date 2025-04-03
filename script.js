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


// Inicializujeme index aktuálně zobrazeného obrázku
let currentIndex = 0;

// Pole s cestami k obrázkům v galerii
const images = [
    "images/areal1.jpg",
    "images/areal2.jpg",
    "images/areal3.jpg",
    "images/areal4.jpg",
    "images/areal5.jpg",
    "images/areal6.jpg",
    "images/areal7.jpg"
];

/**
 * Otevře galerii a zobrazí kliknutý obrázek.
 * @param {number} index - Index obrázku, na který uživatel klikl.
 */
function openGallery(index) {
    currentIndex = index; // Nastaví index aktuálního obrázku
    document.getElementById("lightbox-img").src = images[currentIndex]; // Změní zdroj obrázku
    document.getElementById("lightbox").style.display = "flex"; // Zobrazí lightbox
}

/**
 * Zavře galerii, pokud uživatel klikne mimo obrázek nebo na tlačítko zavření.
 * @param {Event} event - Událost kliknutí.
 */
function closeGallery(event) {
    // Podmínka kontroluje, zda uživatel klikl na lightbox nebo na tlačítko zavření
    if (event.target.classList.contains("lightbox") || event.target.classList.contains("close")) {
        document.getElementById("lightbox").style.display = "none"; // Skryje lightbox
    }
}

/**
 * Posouvá obrázky v galerii dopředu nebo dozadu.
 * @param {number} direction - Směr posunu (1 = vpřed, -1 = zpět).
 */
function changeImage(direction) {
    currentIndex += direction; // Posune index o daný směr

    // Pokud se index dostane pod nulu, skočí na poslední obrázek
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    // Pokud index překročí maximální hodnotu, skočí zpět na první obrázek
    else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Aktualizuje src obrázku v lightboxu
    document.getElementById("lightbox-img").src = images[currentIndex];
}


