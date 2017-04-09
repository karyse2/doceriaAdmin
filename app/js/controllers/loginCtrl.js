angular.module("adm").controller('loginCtrl', function($scope, $http, $state, $mdDialog,$mdMedia) {

    // {objeto}
    $scope.login = {
        usuario: null,
        senha: null
    }
    var usuarioPadrao = {
        usuario: 'admin',
        senha: 'admin'
    };

    //  neste caso {Abre o corpo da funcao}
    $scope.acessarSistema = function(usuarioInformado) {
        if (usuarioInformado.usuario == usuarioPadrao.usuario && usuarioInformado.senha == usuarioPadrao.senha) {
            console.log('Login efetuado com sucesso');
                $state.go('main.meusPedidos');

        } else {
            console.log('Login Invalido');
            

        }
    }
});
