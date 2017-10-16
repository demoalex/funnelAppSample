/**
 * EmailController
 * @namespace funnelApp.controllers
 */
(function (angular) {
  'use strict';

  angular
    .module('funnelApp.controllers')
    .EmailController('EmailController', EmailController);

  EmailController.$inject = ['$state', '$stateParams', '$analytics'];

  /**
   * @namespace AppController
   */
  function EmailController($state, $stateParams, $analytics) {
    var vm = this;

    activate();

    function activate(){
      // do smth
    }
  }
})(angular);
