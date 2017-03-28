angular.module("adm").controller('loginCtrl', function($scope, $http, $location) {
    // $scope.auth = function(login) {
    //   $http.post("http://localhost:8000/auth/login", login).then(function(response) {
    //     console.log("sucesso");
    //     console.log('reponse');
    //   },function(response) {
    //     console.log("error");
    //     console.log(response);
    //   });
    // }


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
            $location.path('/home');
        } else {
            console.log('Login Invalido');
        }
    }

});
