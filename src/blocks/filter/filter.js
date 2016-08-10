var modules = {
    load: require('./modules/load'),
    login: require('./modules/login'),
    getData: require('./modules/getData'),
    render: require('./modules/render'),
    action: require('./modules/action'),
    close: require('./modules/close'),
    add: require('./modules/add'),
    remove: require('./modules/remove'),
    save: require('./modules/save'),
    label: require('./modules/label'),
    search: require('./modules/search'),
    drag: require('./modules/drag')
};

(function(methods) {
    var filter = {
        document: document,
        container: document.querySelector('.filter'),
        listAll: document.querySelector('.filter__col.col_1 .filter__content'),
        listCustom: document.querySelector('.filter__col.col_2 .filter__content'),
        listAllTemplate: document.getElementById('listAllTemplate').innerHTML,
        listCustomTemplate: document.getElementById('listCustomTemplate').innerHTML,
        inputs: document.querySelectorAll('.filter__search__input'),
        listAllData: [],
        listCustomData: [],

        setupListener: function() {
            this.container.addEventListener('click', this.action.bind(filter));

            this.container.addEventListener('keyup', this.action.bind(filter));
        },
        load: methods.load,
        login: methods.login,
        getData: methods.getData,
        render: methods.render,
        action: methods.action,
        close: methods.close,
        add: methods.add,
        remove: methods.remove,
        save: methods.save,
        label: methods.label,
        search: methods.search,
        drag: methods.drag,
        init: function() {
            var __this = this,
                load = __this.load(),
                login = load.then(__this.login()),
                data = login.then(__this.getData.bind(filter));

            data.then(function(response) {
                var savedData = localStorage.getItem("savedData"),
                    listCustomLength = '';

                __this.listAllData = response;

                if (savedData) {

                    __this.listCustomData = JSON.parse(savedData);
                    listCustomLength = __this.listCustomData.length;

                    __this.listAllData = __this.listAllData.filter(function(item) {
                        var n = 0,
                            found = false;

                        for (n; n < listCustomLength; n++) {

                            if (item.user_id === __this.listCustomData[n].user_id) {

                                found = true;

                            }

                        }

                        if (!found) {

                            return item;

                        }
                    });

                }

                __this.render(__this.listAll, __this.listAllTemplate, __this.listAllData);
                __this.render(__this.listCustom, __this.listCustomTemplate, __this.listCustomData);

                __this.setupListener();
                __this.label();
                __this.drag();

            });
        }
    };

    if (filter.container) {
        filter.init();
    }
})(modules);
