let swiper = new Swiper(".swiper", {
    cssMode: true,
    spaceBetween: 24,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
