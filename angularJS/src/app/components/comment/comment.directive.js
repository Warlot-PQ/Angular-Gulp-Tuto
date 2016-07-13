(function() {
  'use strict';

  angular
    .module('angularJs')
    .directive('ngComment', CommentDirective);

  function CommentDirective() {
    return {
      restrict: 'E',
      scope: { message: '=data' },
      templateUrl: 'app/components/comment/comment.html'
    }
  }
})();
