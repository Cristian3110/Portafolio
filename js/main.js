// Modo Oscuro

function cambio() {
	const sol = document.getElementById('sol');
	const luna = document.getElementById('luna');
	let palabras = document.getElementById('letras');

	if (sol.style.display === 'none' || luna.style.display === 'inline') {
		luna.style.display = 'none';
		sol.style.display = 'inline';
		palabras.innerHTML = 'Light Mode';
	} else {
		luna.style.display = 'inline';
		sol.style.display = 'none';
		palabras.innerHTML = 'Dark Mode';
	}
}

// navbar

// scroll navbar

//seleccion activada

const sections = document.querySelectorAll('section');
const header = document.querySelectorAll('header');
const footer = document.querySelectorAll('footer');

const options = {
	threshold: 0.6,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
	entries.forEach((entry) => {
		const idItem = entry.target.id;
		const enlaces = document.querySelectorAll('a');

		if (entry.isIntersecting & (idItem === 'footer')) {
			enlaces[4].classList.remove('active');
		}
		if (entry.isIntersecting & (idItem === 'home')) {
			enlaces[0].classList.add('active');
			enlaces[1].classList.remove('active');
		}
		if (entry.isIntersecting & (idItem === 'about')) {
			enlaces[0].classList.remove('active');
			enlaces[2].classList.remove('active');
			enlaces[1].classList.add('active');
		}
		if (entry.isIntersecting & (idItem === 'skill')) {
			enlaces[1].classList.remove('active');
			enlaces[3].classList.remove('active');
			enlaces[2].classList.add('active');
		}
		if (entry.isIntersecting & (idItem === 'project')) {
			enlaces[2].classList.remove('active');
			enlaces[4].classList.remove('active');
			enlaces[3].classList.add('active');
		}
		if (entry.isIntersecting & (idItem === 'contact')) {
			enlaces[3].classList.remove('active');
			enlaces[4].classList.add('active');
			footer[0].classList.remove('active');
		}

		console.log(
			`Está interceptando la sección ${(entry.isIntersecting, idItem)}`
		);
		// console.log(enlaces);
	});
}

sections.forEach((section) => {
	observer.observe(section);
});

header.forEach((header) => {
	observer.observe(header);
});

footer.forEach((footer) => {
	observer.observe(footer);
});
