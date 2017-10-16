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
      // do smth
    }
  }
})(angular);
