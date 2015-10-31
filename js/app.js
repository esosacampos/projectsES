function censurar(){
	var comentarioUsuario = document.getElementById("val1").value;
	var palabras = ["primo", "hijo","papa", "enojo"];

	var resultado = comentarioUsuario;
	for (var i = 0; i < palabras.length; i++) {
		resultado = resultado.replace(new RegExp(palabras[i],"gi"), "*****");	

	};


	document.getElementById("resultado").value=resultado;
}

function alertar(){
	for (var i = 0; i < 4; i+1) {
		alerta("Mi Alerta");
	};

	//Comentarios para cambios en GIT
}

function operacionAritmetica(tipo){
	var val1 = Number(document.getElementById("val1").value);
	var val2 = Number(document.getElementById("val2").value);

	var resultado = 0;

	switch(tipo){
		case 1:
			resultado = val1 + val2
			break;
		case 2:
			resultado = val1 - val2
			break;
		case 3:
			resultado = val1 * val2
			break;
		case 4:
			resultado = val1 / val2
			break;
		default:
			resultado = "Opcion No Valida"
			break; 
	}


	document.getElementById("resultado").value = resultado;



}