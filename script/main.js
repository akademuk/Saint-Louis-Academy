document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.benefits-item');
    
    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            if (window.innerWidth < 1280) {
                const content = this.querySelector('.benefits-content');
                const isActive = this.classList.contains('active');

                // Close all other open accordion items
                accordionItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('.benefits-content');
                    otherItem.classList.remove('active');
                    otherContent.style.maxHeight = null;
                });

                // Toggle the clicked accordion item
                if (!isActive) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    this.classList.add('active');
                }
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal-discount');
    const closeModalButton = document.querySelector('.modal-discount__close');
    
    // Show modal after 5 seconds
    setTimeout(function() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 5000);

    // Close modal when close button is clicked
    closeModalButton.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });
});


// Swiper slider
document.addEventListener('DOMContentLoaded', function () {
    const swiperElements = document.querySelectorAll('.why-section__slider');

    swiperElements.forEach((swiperElement) => {
        const nextEl = swiperElement.closest('.wrapper').querySelector('[data-swiper-next]');
        const prevEl = swiperElement.closest('.wrapper').querySelector('[data-swiper-prev]');
        
        if (swiperElement) {
            const swiper = new Swiper(swiperElement, {
                slidesPerView: 'auto',
                spaceBetween: 16,
                centeredSlides: false,
                navigation: {
                    nextEl: nextEl,
                    prevEl: prevEl,
                },
                breakpoints: {
                    1280: {
                        spaceBetween: 25
                    },
                }
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const tariffCards = document.querySelectorAll('.tariff-plan__card');

    tariffCards.forEach(card => {
        const showMoreBtn = card.querySelector('.show-more-btn');
        const hiddenItems = card.querySelectorAll('.tariff-plan__card-item.hidden');

        showMoreBtn.addEventListener('click', function () {
            hiddenItems.forEach(item => {
                item.classList.toggle('hidden');
            });
        });
    });
});

