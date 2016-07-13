(function() {
  'use strict';

  Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };

  angular
    .module('angularJs')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(RestService, localStorageService) {
    var vm = this;

    vm.messages = '';
    vm.commentDisplayed = [];
    vm.userNameSaved = localStorageService.get('userName');

    vm.sendMessage = sendMessage;
    vm.getMessages = getMessages;
    vm.sendComment = sendComment;
    vm.displayComments = displayComments;
    vm.setLocalStorageUserName = setLocalStorageUserName;

    (function activate() {
      getMessages();
    })();

    function sendMessage() {
      var response = RestService.sendMessage(vm.message);
      console.log(response);
    }

    function getMessages() {
      RestService.getMessages().then(
        function success(response) {
          vm.messages = response.data;
          console.log("getMessages ok");
        },
        function error(response) {
          console.log("getMessages error");
        }
      );
    }

    function sendComment(message) {
      RestService.sendComment(message).then(
        function success(response) {
          console.log("sendComment ok");
        },
        function error(response) {
          console.log("sendComment error");
        }
      );
    }

    function displayComments(message) {
      console.log(message.showComments);
      if (typeof message.showComments == 'undefined' || message.showComments == false) {
        message.showComments = true
      } else {
        message.showComments = false;
      }
    }

    function setLocalStorageUserName(userName) {
      localStorageService.set('userName', userName)
    }
  }
})();
