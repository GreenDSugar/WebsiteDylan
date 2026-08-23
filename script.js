document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. Mobile Hamburger Navigation
       ========================================== */
    /* ==========================================
   1. Mobile Hamburger Navigation
   ========================================== */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const menuOverlay = document.getElementById('menuOverlay');

function closeMobileMenu() {
    if (navMenu) navMenu.classList.remove('active');
    if (menuOverlay) menuOverlay.classList.remove('active');
    const icon = hamburgerBtn ? hamburgerBtn.querySelector('i') : null;
    if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    }
}

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        if (menuOverlay) menuOverlay.classList.toggle('active');
        
        const icon = hamburgerBtn.querySelector('i');
        if (icon) {
            if (isOpen) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        }
    });

    // Close menu when clicking outside on the dark overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

    /* ==========================================
       2. Diensten Interactive Cards
       ========================================== */
    const cards = document.querySelectorAll('.card01');
    const imageContainer = document.getElementById('dienstenImage');

    if (cards.length && imageContainer) {
        // Load initial active card image
        const activeCard = document.querySelector('.card01.active') || cards[0];
        if (activeCard && activeCard.dataset.image) {
            imageContainer.style.backgroundImage = `url('${activeCard.dataset.image}')`;
        }

        // Add event handlers to change background dynamically
        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');

                const newImage = card.dataset.image;
                if (newImage) {
                    imageContainer.style.backgroundImage = `url('${newImage}')`;
                }
            });
        });
    }

    /* ==========================================
       3. Project Preview Modal
       ========================================== */
    const modal = document.getElementById('preview');
    const modalImg = document.getElementById('img');
    const modalTitle = document.getElementById('modalTitle');
    const modalInfo = document.getElementById('info');
    const closeModal = document.getElementById('closeModal');
    const projectItems = document.querySelectorAll('.projectenPage .item');

    if (modal && projectItems.length) {
        projectItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const title = item.querySelector('h3');
                const infoText = item.dataset.info || "Bekijk hier de details van dit project.";

                if (img) modalImg.src = img.src;
                if (title) modalTitle.textContent = title.textContent;
                if (modalInfo) modalInfo.textContent = infoText;

                modal.classList.add('active');
            });
        });

        // Close modal on X button click
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        // Close modal when clicking dark overlay background
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});