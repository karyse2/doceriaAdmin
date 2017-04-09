(function () {
    'use strict';

    angular
        .module('devionnAdmin')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $location, Sessao, TranslateService) {
        $rootScope.$on('$locationChangeStart', function (event, next) {
            if (Sessao.isUsuarioLogado()) {
                console.log(Sessao.getUsuarioLogado());
            } else {
                $location.path('/login');
            }
        });
    }

})();
