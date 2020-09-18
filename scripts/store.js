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

    findAndUpdate: function () {

    }
}
