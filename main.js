$(document).ready(function() {              // jquery

    $('#telefone').mask('(00)00000-0000') // plugin do JQuery para telefone, data, placa de automóvel e etc.

    $('#form').validate({               // validação do formulário no JQuery.
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,          // no caso do email fazemos uma validação customizada
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
            messages: {
                nome:'Por favor, insira o seu nome'
            },
            submitHandler: function(form) {
                console.log(form)
            },
            invalidHandler: function(evento, validador){        // alerta para o caso de não preenchimento dos campos
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Exitem ${camposIncorretos} campos incorretos`)
                }
            }
    })
})