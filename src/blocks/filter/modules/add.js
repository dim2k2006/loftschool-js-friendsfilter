var add = function(event, target) {
    event.preventDefault();

    var __this = this,
        id = parseInt(target.getAttribute('id')),
        index = '';

    __this.listAllData.forEach(function(item, i, arr) {
        if (item.user_id === id) {

            index = __this.listAllData.indexOf(item);

            __this.listCustomData.push(item);
            __this.listAllData.splice(index, 1);


            __this.render(__this.listCustom, __this.listCustomTemplate, __this.listCustomData);
            __this.render(__this.listAll, __this.listAllTemplate, __this.listAllData);

            return;
        }
    });
};

module.exports = add;
