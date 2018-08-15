$(document).ready(function(){
    $('#celular').mask('(00) 00000-0000');
    
    var $contactForm = $('#contact-form');
    $contactForm.submit(function(e) {
        e.preventDefault();
        $.ajax({
        url: '//formspree.io/xjrdqgjx',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $('#erro').hide();
            $('#enviando').show();
        },
        success: function(data) {
            $('#enviando').hide();
            $('#info').hide();
            $('#contact-form').hide();
            $('#thankYou').show();
        },
        error: function(err) {
            $('#enviando').hide();
            $('#erro').show();
        }
        });
    });
});