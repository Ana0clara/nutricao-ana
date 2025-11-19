var tituloPagina = document.getElementById('titulo-pagina');
tituloPagina.textContent = "Ana nutrição";

var pacientes = document.querySelectorAll(".paciente");

for(var contador = 0; contador <= 4; contador ++) {
  
  var tdPeso = pacientes[contador].querySelector("*.info-peso");
  var peso = tdPeso.textContent;
  
  var tdAltura = pacientes[contador].querySelector("*.info-altura");
  var altura = tdAltura.textContent;

  var tdGordura = pacientes[contador].querySelector("*.info-gordura");
  var gordura = tdGordura.textContent

  var tdImc = pacientes[contador].querySelector("*.info-imc");
  var imc = tdImc.textContent;

  var pesoEhvalido = true;
  var alturaEhvalida = true;

  if(peso < 0 ) {
    tdPeso.textContent = "Peso invalido";
  }

  if(altura < 0){
    tdAltura.textContent = "altura invalida";
  }
    
  }

//var nome = document.getElementById('nome');
//nome.textContent = "joana";

//var celulaPeso = document.getElementById('peso');
//var peso = celulaPeso.textContent;

//var celulaAltura = document.getElementById('altura');
//var altura = celulaAltura.textContent;

//var celulaGordura = document.getElementById('gordura');
//var gordura = celulaGordura.textContent;

//if (peso < 0) {
//  celulaPeso.textContent = "peso invalido";}

//if (altura < 0){
 // celulaAltura.textContent = "altura invalida";}

//if (gordura < 0){
 // celulaGordura.textContent = "gordura invalida";}

