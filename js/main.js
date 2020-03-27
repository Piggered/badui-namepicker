localStorage.removeItem('success')

if (localStorage.getItem('info') === null) {
    let fullNames = [
        'Michael Powers',
        'Julia Helm',
        'Richard Board',
        'Erin Smith',
        'Joseph Hernandez',
        'Anita Canon',
        'George Gonzales',
        'Malissa Alaniz',
        'Anthony Weber',
        'Griselda Feliz'
    ]

    let firstNames = [
        'Michael',
        'Julia',
        'Richard',
        'Erin',
        'Joseph',
        'Anita',
        'George',
        'Malissa',
        'Anthony',
        'Griselda'
    ]

    let lastNames = [
        'Powers',
        'Helm',
        'Board',
        'Smith',
        'Hernandez',
        'Canon',
        'Gonzales',
        'Alaniz',
        'Weber',
        'Feliz'
    ]

    let firstNameLengths = [1, 3, 2, 6, 8]
    let lastNameLengths = [1, 6, 9, 4, 3]
    let firstNameCharacters = ['q', 'Z', 'P', 'A', 'L', 'b', 'm', 'n', 'y', 'G', 'h', 'E', 'U', 'p', 's', 'Q', 'r', 'z', 'u', 'H', 'f', 'k', 'N', 'I', 'i', 'C', 'O', 'X', 'a', 'B']
    let lastNameCharacters = ['e', 'o', 'E', 'V', 'y', 'q', 'A', 'W', 's', 'K', 'R', 'v', 'P', 'n', 'g', 'H', 'j', 'c', 'C', 'k', 'G', 'T', 'p', 'J', 'Z', 'h', 'Q', 'F', 'U', 'i']

    let info = { fullNames, firstNames, lastNames, firstNameLengths, lastNameLengths, firstNameCharacters, lastNameCharacters }
    localStorage.setItem('info', JSON.stringify(info))
}