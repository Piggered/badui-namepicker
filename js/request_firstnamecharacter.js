let info = JSON.parse(localStorage.getItem('info'))

$('#firstNameCharacter').change(() => {
    $('#firstNameCharacter').removeClass('is-invalid')
})

$('#submitButton').click(() => {
    let character = $('#firstNameCharacter').val()

    if (character.length !== 1) {
        $('#firstNameCharacter').addClass('is-invalid')
        return
    }

    info.firstNameCharacters.unshift(character)
    info.firstNameCharacters.pop()

    localStorage.setItem('info', JSON.stringify(info))
    window.location = 'request_firstname.html'
})