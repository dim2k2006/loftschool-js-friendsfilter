(function() {
    var load = require('./modules/load'),
        login = require('./modules/login'),
        getData = require('./modules/getData'),
        render = require('./modules/render');

    var filter = {
        document: document,
        container: document.querySelector('.filter'),
        listAll: document.querySelector('.filter__col.col_1 .filter__content'),
        listCustom: document.querySelector('.filter__col.col_2 .filter__content'),
        listTemplate: document.getElementById('listTemplate').innerHTML,

        setupListener: function() {

        },
        load: load,
        login: login,
        getData: getData,
        render: render,
        init: function() {
            var __this = this,
                load = __this.load(),
                login = load.then(__this.login()),
                data = login.then(__this.getData.bind(filter));

            data.then(function(response) {

                __this.render(__this.listAll, __this.listTemplate, response);

            });
        }
    };

    if (filter.container) {
        filter.init();
    }
})();
