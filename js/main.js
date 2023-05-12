const swiperNewProduct = new Swiper(".new-product", {
    slidesPerView: 7,
    spaceBetween: 0,
    // auto
    // autoplay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    // },
    loop:true,
    // loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 2000,
    breakpoints: {
        // when window width is >= 480px
        120: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1023: {
            slidesPerView: 7,
            spaceBetween: 0
        }
    },
});

const swiperDealProduct = new Swiper(".deals-product", {
    slidesPerView: 7,
    spaceBetween: 0,
    // auto
    // autoplay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    // },
    loop:true,
    // loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 2000,
    breakpoints: {
        // when window width is >= 480px
        120: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    },
});

const swiperBanner3 = new Swiper(".banner-3-product", {
    slidesPerView: 7,
    spaceBetween: 0,
    // auto
    // autoplay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    // },
    loop:true,
    // loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 2000,
    breakpoints: {
        // when window width is >= 480px
        120: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
});

const swiperBanner2 = new Swiper(".banner-2-product", {
    slidesPerView: 7,
    spaceBetween: 0,
    // auto
    // autoplay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    // },
    loop:true,
    // loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 2000,
    breakpoints: {
        // when window width is >= 480px
        120: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        1023: {
            slidesPerView: 2,
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

const swiperCategories = new Swiper(".categories-product", {
    slidesPerView: 9,
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
            spaceBetween: 0,
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1023: {
            slidesPerView: 9,
            spaceBetween: 0,
        }
    },
});

const swiperSectionProduct = new Swiper(".section-product", {
    slidesPerView: 7,
    spaceBetween: 0,
    // auto
    // autoplay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    // },
    loop:true,
    // loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 2000,
    breakpoints: {
        // when window width is >= 480px
        120: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1023: {
            slidesPerView: 6,
            spaceBetween: 0
        }
    },
});