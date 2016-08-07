(function() {
    var load = require('./modules/load'),
        login = require('./modules/login'),
        getData = require('./modules/getData'),
        render = require('./modules/render');

    var filter = {
        document: document,
        container: document.querySelector('.filter'),

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

                __this.render(response);

            });
        }
    };

    if (filter.container) {
        filter.init();
    }
})();
