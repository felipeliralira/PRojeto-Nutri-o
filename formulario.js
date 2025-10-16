var botaoAdicionar = document.querySelector("#adicionar-paciente");

    botaoAdicionar.addEventListener('click', 
    function(event){
        event.preventDefault();

        //Seleciona a tag <form> a partir do id
        var formulario = document.querySelector('#form-adiciona');

        // Variáveis para acessar o valor do <input> a partir do nome
        var paciente = dadosPacientesFormulario(formulario);
        var pacienteTr = criaTr(paciente); //Cria o elemento <tr>

        var erros = validarPaciente(paciente);

        //Impede de adicionar o paciente e emite mensagem de erro
        console.log(erros);
        if(erros.length > 0){
            exibirMensagemErro(erros);
            return;
        }
        
        

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        
        formulario.reset();
    }
);

function dadosPacientesFormulario(formulario){

    //objeto paciente
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        IMC: calculaIMC(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function criaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(criaTd(paciente.IMC, "info-imc"));

        return pacienteTr;
}

function criaTd(dado, classes){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classes);

    return td;
}

function validarPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) erros.push("O nome não pode estar vazio");
    
    if(!validarPeso(paciente.peso)){
        erros.push("O peso é inválido!");
    }

    if(!validarAltura(paciente.altura)){
        erros.push("A altura é inválida!");
    }

    if(paciente.gordura.lenght == 0) erros.push("A gordura não pode ser em branco");

    if(paciente.peso.lenght == 0) erros.push("O peso não pode estar em branco");

    if(paciente.altura.lenght ==0) erros.push("A altura não pode ser em branco");
    return erros;
}

function exibirMensagemErro(erros){
    //Quero adicionar cada item do array
    //Dentro da <ul>

    //Busca a tag <ul>
    let ul = document.querySelector("#mensagens-erro")

    //
    ul.innerHTML = "";

    erros.forEach(function(erro){
        //Primeiro criar uma <li>
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
