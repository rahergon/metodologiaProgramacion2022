//javascript

//prompt("ingresa tu nombre");

function calcular() {
	//alert("calcular");
	var nombre = document.getElementById("nombre").value;
	var cambio = document.getElementById("cambio").value;
	var pesos = document.getElementById("pesos").value;

	var dolares;

	dolares  = pesos / cambio;

	document.getElementById("resultado").innerHTML = "<B>"+nombre + " el número de dolares es:" + dolares + "</B>";

	return ( 0 );
}
