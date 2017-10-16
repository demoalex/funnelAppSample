/**
 * NameController
 * @namespace funnelApp.controllers
 */
(function (angular) {
  'use strict';

  angular
    .module('funnelApp.controllers')
    .controller('AppController', NameController);

  NameController.$inject = ['$state', '$stateParams', '$analytics'];

  /**
   * @namespace NameController
   */
  function NameController($state, $stateParams, $analytics) {
    var vm = this;

    activate();

    function activate(){
      // do smth
    }
  }
})(angular);
