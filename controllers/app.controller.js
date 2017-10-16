/**
 * AppController
 * @namespace funnelApp.controllers
 */
(function (angular) {
  'use strict';

  angular
    .module('funnelApp.controllers')
    .controller('AppController', AppController);

  AppController.$inject = ['$state', '$stateParams', '$analytics'];

  /**
   * @namespace AppController
   */
  function AppController($state, $stateParams, $analytics) {
    var vm = this;

    activate();

    function activate(){
      if ($rootScope.user && $rootScope.user.paymentSucceed){
        // do smth
      } else {
        alert("Please make a purchase to access the app");
        $state.go('payment');
      }
    }
  }
})(angular);
