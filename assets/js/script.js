// var swiper = new Swiper(".mySwiper", {
//       slidesPerView: 4,
//       spaceBetween: 50,
//       pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 8,  // Show 4 slides at a time
        spaceBetween: 40,  // Space between slides
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: false,  // Set to true if you want infinite looping
        breakpoints: {
            768: {
                slidesPerView: 8,
            },
            576: {
                slidesPerView: 5,
            },
            320: {
                slidesPerView: 2,
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper_2", {
        slidesPerView: 5,  // Show 4 slides at a time
        spaceBetween: 20,  // Space between slides
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: false,  // Set to true if you want infinite looping
        breakpoints: {
            768: {
                slidesPerView: 5,
            },
            576: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        }
    });
});

function side_nav(){
    var side=document.getElementById("side-nav").style.display="block";
     document.body.classList.add("off-scroll");
}
function side_toggle(){
    var side_tog=document.getElementById("side-nav").style.display="none";
    document.body.classList.remove("off-scroll");
}