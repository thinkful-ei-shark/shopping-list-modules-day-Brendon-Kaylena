function validateName(name) {
    if (name === '') {
        throw new TypeError('Name must not be blank')
    }
}

function create(personsName) {
    return { id: cuid(), name: personsName, checked: false }
}

export default {
    validateName,
    create
}
