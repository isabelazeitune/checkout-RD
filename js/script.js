let inputCPF = document.getElementById("cpfUsuario");
let inputSenha = document.getElementById("senhaUsuario");
let inputConfSenha = document.getElementById("confSenhaUsuario");
let inputCEP = document.getElementById("cepUsuario");
let inputNumeroCartao = document.getElementById("numeroDoCartaoUsuario");
let inputCPFDoTitular = document.getElementById("cpfDoTitularUsuario");
let inputEndereco = document.getElementById("enderecoUsuario");
let inputBairro = document.getElementById("bairroUsuario");
let inputCidade = document.getElementById("cidadeUsuario");
let inputEstado = document.getElementById("estadoUsuario");

function buscarCep(cep) {
    fetch("https://viacep.com.br/ws/" + cep + "/json/") // fetch por padrão utiliza GET
    .then(resposta => resposta.json())
    .then(dados => {
        if(dados.erro) {
            return inputCEP.setAttribute("class", "form-control is-invalid")
        }
        inputCEP.setAttribute("class", "form-control is-valid")
        inputEndereco.value = dados.logradouro
        inputBairro.value = dados.bairro
        inputCidade.value = dados.localidade
        inputEstado.value = dados.uf
    })
}


//$('#myModal').modal(options) => DISPARA, FECHA E FAZ OUTRAS AÇÕES DO MODAL ONDE QUISERMOS, DE ACORDO COM O ID DO MODAL


inputCPF.addEventListener("keyup", (event) => {
    //inputCPF.setAttribute("maxlength", 11)

    //typeof pode considerar o número como parte da string, então melhor não usar    
    //if(typeof(inputCPF.value === "string")) {
    //    console.log("é uma string")
    //}

    if(isNaN(inputCPF.value)) {
        console.log("é uma string, amadoh, não vai rolar");
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 1));

        //inputCPF.value = inputCPF.value.pop; => preenche o campo com "undefined"
        //event.preventDefault(); => deixa passar 1 letra
    }

    if(inputCPF.value.length >= 11) {
        inputCPF.value = inputCPF.value.substring(0, 11);
    }
// maxlength="11" na classe do input cpf no html funciona mas o html pode ser acessado pelo inspecionar e ser editado
})

//inputConfSenha.addEventListener("keyup", (event) => {
//    if(inputSenha.value != inputConfSenha.value) {
//        inputConfSenha.setAttribute("class", "form-control i-error");
//    } else {
//        inputConfSenha.setAttribute("class", "form-control i-sucess");
//    }
//})

inputConfSenha.addEventListener("keyup", (event) => {
    if(inputSenha.value != inputConfSenha.value) {
        inputConfSenha.setAttribute("class", "form-control is-invalid");
    } else {
        inputConfSenha.setAttribute("class", "form-control is-valid");
    }
})


inputConfSenha.addEventListener("blur", (event) => {
    if(inputSenha.value != inputConfSenha.value) {
        alert("As senhas não conferem");
    }
})

inputCEP.addEventListener("keyup", (event) => {
    if(isNaN(inputCEP.value)) {
        inputCEP.value = inputCEP.value.substring(0, (inputCEP.value.length - 1));
    }

    if(inputCEP.value.length >= 8) {
        inputCEP.value = inputCEP.value.substring(0, 8);
        //buscarCep(); => não vai funcionar porque se o usuário ficar tentando adicionar mais dígitos vai ficar requisitando a função sem parar
        buscarCep(inputCEP.value);
    }
})

inputNumeroCartao.addEventListener("keyup", (event) => {
    if(isNaN(inputNumeroCartao.value)) {
        inputNumeroCartao.value = inputNumeroCartao.value.substring(0, (inputNumeroCartao.value.length - 1));
    }

    if(inputNumeroCartao.value.length >= 16) {
        inputNumeroCartao.value = inputNumeroCartao.value.substring(0, 16);
    }
})

inputCPFDoTitular.addEventListener("keyup", (event) => {
    if(isNaN(inputCPFDoTitular.value)) {
        inputCPFDoTitular.value = inputCPFDoTitular.value.substring(0, (inputCPFDoTitular.value.length - 1));
    }

    if(inputCPFDoTitular.value.length >= 11) {
        inputCPFDoTitular.value = inputCPFDoTitular.value.substring(0, 11);
    }
})