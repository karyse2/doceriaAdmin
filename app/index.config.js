(function () {
    'use strict';

    angular
        .module('devionnAdmin')
        .config(config);

    /** @ngInject */
    function config($logProvider, toastrConfig, $mdThemingProvider, $translateProvider, config) {

        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;

        //$translateProvider.useLocalStorage();
        $translateProvider.useUrlLoader(config.baseUrl + '/ws/translate/getTranslate');
        $translateProvider.preferredLanguage('pt-br');
    }

})();
