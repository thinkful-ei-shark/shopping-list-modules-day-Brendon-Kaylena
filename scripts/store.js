import item from './item.js'

export default {

    items: [],
    hideCheckedItems: false,

    findById: function(ident) {
        this.items.find(item, function() {
            return this.item.id === ident 
        })
    },

    findAndToggleChecked: function(ident) {
        this.findById()
    }

}

