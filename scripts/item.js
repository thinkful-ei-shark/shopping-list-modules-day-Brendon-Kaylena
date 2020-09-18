function validateName(name) {
    if (name === '') {
        throw new TypeError('Name must not be blank')
    }
}

function create(itemsName) {
    return { id: cuid(), name: itemsName, checked: false }
}

export default {
    validateName,
    create
}
