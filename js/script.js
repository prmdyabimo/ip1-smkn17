

// menu button
    const openNavMenu = document.querySelector('.open-nav-menu');
    const closeNavMenu = document.querySelector('.close-nav-menu');
    const NavMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay')
    const mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // ketika background di klik maka menu akan tertutup
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
        NavMenu.classList.toggle("open");
        // ketika dibuka background menjadi gelap
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }

    NavMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            // if menuItemHasChildren is already espanded, collapse it
            if (menuItemHasChildren.classList.contains('active')) {
                collapseSubMenu();
            } else {
                // collapse existing espanded menuItemHasChildren
                if (NavMenu.querySelector('.menu-item-has-children.active')) {
                    collapseSubMenu();
                }
                    // expand new menuItemHasChildren
                    menuItemHasChildren.classList.add('active')
                    const subMenu = menuItemHasChildren.querySelector('.sub-menu');
                    subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
                }
            };
        });
        function collapseSubMenu() {
            NavMenu.querySelector('.menu-item-has-children.active .sub-menu')
            .removeAttribute('style');
            NavMenu.querySelector('.menu-item-has-children.active')
            .classList.remove('active')
        }

        function resizeFix() {
            // if navMenu is open, close it
            if (NavMenu.classList.contains('open')) {
                toggleNav();
            }
            // if menuHasItemChildren is expanded, collapse it
            if (NavMenu.querySelector('.menu-item-has-children.active')) {
                collapseSubMenu();
            }
        }

        window.addEventListener('resize', function() {
            if (this.innerWidth > mediaSize) {
                resizeFix();
            }
        })

// slide image
const myslide = document.querySelectorAll('.carousel-inner');
const dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000)
function autoslide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer)
    timer = setInterval(autoslide, 8000)
}

function slidefun(n) {
    let i;
    for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove('aktif')
    }
    if (n > myslide.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('aktif')
}

// fixed top navbar
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-main");
    header.classList.toggle("sticky", window.scrollY > 0);
})


window.addEventListener("scroll", function () {
    const header1 = document.querySelector(".header1");
    header1.classList.toggle("hilang", window.scrollY > 0);
})



// scroll to top
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("on");
    } else {
        toTop.classList.remove("on");
    }
}) 


// navbar hilang
const hilang = document.querySelector('.header1');

window.addEventListener('scroll', () => {
    if (window.pageYOffset < 100) {
        hilang.classList.remove("muncul");
    } else {
        hilang.classList.add("muncul");
    }
}) 


// testimoni
// slide testimonial
var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
        el: ".swiper-pagination",
        // type: "fraction",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    var appendNumber = 4;
    var prependNumber = 1;
    document
        .querySelector(".prepend-2-slides")
        .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
        });
    document
        .querySelector(".prepend-slide")
        .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
        });
    document
        .querySelector(".append-slide")
        .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
        });
    document
        .querySelector(".append-2-slides")
        .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
				});
				
	

// const btn = document.querySelectorAll('btn');
// const slider9 = document.getElementById('#slider7');

// btn[0].onclick = function() {
// 	slider9.style.transform = "translate(0px)";
// }

// btn[1].onclick = function() {
// 	slider9.style.transform = "translate(-800px)";
// }

// btn[2].onclick = function() {
// 	slider9.style.transform = "translate(-1600px)";
// }

// btn[3].onclick = function() {
// 	slider9.style.transform = "translate(-2400px)";
// }

// btn[4].onclick = function() {
// 	slider9.style.transform = "translate(-3200px)";
// }


// slick slider js

// dibawah slider gambar
function openCity(cityName) {
	var i;
	var x = document.getElementsByClassName("city");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	document.getElementById(cityName).style.display = "block";  
}


