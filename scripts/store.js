import item from './item.js'

const findById = function (ident) {

    this.items.find((item), function () {
        console.log(item.id === ident)
    })
}
export default {

    items: [],
    hideCheckedItems: false,
    findById

}
