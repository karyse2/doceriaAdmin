(function() {
    'use strict';

    angular
        .module('adm')
        .service('APIInterceptor', APIInterceptor);

    /** @ngInject */
    function APIInterceptor($q, $location, $localStorage) {
        var service = this;
        service.request = function(config) {
            config.headers = config.headers || {};
            if ($localStorage.token) {
                config.headers.authorization = 'Portador' + $localStorage.token;
            }
            return config;
        };
        service.responseError = function(response) {
            if (response.status == 401 || response.status == 403) {
                $location.path('/login');
            }
            return $q.reject(response);
        };
    }
})();
