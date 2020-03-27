let info = JSON.parse(localStorage.getItem('info'))

$('#lastNameCharacter').change(() => {
    $('#lastNameCharacter').removeClass('is-invalid')
})

$('#submitButton').click(() => {
    let character = $('#lastNameCharacter').val()

    if (character.length !== 1) {
        $('#lastNameCharacter').addClass('is-invalid')
        return
    }

    info.lastNameCharacters.unshift(character)
    info.lastNameCharacters.pop()

    localStorage.setItem('info', JSON.stringify(info))
    window.location = 'request_lastname.html'
})