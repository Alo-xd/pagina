const menuData = {
    tacos: ["Taco de camaron"],
    antojitos: ["Hotdogs", "Alitas", "Nachos", "hamburguesas","Papas","Pizzas"],
    paquetes: ["2 Hotdogs con papas", "Micheladas y cantaritos", "Un tritón y 4 shots gratis", "1 Cubeta + 1 Nachos"],
    cervezas: ["Modelo", "Corona extra", "Victoria","Cantarito G","Caguamas"],
    cocteles: ["Tostadas de camaron con pulpo"],
    especialidades: ["1 Cubeta","Pitufos"],
};

const modal = document.getElementById('menu-modal');
const modalTitle = document.getElementById('modal-title');
const menuList = document.getElementById('menu-list');
const closeButton = document.querySelector('.close-button');
const categoryCards = document.querySelectorAll('.categoria-card');

// Función para abrir 
function openModal(category) {

    menuList.innerHTML = '';

    modalTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    menuData[category].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        menuList.appendChild(li);
    });

    modal.style.display = 'flex';
}

// Función para cerrar
function closeModal() {
    modal.style.display = 'none';
}

categoryCards.forEach(card => {
    card.addEventListener('click', (event) => {
        event.preventDefault();
        const category = card.getAttribute('data-category');
        openModal(category);
    });
});

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});