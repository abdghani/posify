(function() {
  'use strict';

  angular
    .module('client')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/pos',
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      });

    $urlRouterProvider.otherwise('/`pos');
  }

})();
