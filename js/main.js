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
