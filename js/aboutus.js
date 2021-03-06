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

window.addEventListener('resize', function () {
	if (this.innerWidth > mediaSize) {
		resizeFix();
	}
})

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