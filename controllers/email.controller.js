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
  function EmailController($rootScope, $state, $stateParams, $analytics) {
    var vm = this;

    activate();

    function activate(){
      if ($rootScope.user && $rootScope.user.name){
        // do smth
      } else {
        alert("Please input your name first!");
        $state.go('name');
      }
    }
  }
})(angular);
