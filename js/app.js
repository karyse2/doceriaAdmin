angular.module('adm',['ngRoute'])

.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl: 'views/login.html',
        controller:'loginCtrl'
    }).when('/home', {
        templateUrl:'views/home.html',
        controller:'homeCtrl'
    })
    // redireciona o usuario para a tela / quando ele digitar uma url inválida após a /
    $routeProvider.otherwise({redirectTo:'/'});

    
});
