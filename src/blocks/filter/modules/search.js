var search = function(event) {
    var __this = this,
        targetId = event.target.getAttribute('id'),
        value = event.target.value,
        container = (targetId === 'search__input_1') ? __this.listAll : __this.listCustom,
        template = (targetId === 'search__input_1') ? __this.listAllTemplate : __this.listCustomTemplate,
        sortData = (targetId === 'search__input_1') ? __this.listAllData : __this.listCustomData;
        temp = [];

    if (sortData && value !== '') {

        temp = sortData.filter(function(item) {

            if ((item.first_name + ' ' + item.last_name).toLowerCase().indexOf(value.toLowerCase()) !== -1) {

                return item;

            }

        });

        __this.render(container, template, temp);

    } else {

        __this.render(container, template, sortData);

    }
};

module.exports = search;
