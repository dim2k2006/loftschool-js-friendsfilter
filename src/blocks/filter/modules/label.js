var label = function() {
    var inputsLength = this.inputs.length,
        i = 0;

    for (i; i < inputsLength; i++) {

        this.inputs[i].parentNode.classList.add('inactive');

        this.inputs[i].addEventListener('focus', function(event) {
            var target = event.target;

            target.parentNode.classList.remove('inactive');
        });

        this.inputs[i].addEventListener('blur', function(event) {
            var target = event.target,
                value = target.value;

            if (value === '') {

                target.parentNode.classList.add('inactive');

            }
        });

    }
};

module.exports = label;
