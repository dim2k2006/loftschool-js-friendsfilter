var getData = function() {
    return new Promise(function(resolve, reject) {
        VK.api('friends.get', {'name_case': 'nom', 'fields': 'photo_50', 'version': 5.53}, function(response) {
            if (response.error) {
                reject(new Error(response.error.error_msg));
            } else {
                resolve(response.response);
            }
        });
    })
};

module.exports = getData;
