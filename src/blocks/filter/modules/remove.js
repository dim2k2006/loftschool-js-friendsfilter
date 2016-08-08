var remove = function(event, target) {
    event.preventDefault();

    var __this = this,
        id = parseInt(target.getAttribute('id'));

    __this.listCustomData.forEach(function(item, i, arr) {
        if (item.user_id === id) {

            __this.listAllData.push(item);
            __this.listCustomData.splice(i, 1);

            __this.render(__this.listCustom, __this.listCustomTemplate, __this.listCustomData);
            __this.render(__this.listAll, __this.listAllTemplate, __this.listAllData);

            return;
        }
    });
};

module.exports = remove;
