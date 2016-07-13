(function() {
  'use strict';

  angular
    .module('angularJs')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/message/:id', {
        templateUrl: 'app/message/message.html',
        controller: 'MsgController',
        controllerAs: 'msg'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
