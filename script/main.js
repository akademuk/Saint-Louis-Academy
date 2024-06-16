document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.benefits-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            if (window.innerWidth < 1280) {
                const content = this.nextElementSibling;
                const parentItem = this.closest('.benefits-item');

                // Close all other open accordion items
                accordionHeaders.forEach(otherHeader => {
                    const otherContent = otherHeader.nextElementSibling;
                    const otherParentItem = otherHeader.closest('.benefits-item');
                    if (otherContent !== content) {
                        otherContent.style.maxHeight = null;
                        otherParentItem.classList.remove('active');
                    }
                });

                // Toggle the clicked accordion item
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    parentItem.classList.remove('active');
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    parentItem.classList.add('active');
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
                navigation: {
                    nextEl: nextEl,
                    prevEl: prevEl,
                },
                breakpoints: {
                    1280: {
                        spaceBetween: 25,
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

