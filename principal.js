//esse bloco vai alterar o nome do titulo e subtitulo
var pacientes = document.querySelector(".titulo_secundario");
pacientes.textContent = "Meus Pacientes";
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lira Nutrição";

//Esse vai criar variavel buscar id do primeiro paciente e acessa o peso do primeiro paciente

var paciente = document.querySelector("#primeiro_paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//busca o elemento da altura e altera seu conteúdo
var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent;

//cria variavel imc para fazer o cálculo e achar o imc do paciente
var IMC = peso / (altura * altura);
var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = IMC;
