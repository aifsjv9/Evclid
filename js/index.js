document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.burger').classList.toggle('burger_active')
        document.querySelector('.drop-menu__list').classList.toggle('drop-menu_active')
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        autoplay: {
            delay: 5000,
          },
      
    });

    new Accordion('.accordion-container');

})

