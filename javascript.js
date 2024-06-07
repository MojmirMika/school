document.addEventListener('DOMContentLoaded', () => {
    fetch('get_data.php')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.home_back .container .text p:nth-child(2)').innerText = `Cena: ${data.cena} Kč`;
            document.querySelector('.home_back .container .text p:nth-child(3)').innerText = `Spotřeba: ${data.spotreba} litru na 100 km`;
            document.querySelector('.home_back .container .text p:nth-child(4)').innerText = `Ujeté kilometry: ${data.kilometry} km`;
            document.querySelector('.home_back .container .text p:nth-child(5)').innerText = `Výkon: ${data.vykon} koní`;
            document.querySelector('.home_back .container .text p:nth-child(6)').innerText = `Palivo: ${data.palivo}`;
            document.querySelector('.home_back .container .text p:nth-child(7)').innerText = `Barva: ${data.barva}`;
        })
        .catch(error => console.error('Error:', error));
});
