angular.module('adm')

    .controller('homeCtrl', function($scope) {

        $scope.openNav = function() {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }

        /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */

        $scope.closeNav = function () {
            document.getElementById("mySidenav").style.right = "";
            document.getElementById("main").style.right = "";
        }
    });
