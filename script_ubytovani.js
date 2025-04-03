document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});

let currentIndex = 0;
let currentCategory = '';
const galleryImages = {
    apartment: ["images/apartman1.jpg", "images/apartman3.jpg", "images/apartman5.jpg","images/apartman2.jpg","images/apartman4.jpg"],
    room: ["images/pokoj1.jpg", "images/pokoj2.jpg", "images/apartman4.jpg"],

};

function openGallery(index, category) {
    currentIndex = index;
    currentCategory = category;
    document.getElementById("lightbox-img").src = galleryImages[category][index];
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
        currentIndex = galleryImages[currentCategory].length - 1;
    } else if (currentIndex >= galleryImages[currentCategory].length) {
        currentIndex = 0;
    }
    document.getElementById("lightbox-img").src = galleryImages[currentCategory][currentIndex];
}