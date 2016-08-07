var load = function() {
    return new Promise(function(resolve) {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            window.onload = resolve;
        }
    });
};

module.exports = load;
