(function() {
    var load = require('./modules/load'),
        login = require('./modules/login'),
        getData = require('./modules/getData'),
        render = require('./modules/render'),
        action = require('./modules/action'),
        close = require('./modules/close'),
        add = require('./modules/add'),
        remove = require('./modules/remove'),
        save = require('./modules/save'),
        label = require('./modules/label'),
        search = require('./modules/search');

    var filter = {
        document: document,
        container: document.querySelector('.filter'),
        listAll: document.querySelector('.filter__col.col_1 .filter__content'),
        listCustom: document.querySelector('.filter__col.col_2 .filter__content'),
        listAllTemplate: document.getElementById('listAllTemplate').innerHTML,
        listCustomTemplate: document.getElementById('listCustomTemplate').innerHTML,
        inputs: document.querySelectorAll('.filter__search__input'),

        setupListener: function() {
            this.container.addEventListener('click', this.action.bind(filter));

            this.container.addEventListener('keyup', this.action.bind(filter));
        },
        load: load,
        login: login,
        getData: getData,
        render: render,
        action: action,
        close: close,
        add: add,
        remove: remove,
        save: save,
        label: label,
        search: search,
        init: function() {
            var __this = this,
                load = __this.load(),
                login = load.then(__this.login()),
                data = login.then(__this.getData.bind(filter));

            data.then(function(response) {

                __this.render(__this.listAll, __this.listAllTemplate, response);

                __this.setupListener();
                __this.label();

            });
        }
    };

    if (filter.container) {
        filter.init();
    }
})();
