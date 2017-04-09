(function () {
    'use strict';

    angular
        .module('adm')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
        .state('main', {
            abstract: true,
            url: '',
            templateUrl: 'views/main.html',
            controller: 'mainCtrl'
        })
        .state('main.login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginCtrl',
        })

        .state('main.meusPedidos', {
            url: '/meusPedidos',
            templateUrl: 'views/meusPedidos.html',
            controller: 'meusPedidosCtrl',
        })
        .state('main.meusOrcamentos', {
            url: '/meusOrcamentos',
            templateUrl: 'views/meusOrcamentos.html',
            controller: 'meusOrcamentosCtrl',
        })
        .state('main.montarCardapio', {
            url: '/montarCardapio',
            templateUrl: 'views/montarCardapio.html',
            controller: 'montarCardapioCtrl',
        })
        .state('main.financeiro', {
            url: '/financeiro',
            templateUrl: 'views/financeiro.html',
            controller: 'financeiroCtrl',
        })
        .state('main.eventos', {
            url: '/eventos',
            templateUrl: 'views/eventos.html',
            controller: 'eventosCtrl',
        })
        .state('main.relatorios', {
            url: '/relatorios',
            templateUrl: 'views/relatorios.html',
            controller: 'relatoriosCtrl',
        })

        $urlRouterProvider.otherwise('/login');
        $httpProvider.interceptors.push('APIInterceptor');
    }

})();
