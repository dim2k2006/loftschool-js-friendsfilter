var login = function() {
    return new Promise(function (resolve, reject) {
        VK.init({
            apiId: 5569579
        });

        VK.Auth.login(function (response) {
            if (response.session) {
                resolve(response);
            } else {
                reject(new Error('Не удалось авторизоваться'));
            }
        }, 8);
    });
};

module.exports = login;
