let info = JSON.parse(localStorage.getItem('info'))

$('#firstNameLength').change(() => {
    $('#firstNameLength').removeClass('is-invalid')
})

$('#submitButton').click(() => {
    let length = parseInt($('#firstNameLength').val())

    if (!length || length < 1) {
        $('#firstNameLength').addClass('is-invalid')
        return
    }

    info.firstNameLengths.unshift(length)
    info.firstNameLengths.pop()

    localStorage.setItem('info', JSON.stringify(info))
    window.location = 'request_firstname.html'
})