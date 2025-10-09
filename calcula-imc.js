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

    //calcula o IMC e altera no elemento
    var IMC = calculaIMC(peso, altura);


    //valores booleanos
    var pesoValido = validarPeso(peso);
    var alturaValida = validarAltura(altura);
    var tdIMC = paciente.querySelector(".info-imc");
    

    if(pesoValido && alturaValida){
        tdIMC.textContent = IMC;
    }


    //alerta caso peso e altura sejam inválidos
    if(!validarPeso(peso)){
        console.log("Peso Inválido");
        var pesoValido = false;
        tdIMC.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    
    }   

    if(!validarAltura(altura)){
        console.log("Altura Inválida!");
        var AlturaValida = false;
        tdIMC.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
        
    }
}

function calculaIMC (peso, altura){
    
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

//Validação do Peso
function validarPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

//Validação da Altura
function validarAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}