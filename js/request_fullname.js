let info = JSON.parse(localStorage.getItem('info'))

info.firstNames.forEach(x => {
    $('#firstName').append('<option></option>')
    $('#firstName > option').last().text(x)
    $('#firstName > option').last().attr('value', x)
})

info.lastNames.forEach(x => {
    $('#lastName').append('<option></option>')
    $('#lastName > option').last().text(x)
    $('#lastName > option').last().attr('value', x)
})

$('.input').change(e => {
    $(e.currentTarget).removeClass('is-invalid')
})

$('#submitButton').click(() => {
    let success = true

    if (!$('#firstName').val()) {
        $('#firstName').addClass('is-invalid')
        success = false
    }

    if (!$('#lastName').val()) {
        $('#lastName').addClass('is-invalid')
        success = false
    }

    if (success) {
        info.fullNames.unshift($('#firstName').val() + ' ' + $('#lastName').val())
        info.fullNames.pop()

        localStorage.setItem('info', JSON.stringify(info))
        window.location = 'signup.html'
    }
})