let info = JSON.parse(localStorage.getItem('info'))
let currentLength = 0
let options

info.lastNameLengths.forEach(x => {
    $('#lastNameLength').append('<option></option>')
    $('#lastNameLength > option').last().text(x + ' character' + (x === 1 ? '' : 's'))
    $('#lastNameLength > option').last().attr('value', x)
})

$('#lastNameLength').change(() => {
    let length = parseInt($('#lastNameLength').val()) || 0

    $('#lastNameLength').removeClass('is-invalid')

    if (length !== currentLength) {
        $('#characters').empty()
        currentLength = length

        for (let i = 0; i < length; i++) {
            let div = $('<div class="form-group"></div>')
            let label = $(`<label for="lastNameChar${i + 1}">Select character #${i + 1} of your last name</label>`)
            let select = $(`<select class="custom-select input" id="lastNameChar${i + 1}">`)
            let small = $('<small class="form-text text-muted">Character not listed here? <a href="request_lastnamecharacter.html">Submit a request</a>.</small>')

            select.append('<option value="">Choose...</option>')

            info.lastNameCharacters.forEach(x => {
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
        $('#lastNameLength').addClass('is-invalid')
    }

    let success = true

    for (let i = 0; i < currentLength; i++) {
        if (!$('#lastNameChar' + (i + 1)).val()) {
            success = false
            $('#lastNameChar' + (i + 1)).addClass('is-invalid')
        }
    }

    if (success) {
        let result = ''

        for (let i = 0; i < currentLength; i++) {
            result += $('#lastNameChar' + (i + 1)).val()
        }

        info.lastNames.unshift(result)
        info.lastNames.pop()

        localStorage.setItem('info', JSON.stringify(info))
        window.location = 'request_fullname.html'
    }
})