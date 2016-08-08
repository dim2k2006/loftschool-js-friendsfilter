var save = function(event) {
    event.preventDefault();

    localStorage.setItem("savedData", JSON.stringify(this.listCustomData));

    alert('Сохранено!');
};

module.exports = save;
