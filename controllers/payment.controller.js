/**
 * PaymentController
 * @namespace funnelApp.controllers
 */
(function (angular) {
  'use strict';

  angular
    .module('funnelApp.controllers')
    .controller('PaymentController', PaymentController);

  PaymentController.$inject = ['$state', '$stateParams', '$analytics'];

  /**
   * @namespace PaymentController
   */
  function PaymentController($state, $stateParams, $analytics) {
    var vm = this;

    activate();

    function activate(){
      if ($rootScope.user && $rootScope.user.email){
        // do smth
      } else {
        alert("Please input your email first!");
        $state.go('email');
      }
    }
  }
})(angular);
