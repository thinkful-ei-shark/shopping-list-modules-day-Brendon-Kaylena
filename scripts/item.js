function validateName(name) {
    if (name === '') {
        throw new TypeError('Name must not be blank')
    }
}

function create(itemName) {
    return { id: cuid(), name: itemName, checked: false }
}

export default {
    validateName,
    create
}
