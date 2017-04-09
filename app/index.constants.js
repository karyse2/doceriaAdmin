/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('devionnAdmin')
    .constant('config', {
        baseUrl: 'http://localhost:8081'
    })
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
