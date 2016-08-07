var action = function(event) {
    var target = event.target,
        action = '';
    
    while (target.className !== 'filter') {
        action = target.getAttribute('data-action');

        if (action) {
            if (this[action]) {
                this[action](event, target);
            }
            return;
        }
        target = target.parentNode;
    }
};

module.exports = action;

