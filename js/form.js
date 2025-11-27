var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
  
    var form = document.querySelector('#form-adiciona');
  
    //extrair os dados do formulario
     var paciente = obtemPacienteDoFormulario(form);

    //criando a linha e as celulas do novo paciente
    var pacienterTr = montaTr(paciente);
  
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,  form.altura.value,)
  }
  return paciente;
}

function montaTr(){
  
}


