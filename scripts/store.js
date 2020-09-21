import item from './item.js'

export default {

    items: [],
    hideCheckedItems: false,

    findById: function (id) {

        this.items.find(item => item.id === id)

    },

    addItem: function (name) {
        try {
            item.validateName(name)
            let make = item.create(name)
            this.items.push(make)
        }
        catch (error) {

        }
    },

    findAndToggleChecked: function (id) {
        $('.js-shopping-list').on('click', '.js-item-toggle', event => {

            let name = this.findById(id);
            name.checked = !name.checked

        }
        )
    },

    findAndUpdateName: function (id, newName) {

        try {
            this.findById(id) = newName
        }
        catch (e) {
            console.log(`Cannot update name: ${error.message}`)
        }
    },
    findAndDelete: function (id) {

        let nameIndex = this.items.findIndex((item) => item.id === id)
        this.items.splice(nameIndex, 1)
        // this.items.filter((item) => item.id !== id)

    }
}
