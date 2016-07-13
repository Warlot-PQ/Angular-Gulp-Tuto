(function() {
  'use strict';

  angular
    .module('angularJs')
    .filter('ago', ago);
  
  function ago() {
    return function (item) {
      return moment(item).fromNow();
    }
  };
})();
