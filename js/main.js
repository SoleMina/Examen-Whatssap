$(document).ready(function(){

	$("#chat").change(function(){
		chat = $(this).val();
		i+=1;
		clearText();
	})

	clearText();
})

//Presionar enter:
document.getElementById("chat").addEventListener("keypress", myFunction);

function myFunction() {
    document.getElementById("chat");

    var textoValue = gettextoValue();
    if(event.keyCode==13) {
        doañadir(textoValue);
        clean();
    }
}
function gettextoValue() {
	var texto = document.getElementById("chat");
	return texto.value;
}
function añadir() {
	var textoValue = gettextoValue();
	if (textoValue !== "") {
		doañadir(textoValue);
		clean();
	}
}

function doañadir(textoDeContenido) {
	var place = document.getElementById("what");

	//Hoora:
	var fecha = new Date();
    var vHora = fecha.getHours();
    var vMin = fecha.getMinutes();
    
    //Anteponer un cero a los minutos y segundos, para estilizarlos.
    vMin = ( vMin < 10 ? "0" : "") + vMin;

    vHora = (vHora < 10 ? "0" : "") + vHora;

    var vHoraSistema = vHora + ":"+  vMin;

    //crear:
	content = '<div class="box right true sn">' +
    '<div class="check">' +  
    textoDeContenido  + '<span class="time-f" id="time">' + vHoraSistema +
    '</div>' + '</div>' + '</span>';

    	//Crear el elemento
	
	var elemento = document.createElement("div");
	elemento.className = "añadir";
	elemento.innerHTML = content;

	//Agregar elementos
	place.appendChild(elemento);	
}
function clean() {
	var texto = document.getElementById("chat");
	texto.value = "";
	texto.focus();
}
function limpiar() {
	var elemento = document.getElementById("eliminar");
	elemento.remove();
}
function clearText(){
	$("#boxunico .cajilla").click(function(){
		var imagen = $("img",this).attr("src");
		var title5 = $("h4",this).text();
		var parrafo = "conectado";
		$(".caja1 img").attr("src",imagen);
		$(".caja1 #principaltext").text(title5);
		$(".caja1 #secondtext").text(parrafo);
		$("#chatear .parrafoprincipal").text(title5);
		$("#chatear1 .parrafoprincipal").text(title5);
		$("#chatear2 .parrafoprincipal").text(title5);
		$("#chatear3 .parrafoprincipal").text(title5);
		$("#chatear4 .parrafoprincipal").text(title5);
		$("#chatear5 .parrafoprincipal").text(title5);

	var eliminar = document.getElementById("chatear1");
	eliminar.remove();
	//var eliminar1 = document.getElementById("chatear1");
	//eliminar1.remove();
	//var eliminar2 = document.getElementById("chatear2");
	//eliminar2.remove();	
	var eliminar3 = document.getElementById("chatear2");
	eliminar3.remove();
})  
}

//Mostrar y ocultar emojis
$(document).ready(function(){
		//Al hacer click muestra
		$("#emoticon").on( "click", function() {
			$('#innerpicker').show(); //muestro mediante id
		 });
		//Al hacer doble click oculta
		$("#emoticon").on( "dblclick", function() {
			$('#innerpicker').hide(); //muestro mediante id
		 });

	});