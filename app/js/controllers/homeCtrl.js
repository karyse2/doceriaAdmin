angular.module('adm')

    .controller('homeCtrl', function($scope, $state) {

        //Função abre menu
        $scope.abrirMenu = function() {
            document.getElementById("mySidenav").style.width = "265px";
            document.getElementById("main").style.marginLeft = "220px";
        }


        //Função fecha menu
        $scope.fecharMenu = function() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
    });
