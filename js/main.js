// Modo Oscuro

function cambio() {
	const sol = document.getElementById('sol');
	const luna = document.getElementById('luna');

	if (sol.style.display === 'inline' || luna.style.display === 'none') {
		luna.style.display = 'inline';
		sol.style.display = 'none';
	} else {
		sol.style.display = 'inline';
		luna.style.display = 'none';
	}
}
