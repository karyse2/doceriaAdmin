angular.module('adm', ['ui.router', 'ngMaterial'])

    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {


        // Each tab has its own nav history stack:

        // if none of the above states are matched, use this as the fallback

        $stateProvider
            .state('app', {
                abstract: true,
                url: '',
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .state('app.login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginCtrl',
            })
            .state('app.home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeCtrl',
            })
        $urlRouterProvider.otherwise('/login');
    });
