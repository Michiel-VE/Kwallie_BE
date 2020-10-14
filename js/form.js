$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwfSKIHq5g7jmoAQGs3vCz0hIikPL8pLBASUZ8hafFec4z7Nh5M/exec'

$('#submit-form').on('click', function (e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject(),
        success: $("#verstuur").html('<p class="text-center">aight</p>')
    })
    setTimeout(function () {
        location.reload();
    }, 3500);
})