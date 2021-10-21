const burgerBtn = document.getElementById('mobile-nav--btn');
const mobileMenu = document.querySelector('.nav-menu--mobile');
const overlay = document.getElementById('overlay');
const nav = document.querySelector('header nav');

overlay.addEventListener('click', toggleMobileMenu);
burgerBtn.addEventListener('click', toggleMobileMenu);
nav.addEventListener('click', e => {
	if (e.target.tagName === 'A') {
		setActivePage(e.target);
	}
});

function toggleMobileMenu() {
	if (burgerBtn.textContent === 'menu') {
		burgerBtn.textContent = 'close';
		overlay.classList.remove('hidden');
		mobileMenu.classList.remove('hidden');
	} else {
		burgerBtn.textContent = 'menu';
		overlay.classList.add('hidden');
		mobileMenu.classList.add('hidden');
	}
}

function setActivePage(el) {
	const menuItem = el.textContent;
	const active = document.querySelectorAll('.nav-link--active');
	console.log(menuItem, active[0].textContent);

	if (menuItem !== active[0].textContent) {
		const toMakeActive = document.querySelectorAll(
			'.' + menuItem.toLowerCase()
		);
		const currentActive = document.querySelectorAll('.nav-link--active');

		toMakeActive.forEach(link => {
			link.classList.add('nav-link--active');
		});
		currentActive.forEach(link => {
			link.classList.remove('nav-link--active');
		});
	}
}
