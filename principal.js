//esse bloco vai alterar o nome do titulo e subtitulo
var pacientes = document.querySelector(".titulo_secundario");
pacientes.textContent = "Meus Pacientes";
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lira Nutrição";

//Esse vai criar variavel buscar id do primeiro paciente e acessa o peso do primeiro paciente

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //busca o elemento da altura e altera seu conteúdo
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //cria variavel imc para fazer o cálculo e achar o imc do paciente
    var IMC = peso / (altura * altura);


    //valores booleanos
    var pesoValido = true;
    var alturaValida = true;


    //alerta caso peso e altura sejam inválidos
    if(peso <= 0 || peso >= 1000){
    var pesoValido = false;
    alert("Peso Inválido");
    }   

    if(altura <= 0 || altura >= 3.00){
    var AlturaValida = false;
    alert("Altura Inválida!");
    }

    if(pesoValido && alturaValida){
    var tdIMC = paciente.querySelector(".info-imc");
    tdIMC.textContent = IMC.toFixed(2);
    }
}



