(function() {
    'use strict';

    angular
        .module('adm')
        .service('UsuarioService', UsuarioService);

    /** @ngInject */
    function UsuarioService($http, $localStorage, config) {

        var _getTodos = function() {
            return $http.get(config.baseUrl + '/ws/usuario/getTodos');
        }

        var _salvar = function(usuario) {
            return $http.post(config.baseUrl + '/ws/usuario/salvar', usuario);
        }

        var _deletar = function(usuario) {
            return $http.post(config.baseUrl + '/ws/usuario/deletar', {idusuario: usuario.idusuario});
        }

        var _verificarExistente = function(usuario) {
            return $http.post(config.baseUrl + '/ws/usuario/verificarExistente', usuario);
        }

        var _validaLogin = function(email) {
            var validar = {
                email: email
            }
            return $http.post(config.baseUrl + '/ws/usuario/validaEmail', validar);
        }

        var _filter = function (filtro) {
            if (!filtro.campo) {
                filtro.campo = 'nome';
                filtro.tipocampo = 'string';
            }

            return $http.post(config.baseUrl + '/ws/usuario/filter', filtro);
        }


        return {
            getTodos: _getTodos,
            salvar: _salvar,
            deletar: _deletar,
            verificarExistente: _verificarExistente,
            validaLogin: _validaLogin,
            filter: _filter
        }
    }
})();
