$.fn.removeNot = function (settings) {
    "use strict";
    var $this = $(this),
        defaults = {
        pattern: /[0-9]/,
        replacement: ''
    }
    settings = $.extend(defaults, settings);

    $this.keyup(function () {
        var new_value = $this.val().replace(settings.pattern, settings.replacement);
        $this.val(new_value);
    });
    return $this;
}
$(document).ready(function() {
    // VALIDACAO NOME
    $(".inputNome").removeNot({ pattern: /[^A-z" "]+/g });
    //MASK TELEFONE
    if ($(".inputTelefone").length){
        $(".inputTelefone").mask("(99) 9999-9999?9");
    }

    //VALIDACAO FORM
    $( ".adicionaContato" ).on( "click", function () {
        var sEmail = $(".inputEmail").val();
        var emailFilter=/^.+@.+\..{2,}$/;
        var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/
        if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
            $('.erroForm').text('Preencha o campo email corretamente.').show();
            //$('.inputEmail').addClass('error');
            return false;
        }
        if ( $('.divContato form fieldset input.inputNome').val() == '' || $('.divContato form fieldset input.inputTelefone').val() == ''){
            $('.erroForm').text('Todos os campos são obrigatórios.').show();
            return false;
        }
        else{
            $('table.listacontatos').show();
            var nome = $('.inputNome').val();
            var telefone = $('.inputTelefone').val();
            var email = $('.inputEmail').val();
            $('table.listacontatos').append('<td>'+nome+'</td><td>'+telefone+'</td><td>'+email+'</td>');
            $('.divContato form fieldset input').val('');
            $('.sucessForm').show().delay(3000).fadeOut();
            $('.divContato form fieldset input.inputNome').focus();
            $('.erroForm').hide();
            //$('.inputEmail').removeClass('error');
            return false;
        }
    });
    $( ".limpaContato" ).on( "click", function () {
        $('.divContato form fieldset input').val('');
        event.preventDefault();
        return false;
    });
});
