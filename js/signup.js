const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

let info = JSON.parse(localStorage.getItem('info'))

info.fullNames.forEach(x => {
    $('#fullName').append('<option></option>')
    $('#fullName > option').last().text(x)
    $('#fullName > option').last().attr('value', x)
})

$('.input').change(e => {
    $(e.currentTarget).removeClass('is-invalid')
})

$('#signUpButton').click(() => {
    let success = true

    if (!$('#fullName').val()) {
        $('#fullName').addClass('is-invalid')
        success = false
    }

    if (!$('#email').val() || !EMAIL_REGEX.test($('#email').val())) {
        $('#email').addClass('is-invalid')
        success = false
    }

    if ($('#password').val().length < 7) {
        $('#password').addClass('is-invalid')
        success = false
    }

    if ($('#confirmPassword').val() !== $('#password').val()) {
        $('#confirmPassword').addClass('is-invalid')
        success = false
    }

    if (!$('#agreeTOS').prop('checked')) {
        $('#agreeTOS').addClass('is-invalid')
        success = false
    }

    if (success) {
        localStorage.setItem('success', $('#fullName').val())
        window.location = 'success.html'
    }
})