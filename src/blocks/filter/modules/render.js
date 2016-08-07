var render = function(container, source, data) {
    var templateFn = Handlebars.compile(source),
        template = templateFn({list: data});

    container.innerHTML = template;
};

module.exports = render;
