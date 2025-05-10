document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('closeBtn');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        closeBtn?.addEventListener('click', () => {
            menu.classList.remove('show');
        });
    }

    // // Carousel Logic
    // const carousel = document.querySelector('.carousel');
    // const prevBtn = document.getElementById('prevBtn');
    // const nextBtn = document.getElementById('nextBtn');

    // if (carousel && prevBtn && nextBtn) {
    //     const carouselItems = Array.from(carousel.children);
    //     const itemWidth = carouselItems[0].offsetWidth + parseFloat(getComputedStyle(carouselItems[0]).marginRight);
    //     const totalItems = carouselItems.length;
    //     const cardPerView = Math.round(carousel.offsetWidth / itemWidth);
    //     const maxIndex = totalItems;

    //     // Duplicate items for infinite scrolling
    //     carouselItems.slice(-cardPerView).reverse().forEach(card => {
    //         carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    //     });

    //     carouselItems.slice(0, cardPerView).forEach(card => {
    //         carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    //     });

    //     // Adjust carousel width
    //     carousel.style.width = `${itemWidth * (totalItems + cardPerView * 2)}px`;

    //     let index = cardPerView;

    //     function updateCarousel() {
    //         const offset = -index * itemWidth;
    //         carousel.style.transform = `translateX(${offset}px)`;
    //         checkButtons();
    //     }

    //     function checkButtons() {
    //         nextBtn.disabled = index >= maxIndex + cardPerView;
    //         prevBtn.disabled = index <= 0;
    //     }

    //     nextBtn.addEventListener('click', () => {
    //         if (index < maxIndex + cardPerView) {
    //             index++;
    //             updateCarousel();
    //         } else {
    //             // Instant jump to the start without animation
    //             carousel.style.transition = 'none';
    //             index = cardPerView;
    //             updateCarousel();
    //             requestAnimationFrame(() => {
    //                 requestAnimationFrame(() => {
    //                     carousel.style.transition = 'transform 0.5s ease-in-out';
    //                 });
    //             });
    //         }
    //     });

    //     prevBtn.addEventListener('click', () => {
    //         if (index > 0) {
    //             index--;
    //             updateCarousel();
    //         } else {
    //             // Instant jump to the end without animation
    //             carousel.style.transition = 'none';
    //             index = maxIndex + cardPerView - 1;
    //             updateCarousel();
    //             requestAnimationFrame(() => {
    //                 requestAnimationFrame(() => {
    //                     carousel.style.transition = 'transform 0.5s ease-in-out';
    //                 });
    //             });
    //         }
    //     });

    //     // Initial setup
    //     updateCarousel();
    // }

    // Select carousel elements
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Track the current position
let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

// Set the width of the carousel item (adjust if necessary)
const itemWidth = document.querySelector('.carousel-item').clientWidth;

// Function to update carousel position
function updateCarouselPosition() {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Infinite scrolling logic for next button
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 4) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first item
    }
    updateCarouselPosition();
});

// Infinite scrolling logic for previous button
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 4; // Loop back to the last item
    }
    updateCarouselPosition();
});

// Initialize carousel position
updateCarouselPosition();

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.classList.contains('open');

        if (isOpen) {
            content.classList.remove('open');
            header.classList.remove('active');
        } else {
            // Close other accordions if needed (optional)
            document.querySelectorAll('.accordion-content.open').forEach(openItem => {
                openItem.classList.remove('open');
                openItem.previousElementSibling.classList.remove('active');
            });

            content.classList.add('open');
            header.classList.add('active');
        }
    });
});

});
