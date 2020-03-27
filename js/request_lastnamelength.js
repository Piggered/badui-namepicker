let info = JSON.parse(localStorage.getItem('info'))

$('#lastNameLength').change(() => {
    $('#lastNameLength').removeClass('is-invalid')
})

$('#submitButton').click(() => {
    let length = parseInt($('#lastNameLength').val())

    if (!length || length < 1) {
        $('#lastNameLength').addClass('is-invalid')
        return
    }

    info.lastNameLengths.unshift(length)
    info.lastNameLengths.pop()

    localStorage.setItem('info', JSON.stringify(info))
    window.location = 'request_lastname.html'
})