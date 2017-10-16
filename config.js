(function (angular) {
  'use strict';

  /*
    App configuration and run
   */
  angular
    .module('funnelApp', [
      'funnelApp.config',
      'funnelApp.routes',
      'funnelApp.controllers'
    ]);

  angular
    .module('funnelApp.config', []);

  angular
    .module('funnelApp.routes', ['ui.router']);

  angular
    .module('funnelApp.controllers', []);

  angular
    .module('funnelApp')
    .run(runApp);

  runApp.$inject = ['$http', '$rootScope', '$anchorScroll', '$location', '$window', '$state', 'Authentication'];

  /**
   * @name runApp
   * @desc
   */
  function runApp($http, $rootScope, $anchorScroll, $location, $window, $state, Authentication) {
    // run the app...
    $rootScope.user = {}
  }

  /*
    Routes
   */
  angular
    .module('gplans.routes')
    .config(configRoutes);

  configRoutes.$inject = ['$stateProvider','$urlRouterProvider'];

  /**
   * @name configRoutes
   * @desc Define valid application routes
   */
  function configRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('name', {
      url: "/name",
      controller: 'NameController',
      templateUrl: 'templates/name.html'
    }).state('email', {
      url: "/email",
      controller: 'EmailController',
      templateUrl: 'templates/email.html'
    }).state('payment', {
      url: "/payment",
      controller: 'PaymentController',
      templateUrl: 'templates/payment.html'
    }).state('app', {
      url: "/app",
      controller: 'AppController',
      templateUrl: 'templates/app.html'
    })
  }

  /*
    Configuration
   */
  angular
    .module('gplans.config')
    .constant('gplansConf', {
      API_URL: window.appConf.API_URL,
      STRIPE_KEY: window.appConf.STRIPE_KEY,
      defaultPlan: window.appConf.defaultPlan,
    })
    .config(configApp);

  configApp.$inject = ['$locationProvider', '$animateProvider', '$analyticsProvider'];

  /**
   * @name configApp
   * @desc
   */
  function configApp($locationProvider, $animateProvider, $analyticsProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    // disable ng-animate-hide and other extra ng-animate classes for some cases/elements
    // it doesn't work well for every custom animations on platform
    // just add "ng-animate-disabled" class to such an element
    $animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/);

    // we could use withBase here, but it ads an extra slash to url which we hate
    // $analyticsProvider.withAutoBase(true); <- we also hate this as it ads # urls and doesn't work with html5 mode
  }

})(angular);
