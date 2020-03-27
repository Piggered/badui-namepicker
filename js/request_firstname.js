let info = JSON.parse(localStorage.getItem('info'))
let currentLength = 0
let options

info.firstNameLengths.forEach(x => {
    $('#firstNameLength').append('<option></option>')
    $('#firstNameLength > option').last().text(x + ' character' + (x === 1 ? '' : 's'))
    $('#firstNameLength > option').last().attr('value', x)
})

$('#firstNameLength').change(() => {
    let length = parseInt($('#firstNameLength').val()) || 0

    $('#firstNameLength').removeClass('is-invalid')

    if (length !== currentLength) {
        $('#characters').empty()
        currentLength = length

        for (let i = 0; i < length; i++) {
            let div = $('<div class="form-group"></div>')
            let label = $(`<label for="firstNameChar${i + 1}">Select character #${i + 1} of your first name</label>`)
            let select = $(`<select class="custom-select input" id="firstNameChar${i + 1}">`)
            let small = $('<small class="form-text text-muted">Character not listed here? <a href="request_firstnamecharacter.html">Submit a request</a>.</small>')

            select.append('<option value="">Choose...</option>')

            info.firstNameCharacters.forEach(x => {
                select.append(`<option value="${x}">${x}</option>`)
            })

            div.append(label).append(select).append(small)
            $('#characters').append(div)
        }

        $('.input').change(e => {
            $(e.currentTarget).removeClass('is-invalid')
        })
    }
})

$('#submitButton').click(() => {
    if (currentLength === 0) {
        $('#firstNameLength').addClass('is-invalid')
    }

    let success = true

    for (let i = 0; i < currentLength; i++) {
        if (!$('#firstNameChar' + (i + 1)).val()) {
            success = false
            $('#firstNameChar' + (i + 1)).addClass('is-invalid')
        }
    }

    if (success) {
        let result = ''

        for (let i = 0; i < currentLength; i++) {
            result += $('#firstNameChar' + (i + 1)).val()
        }

        info.firstNames.unshift(result)
        info.firstNames.pop()

        localStorage.setItem('info', JSON.stringify(info))
        window.location = 'request_fullname.html'
    }
})