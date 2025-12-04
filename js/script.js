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

  if(peso < 0 || peso > 600 ) {
    tdPeso.textContent = "Peso invalido";
    pesoEhvalido = false;
    pacientes[contador].classList.add("dados-invalidos");
  }

  if(altura < 0 || altura > 2.80){
    tdAltura.textContent = "altura invalida";
    alturaEhvalida = false;
    pacientes[contador].classList.add("dados-invalidos");
    
  }

  if(pesoEhvalido && alturaEhvalida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
    
  }


function calculaImc() {
  var imc = 0;

  img = peso / (altura * altura);

  return imc.toFixed(2);
}