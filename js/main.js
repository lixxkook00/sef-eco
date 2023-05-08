const swiperNewProduct = new Swiper(".new-product", {
    slidesPerView: 7,
    spaceBetween: 0,
    // auto
    // autoplay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    // },
    loop:true,
    loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 2000,
    breakpoints: {
        // when window width is >= 480px
        120: {
            slidesPerView: 2,
            spaceBetween: 2
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1023: {
            slidesPerView: 7,
            spaceBetween: 20
        }
    },
});


const swiperBlogs = new Swiper(".swiper-blogs", {
    slidesPerView: 7,
    spaceBetween: 0,
    // auto
    // autoplay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    // },
    loop:true,
    loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 2000,
    breakpoints: {
        // when window width is >= 480px
        120: {
            slidesPerView: 1,
            spaceBetween: 2
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1023: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    },
});