var sort = [];
function numerosAleatorios() {
	while (sort.length < 24) {
		var aleatorio = Math.floor(Math.random() * 24);
		if (sort.indexOf(aleatorio) == -1) {
			sort.push(aleatorio);
		}
	}

	var table = '<table border="1"><tr>'
	var breach = 1

	for (var i = 0; i < sort.length; i++) {
		if ((breach % 6) !== 0) {
			table += '<td><img width=150 src="img/' + (sort[i] + 1) + '.jpg"></td>'
		}
		else {
			table += '<td><img width=150 src="img/' + (sort[i] + 1) + '.jpg"></td></tr><tr>'
		}
		breach++
	}
	table += '</tr></table>'
	document.getElementById('p').innerHTML = table
}
numerosAleatorios();