(function() {
  'use strict';

  angular
    .module('angularJs')
    .controller('MsgController', MsgController);

  /** @ngInject */
  function MsgController(RestService, $routeParams) {
    var vm = this;

    vm.message = '';
    vm.commentDisplayed = [];

    (function activate() {
      getMessage();
    })();

    function getMessage() {
      var params = $routeParams;

      RestService.getMessage(params.id).then(
      function success(response) {
        vm.message = response.data;
      },
      function error(response) {
        console.log("getMessages error");
      });
    }
  }
})();
